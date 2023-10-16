'use strict';

var path = require('path');
var fs = require('fs');
var PathFilter = require('../../filters/PathFilter');
var Content = require('../../content.js');
var FileArtifactsFactory = require('./file-artifacts/FileArtifactsFactory.js');
var DataArtifactParserVisitor = require('./artifact-visitors/DataArtifactParserVisitor.js');
var AccessArtifactParserVisitor = require('./artifact-visitors/AccessArtifactParserVisitor.js');
var ModelSerializer = require('./model/ModelSerializer.js');
var zdmUtils = require('../zdmUtils.js');
var async = require('async');
var Model = require('./model/Model.js');
var handlebars = require('handlebars');
var fileWorker = require('../../fileWorker');

function Generator(options, services, zdmAction, logger) {
    fileWorker.set_root(options.root);
    this._options = options;
    this._services = services;
    this._logger = logger;
    this._modelSerializer = new ModelSerializer(zdmAction, logger);
    this._zdmAction = zdmAction;
    this._fileArtifactsFactory = new FileArtifactsFactory(logger);
}

Generator.prototype.getArtifactPaths = function() {
    var contentPathsFilter = new PathFilter();
    var options = this._options;
    var services = this._services;
    if (options.includeFilter.valid) {
        // an include-filter is given, merge the include-filter and the deploy options to ensure that we upload all files which are included in the deploy option;
        // if no include-filter is given, we don't need to care about the deploy option during the file walk
        contentPathsFilter.addPaths(options.includeFilter);
        contentPathsFilter.addPaths(options.deploy);
    }

    var cnt = new Content(options.root, services, options.workingSet, options.deployDirs, contentPathsFilter, options.stripCRFromCSV, options.excludeFilter);
    const artifactPaths = [...cnt.deployFiles,...cnt.synonymGrantorFiles];

    return artifactPaths;
};

function generateFileSync (that, 
    templateFilePath, 
    context, 
    fullFilePath, 
    dirPath,
    shortFilePath, 
    cb) {

    var logger = that._logger;

    that._modelSerializer.createDirsSync(dirPath);
    shortFilePath = shortFilePath.replace(/(\\)/g, '/');

    logger.logTimerInit('generate-file', "Generating file \"" + shortFilePath + "\"...");

    try {
        var templateContent = fs.readFileSync(templateFilePath, "utf-8");
        var template = handlebars.compile(templateContent);
        var targetContent = template(context);
        fs.writeFileSync(fullFilePath, targetContent);
    } catch (error) {
        cb(new Error("Error generating file \"" + shortFilePath + "\": " + error.message));
    }

    logger.logTimerDelta('generate-file', "Generating file \"" + shortFilePath + "\"... ok");
}

function createEmptyNamespace (that, tempDir, outputDir, cb) {
    var templatePath = path.join(__dirname, "..", "resources", "src", "namespace.hdinamespace.template");
    var namespaceFilename = '.' + zdmUtils.hdinamespace;

    var context = {
        'name': '',
        'subfolder': 'ignore'
    };

    generateFileSync(that, 
        templatePath, 
        context, 
        path.join(tempDir, outputDir, namespaceFilename), 
        path.join(tempDir, outputDir), 
        path.join(outputDir, namespaceFilename), 
        cb);
}

function createAccessRole(that, writeAccess, cb) {
    var modelSerializer = that._modelSerializer;
    var templatePath = path.join(__dirname, "..", "resources", "src", "zdm_access.hdbrole.template");
    var roleArtifactFilename = zdmUtils.generatedHdbroleFilename + '.' + zdmUtils.hdbrole;
    var tempDir = modelSerializer.getGeneratedDir();
    var outputDir = path.join('data', 'src', 'zdm_roles');

    var context = {
        'writeAccess': writeAccess
    };

    generateFileSync(that, 
        templatePath, 
        context, 
        path.join(tempDir, outputDir, roleArtifactFilename), 
        path.join(tempDir, outputDir), 
        path.join(outputDir, roleArtifactFilename), 
        cb);
    createEmptyNamespace(that, tempDir, outputDir, cb);
}

function createSequencesRole (that, cb) {
    var model = that._model;
    var modelSerializer = that._modelSerializer;
    var templatePath = path.join(__dirname, "..", "resources", "src", "zdm_sequences.hdbrole.template");
    var roleArtifactFilename = zdmUtils.generatedSequencesHdbroleFilename + '.' + zdmUtils.hdbrole;
    var tempDir = modelSerializer.getGeneratedDir();
    var outputDir = path.join('data', 'src', 'zdm_roles');

    var sequences = [];
    var sequenceArtifacts = model.getSequences();
    for (var i=0; i<sequenceArtifacts.length; i++) {
        var sequenceArtifact = sequenceArtifacts[i];
        var fullname = sequenceArtifact.getFullname();
        var sequence = {};
        sequence.fullname = fullname;
        sequences.push(sequence);
    }

    var context = {
        'sequences': sequences
    };

    generateFileSync(that,
        templatePath, 
        context, 
        path.join(tempDir, outputDir, roleArtifactFilename), 
        path.join(tempDir, outputDir),
        path.join(outputDir, roleArtifactFilename), 
        cb);
}

// Duplicates the content of file after ModelSerializer.serializeSync()
function duplicateParsedFile(model, sourceShortPath, targetTempDir, targetShortPath, fileArtifactsFactory) {
    if (model.getFileArtifact(targetShortPath)) {
        return;
    }

    var targetFileArtifact = fileArtifactsFactory.createArtifact(targetTempDir, targetShortPath);
    if (!targetFileArtifact) {
        return null;
    }
    var sourceFileArtifact = model.getFileArtifact(sourceShortPath);

    if (!sourceFileArtifact) {
        return null;
    }

    targetFileArtifact.setOriginalContentForAccessContainer(sourceFileArtifact.getOriginalContentForDataContainer());
    model.addFileArtifact(targetFileArtifact);
}

function duplicateHdiConfigFile(model, modelSerializer, targetHdiConfigPathForAccessContainer, fileArtifactsFactory) {
    var tempDir = modelSerializer.getGeneratedDir();
    var sourceHdiConfig = model.getHdiConfigs()[0];
    var sourceHdiConfigPath = sourceHdiConfig._shortFilePath;

    duplicateParsedFile(model, 
        sourceHdiConfigPath, 
        tempDir, 
        targetHdiConfigPathForAccessContainer,
        fileArtifactsFactory);
}

function createHdiConfigInAccessCfgDir(model, modelSerializer, fileArtifactsFactory) {
    var hdiConfigFilename = '.' + zdmUtils.hdiconfig;
    if (!model.existsHdiConfigInGlobalCfgDir()) {
        var targetHdiConfigPathForAccessContainer = 'cfg/' + hdiConfigFilename;
        duplicateHdiConfigFile(model, modelSerializer, targetHdiConfigPathForAccessContainer, fileArtifactsFactory);
    }

    if (!model.existsReusableModule()) {
        return;
    }

    var aReusableModuleNameObjs = model.getReusableModuleNameObjects();
    for (var i=0; i<aReusableModuleNameObjs.length; i++) {
        var oReusableModuleName = aReusableModuleNameObjs[i];
        if (model.existsHdiConfigInReusableModuleCfgDir(oReusableModuleName)) {
            continue;
        }
        var targetHdiConfigPathForReusableModule = 'node_modules/' + oReusableModuleName.moduleName +'/cfg/' + hdiConfigFilename;
        if (oReusableModuleName.scopeName !== null) {
            targetHdiConfigPathForReusableModule = 'node_modules/' + oReusableModuleName.scopeName + '/' + oReusableModuleName.moduleName +'/cfg/' + hdiConfigFilename;
        }
        duplicateHdiConfigFile(model, modelSerializer, targetHdiConfigPathForReusableModule, fileArtifactsFactory);
    }
}

function createHdbGrants(that, cb) {
    var model = that._model;
    var modelSerializer = that._modelSerializer;
    var hdbGrantsFilename = zdmUtils.generatedHdbGrantsFilename + '.' + zdmUtils.hdbgrants;
    var templatePath = path.join(__dirname, "..", "resources", "cfg", "zdm_data_access.hdbgrants.template");
    var tempDir = modelSerializer.getGeneratedDir();
    var outputDir = path.join('access', 'cfg');

    createHdiConfigInAccessCfgDir(model, modelSerializer, that._fileArtifactsFactory);

// context = { 
//     'dataContainer': zdmUtils.logicalServiceDataContainer
//     'applicationUser': {
//         'containerRoles': ['zdm_sequences']
//     }
// }

    var context = {
        'dataContainer': zdmUtils.logicalServiceDataContainer
    };

    if (model.existsSequences()) {
        var applicationUserObj = {
            'containerRoles': [ zdmUtils.generatedSequencesHdbroleFilename ]
        };
        context.applicationUser = applicationUserObj;
    }

    generateFileSync(that,
        templatePath, 
        context, 
        path.join(tempDir, outputDir, hdbGrantsFilename),
        path.join(tempDir, outputDir), 
        path.join(outputDir, hdbGrantsFilename), 
        cb);
}

function createProjectionViews(that, generationPredicates, cb) {
    var model = that._model;
    var fileArtifacts = model.getFileArtifacts();
    var modelSerializer = that._modelSerializer;
    var tempDir = modelSerializer.getGeneratedDir();
    var templatePath = path.join(__dirname, "..", "resources", "src", "projectionView.hdbprojectionview.template");

    for (var fileArtifactPath in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(fileArtifactPath)) {
            continue;
        }
        var fileArtifact = fileArtifacts[fileArtifactPath];

        if (!generationPredicates.shouldGenerateProjectionView(fileArtifact)) {
            continue;
        }

        var entities = fileArtifact.getEntities();

        for (var i=0; i<entities.length; i++) {
            var entity = entities[i];
            var projectionViewFilename = entity._fullnameWithoutNamespace + '.' + zdmUtils.hdbprojectionview;
            var outputDir = path.join('access', fileArtifact._directoryPath);

            var entityCtx = {};
            entityCtx.fullname = entity._fullname;
            entityCtx.columns = [];
            var columns = entity.getColumns();

            for (var j=0; j<columns.length; j++) {
                var column = columns[j];

                // Skip generation of projection view columns for columns of type 'cds.Association'.
                // May occur during parsing of CDS artifacts (legacy from CDS parsing functionality with temp container).
                if (column._type.indexOf('Association') !== -1) {
                    continue;
                }

                var columnName = column._name;
                entityCtx.columns.push({
                    'viewName': columnName, 
                    'tableName': columnName
                });
            }

            var context = {
                'entity': entityCtx
            };

            generateFileSync(that, 
                templatePath, 
                context, 
                path.join(tempDir, outputDir, projectionViewFilename), 
                path.join(tempDir, outputDir),
                path.join(outputDir, projectionViewFilename), 
                cb);
        }
    }
}

function getTargetOutputCfgDir(fileArtifact) {
    if (!fileArtifact._isReusableModule) {
        return path.join('access', 'cfg', fileArtifact._directoryPathStartingWithoutSrcCfgLib);
    }
    var oReusableModuleName = fileArtifact._oReusableModuleName;
    if (oReusableModuleName.scopeName !== null) {
        return path.join('access', 'node_modules', oReusableModuleName.scopeName, oReusableModuleName.moduleName , 'cfg', fileArtifact._directoryPathStartingWithoutSrcCfgLib);
    }
    return path.join('access', 'node_modules', oReusableModuleName.moduleName , 'cfg', fileArtifact._directoryPathStartingWithoutSrcCfgLib);
}

function createProjectionViewConfigs(that, generationPredicates, cb) {
    var model = that._model;
    var fileArtifacts = model.getFileArtifacts();
    var modelSerializer = that._modelSerializer;
    var templatePath = path.join(__dirname, "..", "resources" , "cfg", "projectionViewConfig.hdbprojectionviewconfig.template");
    var tempDir = modelSerializer.getGeneratedDir();

    for (var fileArtifactPath in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(fileArtifactPath)) {
            continue;
        }
        var fileArtifact = fileArtifacts[fileArtifactPath];

        if (!generationPredicates.shouldGenerateProjectionView(fileArtifact)) {
            continue;
        }

        var entities = fileArtifact.getEntities();

        for (var i=0; i<entities.length; i++) {
            var entity = entities[i];
            var projectionViewConfigFilename = entity._fullnameWithoutNamespace + '.' + zdmUtils.hdbprojectionviewconfig;
            var outputDir = getTargetOutputCfgDir(fileArtifact);

            var entityCtx = {};
            entityCtx.fullname = entity._fullname;
            entityCtx.dataContainer = zdmUtils.logicalServiceDataContainer;

            var context = {
                'entity': entityCtx
            };

            generateFileSync(that, 
                templatePath, 
                context, 
                path.join(tempDir, outputDir, projectionViewConfigFilename), 
                path.join(tempDir, outputDir), 
                path.join(outputDir, projectionViewConfigFilename), 
                cb);
        }
    }
}

function createSequenceSynonyms(that, cb) {
    var model = that._model;
    var modelSerializer = that._modelSerializer;
    var tempDir = modelSerializer.getGeneratedDir();
    var templatePath = path.join(__dirname, "..", "resources", "src", "synonym.hdbsynonym.template");

    var sequenceArtifacts = model.getSequences();
    for (var i=0; i<sequenceArtifacts.length; i++) {
        var sequenceArtifact = sequenceArtifacts[i];
        var fullname = sequenceArtifact.getFullname();

        var context = {
            'fullname': fullname
        };

        var sequenceSynonymFilename = sequenceArtifact._fileNameWithoutSuffix + '.' + zdmUtils.hdbsynonym;
        var outputDir = path.join('access', sequenceArtifact._directoryPath);

        generateFileSync(that, 
            templatePath, 
            context, 
            path.join(tempDir, outputDir, sequenceSynonymFilename), 
            path.join(tempDir, outputDir), 
            path.join(outputDir, sequenceSynonymFilename), 
            cb);
    }
}

function createSequenceSynonymConfigs(that, cb) {
    var model = that._model;
    var modelSerializer = that._modelSerializer;
    var tempDir = modelSerializer.getGeneratedDir();
    var templatePath = path.join(__dirname, "..", "resources", "cfg", "synonym.hdbsynonymconfig.template");
    var sequenceArtifacts = model.getSequences();

    for (var i=0; i<sequenceArtifacts.length; i++) {
        var sequenceArtifact = sequenceArtifacts[i];
        var fullname = sequenceArtifact.getFullname();

        var context = {
            'fullname': fullname,
            'dataContainer': zdmUtils.logicalServiceDataContainer
        };

        var sequenceSynonymConfigFilename = sequenceArtifact._fileNameWithoutSuffix + '.' + zdmUtils.hdbsynonymconfig;
        var outputDir = getTargetOutputCfgDir(sequenceArtifact);

        generateFileSync(that, 
            templatePath, 
            context, 
            path.join(tempDir, outputDir, sequenceSynonymConfigFilename), 
            path.join(tempDir, outputDir), 
            path.join(outputDir, sequenceSynonymConfigFilename), 
            cb);
    }
}

function addNewSuffixToPluginMappingsIntoHdiConfigFiles(model, generatedFileSuffixes) {
    var hdiConfigArtifacts = model.getHdiConfigs();
    var aGeneratedFileSuffixes = Object.keys(generatedFileSuffixes);

    for (var i=0; i<hdiConfigArtifacts.length; i++) {
        var hdiConfigArtifact = hdiConfigArtifacts[i];
        for (var j=0; j<aGeneratedFileSuffixes.length; j++) {
            var fileSuffix = aGeneratedFileSuffixes[j];
            if (hdiConfigArtifact.existsSuffixToPluginMapping(fileSuffix)) {
                continue;
            }
            hdiConfigArtifact.addSuffixToPluginMapping(fileSuffix);
        }
    }
}

Generator.prototype._createGenerationPredicates = function () {
    var isFinalizeAction = (this._zdmAction === zdmUtils.finalizeAction) ? true : false;

    function existsEntities(model) {
        return model.existsEntities();
    }

    function existsNonCdsEntities(model) {
        return model.existsNonCdsEntities();
    }

    function existsEntitiesInNotFinalizeAction(model) {
        return (!isFinalizeAction && existsEntities(model)) ? true : false;
    }

    function existsNonCdsEntitiesInNotFinalizeAction(model) {
        return (!isFinalizeAction && existsNonCdsEntities(model)) ? true : false;
    }

    function existsSequences(model) {
        return model.existsSequences();
    }

    function shouldGenerateSequencesRole(model) {
        return existsSequences(model);
    }

    function shouldGenerateSequenceSynonyms(model) {
        return (!isFinalizeAction && existsSequences(model)) ? true : false;
    }

    function shouldGenerateProjectionView(fileArtifact) {
        if (isFinalizeAction) {
            return false;
        }
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass === 'HDBCDS') {
            return false;
        }
        if (!fileArtifact.haveEntities()) {
            return false;
        }
        return true;
    }

    return {
        'shouldGenerateAccessRole': existsEntities,
        'shouldGenerateHdbGrants': existsEntitiesInNotFinalizeAction,
        'shouldGenerateProjectionViews': existsNonCdsEntitiesInNotFinalizeAction,
        'shouldGenerateProjectionView': shouldGenerateProjectionView,
        'shouldGenerateSequencesRole': shouldGenerateSequencesRole,
        'shouldGenerateSequenceSynonyms': shouldGenerateSequenceSynonyms
    };
};

Generator.prototype.existsCdsFileArtifact = function () {
    var that = this;
    var model = that._model;
    return model.existsCdsFileArtifact();
};

Generator.prototype.generate = function (originalArtifactsRootPath, asyncCb) {
    var that = this;
    var artifactPaths = that.getArtifactPaths();
    var fileArtifacts = that._fileArtifactsFactory.createArtifacts(originalArtifactsRootPath, artifactPaths);
    var model = new Model();
    that._model = model;
    var logger = that._logger;
    model.addFileArtifacts(fileArtifacts);

    var generationPredicates = that._createGenerationPredicates();
    var generatedFileSuffixes = {};

    async.series([ 
        function(cb) {
            var artifactVisitors = [];
            var dataArtifactVisitor = new DataArtifactParserVisitor(model);
            var accessArtifactVisitor = new AccessArtifactParserVisitor(model);
            artifactVisitors.push(dataArtifactVisitor);
            artifactVisitors.push(accessArtifactVisitor);

            async.eachSeries(fileArtifacts, function(fileArtifact, eachCb1) {
                logger.logTimerInit('process-file', "Processing file \""+ fileArtifact._shortFilePath +"\"...");
                async.eachSeries(artifactVisitors, function(artifactVisitor, eachCb2) {
                    fileArtifact.accept(artifactVisitor, eachCb2);
                }, function(err) {
                    if(err) {
                        eachCb1(err);
                    }
                    logger.logTimerDelta('process-file', "Processing file \""+ fileArtifact._shortFilePath +"\"... ok");
                    eachCb1();
                });
            }, function(err) {
                if(err) {
                    cb(err);
                }
                cb();
            });

        }, function(cb) {
            if (generationPredicates.shouldGenerateAccessRole(model)) {
                createAccessRole(that, true, cb);
                generatedFileSuffixes[zdmUtils.hdbrole] = 1;
            }
            cb();

        }, function(cb) { 
            if (generationPredicates.shouldGenerateSequencesRole(model)) {
                createSequencesRole(that, cb);
            }
            cb();

        }, function(cb) { 
            if (generationPredicates.shouldGenerateHdbGrants(model)) {
                createHdbGrants(that, cb);
            }
            cb();

        }, function(cb) { 
            if (model.existsDefaultAccessRole()) {
                // Commented until decision is taken on how to handle default_access_role.hdbrole and other user difined roles. 
                // Until then .hdbrole files are deployed only into access container.
                // doNotDeployDefaultAccessRoleNamespaceToDataContainer(model);
            }
            cb();

        }, function(cb) { 
            if (generationPredicates.shouldGenerateProjectionViews(model)) {
                createProjectionViews(that, generationPredicates, cb);
                generatedFileSuffixes[zdmUtils.hdbprojectionview] = 1;
            }
            cb();

        }, function(cb) { 
            if (generationPredicates.shouldGenerateProjectionViews(model)) {
                createProjectionViewConfigs(that, generationPredicates, cb);
                generatedFileSuffixes[zdmUtils.hdbprojectionviewconfig] = 1;
            }
            cb();

        }, function(cb) { 
            if (generationPredicates.shouldGenerateSequenceSynonyms(model)) {
                createSequenceSynonyms(that, cb);
                generatedFileSuffixes[zdmUtils.hdbsynonym] = 1;
            }
            cb();

        }, function(cb) { 
            if (generationPredicates.shouldGenerateSequenceSynonyms(model)) {
                createSequenceSynonymConfigs(that, cb);
                generatedFileSuffixes[zdmUtils.hdbsynonymconfig] = 1;
            }
            cb();

        }, function(cb) { 
            addNewSuffixToPluginMappingsIntoHdiConfigFiles(model, generatedFileSuffixes);
            cb();

        }, function(cb) {
            // Generate (copy/paste) fileArtifacts.
            // Should be called last because the model is incremently modified.
            that._modelSerializer.serializeSync(model);
            cb();

        }], function (err) {
            if(err) {
                return asyncCb(err);
            }
            asyncCb();
    });
};

Generator.prototype.getGeneratedDir = function () {
    return this._modelSerializer.getGeneratedDir();
};

module.exports = Generator;

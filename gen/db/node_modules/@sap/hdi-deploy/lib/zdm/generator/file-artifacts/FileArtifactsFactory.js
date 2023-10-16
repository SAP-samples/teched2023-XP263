'use strict';

var path = require('path');
var zdmUtils = require('../../zdmUtils.js');
var HDINamespace = require('./HDINamespace.js');
var HDIConfig = require('./HDIConfig.js');
var HDBCDS = require('./HDBCDS.js');
var AccessContainerDuplicate = require('./AccessContainerDuplicate.js');
var DataContainerDuplicate = require('./DataContainerDuplicate.js');
var HDBTable = require('./HDBTable.js');
var HDBSequence = require('./HDBSequence.js');
var HDBRole = require('./HDBRole.js');
var paths = require('../../../paths.js');

function FileArtifactsFactory(logger) {
    this._logger = logger;
}

var ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR = {};

// Artifacts for DATA schema
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbconstraint] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbcollection] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbfulltextindex] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbindex] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbsequence] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDBSequence(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbstatistics] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtable] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDBTable(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbdropcreatetable] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDBTable(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtabledata] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.csv] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.properties] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.tags] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new DataContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};

// Artifacts for ACCESS schema
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbafllangprocedure] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbanalyticprivilege] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbcalculationview] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbflowgraph] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbfunction] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbgraphworkspace] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbmrjob] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.jar] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdblibrary] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdblogicalschema] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbprocedure] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbprojectionview] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbprojectionviewconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbpublicsynonym] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbreptask] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbresultcache] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbrole] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDBRole(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbroleconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbsearchruleset] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbview] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbstructuredprivilege] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbsynonym] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbsynonymconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbsysbicsynonym] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtabletype] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtextconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtextdict] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtextrule] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtextinclude] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtextlexicon] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtextminingconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbtrigger] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualfunction] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualfunctionconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualprocedure] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualprocedureconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualtable] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualtableconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualpackagehadoop] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbvirtualpackagesparksql] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.txt] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbgrants] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new AccessContainerDuplicate(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};

// Artifacts for DATA and ACCESS schemas
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdiconfig] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDIConfig(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdinamespace] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDINamespace(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};
ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[zdmUtils.hdbcds] = function(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
        return new HDBCDS(fullFilePath, filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger);
};

FileArtifactsFactory.prototype.createArtifact = function(rootPath, filePath) {
    var that = this;
    filePath = paths.clientPath(filePath);
    var fileNameWithSuffix = path.basename(filePath);
    var re = /(?:\.([^.]+))?$/;
    var fileSuffix = re.exec(fileNameWithSuffix)[1];

    if (!fileSuffix) {
        return null;
    }

    var fileNameWithoutSuffix = fileNameWithSuffix.substring(0, fileNameWithSuffix.lastIndexOf('.')) || fileNameWithSuffix;
    var artifactConstructor;

    if (!ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR.hasOwnProperty(fileSuffix)) {
        return null;
    }

    artifactConstructor = ARTIFACT_FILE_SUFFIX_TO_CONSTRUCTOR[fileSuffix];

    if (artifactConstructor && typeof artifactConstructor === 'function') {
        var fileArtifact = artifactConstructor(path.join(rootPath, filePath), filePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, that._logger);
        return fileArtifact;
    }

    return null;
};

FileArtifactsFactory.prototype.createArtifacts = function(rootPath, artifactPaths) {
    var that = this;
    var artifacts = [];

    for (var i=0; i<artifactPaths.length; i++) {
        const filePath = Array.isArray(artifactPaths[i]) ? artifactPaths[i][0] : artifactPaths[i];
        var fileArtifact = that.createArtifact(rootPath, filePath);

        if (!fileArtifact) {
            continue;
        }

        artifacts.push(fileArtifact);
    }
    return artifacts;
};

module.exports = FileArtifactsFactory;
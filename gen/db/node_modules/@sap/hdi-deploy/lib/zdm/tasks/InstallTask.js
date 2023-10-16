'use strict';

var Task = require('./Task.js');
var path = require('path');
var Generator = require('../generator/Generator.js');
var async = require('async');
var zdmUtils = require('../zdmUtils.js');

function InstallTask() {
    Task.prototype.constructor.apply(this, arguments);
}

InstallTask.prototype = Object.create(Task.prototype);
InstallTask.prototype.constructor = InstallTask;

InstallTask.prototype.start = function() {
    var that = this;
    Task.prototype.start.apply(that, arguments);
    var hdiDeployerCb = that.getHdiDeployerCb();
    var options = that.getOptions();
    var logger = that._logger;
    var generator = new Generator(options, that.getServices(), that.getZdmAction(), logger);
    var generatedDir = generator.getGeneratedDir();
    var existsCdsFileArtifact;

    async.series([function(cb) {
        var modelSerializer = generator._modelSerializer;
        var outputDir = modelSerializer.getGeneratedDir();

        logger.logTimerInit('create-temp-dir', "Creating temporary directory \"" + outputDir + "\"...");
        modelSerializer.createDirsSync(outputDir);
        logger.logTimerDelta('create-temp-dir', "Creating temporary directory \"" + outputDir + "\"... ok");
        cb();

    }, function(cb) {
        logger.logTimerInit('process-files', "Processing files...");
        generator.generate(that._originalOptions.root, cb);
        existsCdsFileArtifact = generator.existsCdsFileArtifact();

    }, function(cb) {
        logger.logTimerDelta('process-files', "Processing files... ok");
        cb();

    }, function(cb) {
        that.invalidatePathFilters(options);
        var dataContainerArtifactsPath = path.join(generatedDir, 'data');
        logger.logTimerInit('deploy-data', "Deploying files from \"" + dataContainerArtifactsPath + "\" to data container \"" + that.getDataContainer() + "\"...");
        // Limitation in HANA2 SPS01
        // if (existsCdsFileArtifact) {
        //     options.parameters['com.sap.hana.di.cds/cds_internal_config'] = 'disableNativeAssociations';
        // }
        that.deployZdmContent(that, dataContainerArtifactsPath, that.getDataContainer(), cb);

    }, function(cb) {
        logger.logTimerDelta('deploy-data', "Deploying to data container \"" + that.getDataContainer() + "\"... ok");
        cb();

    }, function(cb) {
        var accessContainerArtifactsPath = path.join(generatedDir, 'access');
        logger.logTimerInit('deploy-access', "Deploying files from \"" + accessContainerArtifactsPath + "\" to access container \"" + that.getAccessContainer() + "\"...");
        if (existsCdsFileArtifact) {
            delete options.parameters['com.sap.hana.di.cds/cds_internal_config'];
            var dataContainerSchema = that.getServices().getCreds(that.getDataContainer()).schema;
            options.parameters['com.sap.hana.di.cds/cds_persistence_schema'] = dataContainerSchema;
        }
        that.deployZdmContent(that, accessContainerArtifactsPath, that.getAccessContainer(), cb);

    }, function(cb) {
        logger.logTimerDelta('deploy-access', "Deploying to access container \"" + that.getAccessContainer() + "\"... ok");
        cb();

    }], function(err) {
        // Return original state of options, log error and call hdideploy.js callback;
        that.setOptions(that._originalOptions);

        if (err) {
            if (err.message) {
                logger.error(err.message);
            } else {
                logger.error(err);
            }
            return hdiDeployerCb(that.getFailureFinalMsg());
        }
        logger.log(that.getSuccessfulFinalMsg());
        return hdiDeployerCb();
    });
};

InstallTask.prototype.getZdmAction = function() {
    return zdmUtils.installAction;
};

module.exports = InstallTask;

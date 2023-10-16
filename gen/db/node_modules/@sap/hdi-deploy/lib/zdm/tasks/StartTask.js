'use strict';

var Task = require('./Task.js');
var path = require('path');
var Generator = require('../generator/Generator.js');
var async = require('async');
var zdmUtils = require('../zdmUtils.js');

function StartTask() {
    Task.prototype.constructor.apply(this, arguments);
}

StartTask.prototype = Object.create(Task.prototype);
StartTask.prototype.constructor = StartTask;

StartTask.prototype.start = function() {
    // Get V1 data artifacts from data container and create V1 model (or V1 dir path with manual file parsing).
    // Parse V2 artifacts and create V2 model.
    // Parse changelog and register changes into V1 model and V2 model.
    // Merge entities and types from both versions (data cotainer artifacts) into V1 model.
    // Split V1 artifacts.
    // Deploy merged V1/V2 artifacts to data container.
    // Deploy not modified V2 artifacts to access container.

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
            return hdiDeployerCb(new Error(that.getFailureFinalMsg()));
        }
        logger.log(that.getSuccessfulFinalMsg());
        return hdiDeployerCb();
    });
};

StartTask.prototype.getZdmAction = function() {
    return zdmUtils.startAction;
};

module.exports = StartTask;

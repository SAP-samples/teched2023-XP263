'use strict';

var taskFactory = require('./tasks/taskFactory.js');
var zdmUtils = require('./zdmUtils.js');

const IgnoreFile = require('../IgnoreFile');


exports.deploy = function deploy(deployCb, options, services, logger, hdiDeployerCb) {
    function validateZdmServiceReplacements() {
        services.getServiceUsingServiceReplacements(zdmUtils.logicalServiceDataContainer);
        services.getServiceUsingServiceReplacements(zdmUtils.logicalServiceAccessContainer);
    }

    try {
        validateZdmServiceReplacements();

       /*
        * Make sure that the filter is valid.
        * Since the excludeFilter works "reverse", we need to make sure that it's always valid.
        * An invalid filter would match everything.
        */
        options.excludeFilter.valid = true;

        const ignore_file = new IgnoreFile(options.root);
        options.excludeFilter.addPaths(ignore_file.getPaths());

        var task = taskFactory.createTask(process.env.HDI_DEPLOY_ZDM_ACTION, deployCb, options, services, logger, hdiDeployerCb);
        task.start();
    } catch (err) {
        logger.error(err.message);
        return hdiDeployerCb(new Error(zdmUtils.failureFinalMsg + " [" + zdmUtils.deployId + "]"));
    }
};

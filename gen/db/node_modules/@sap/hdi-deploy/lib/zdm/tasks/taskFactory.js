'use strict';

var InstallTask = require('./InstallTask.js');
var StartTask = require('./StartTask.js');
var FinalizeTask = require('./FinalizeTask.js');
var zdmUtils = require('../zdmUtils.js');

function TaskFactory() {}

TaskFactory.prototype.createTask = function (action, deployCb, options, services, logger, hdiDeployerCb) {
    switch(action) {
        case zdmUtils.installAction :
            return new InstallTask(deployCb, options, services, logger, hdiDeployerCb);
        case zdmUtils.startAction :
            return new StartTask(deployCb, options, services, logger, hdiDeployerCb);
        case zdmUtils.finalizeAction :
            return new FinalizeTask(deployCb, options, services, logger, hdiDeployerCb);
        default :
            throw new Error("Unsupported action: \"" + action + "\".");
    }
};

module.exports = new TaskFactory();

'use strict';

var zdmUtils = require('../zdmUtils.js');
var PathFilter = require('../../filters/PathFilter');

function Task(deployCb, options, services, logger, hdiDeployerCb) {
    var dataContainer = services.getServiceUsingServiceReplacements(zdmUtils.logicalServiceDataContainer).name;
    var accessContainer = services.getServiceUsingServiceReplacements(zdmUtils.logicalServiceAccessContainer).name;

    this.setDataContainer(dataContainer);
    this.setAccessContainer(accessContainer);

    this.setOptions(options);
    this._originalOptions = options;

    this.setDeployCb(deployCb);
    this.setServices(services);
    this.setHdiDeployerCb(hdiDeployerCb);

    this._logger = logger;
}

Task.prototype.start = function() {
    var that = this;
    var logger = that._logger;
    logger.log("Start ZDM deployment in action \"" + that.getZdmAction() + "\"");
};

Task.prototype.deployZdmContent = function(that, rootPath, targetContainer, cb) {
    var options = that.getOptions();
    var deployCb = that.getDeployCb();
    var services = that.getServices();

    try {
        process.env.TARGET_CONTAINER = targetContainer;
        options.root = rootPath;
        deployCb(options, services, cb);
    } catch (error) {
        cb(error.message);
    }
};

Task.prototype.getDataContainer = function() {
    return this._dataContainer;
};

Task.prototype.setDataContainer = function(dataContainer) {
    this._dataContainer = dataContainer;
};

Task.prototype.getAccessContainer = function() {
    return this._accessContainer;
};

Task.prototype.setAccessContainer = function(accessContainer) {
    this._accessContainer = accessContainer;
};

Task.prototype.getOptions = function() {
    return this._options;
};

Task.prototype.setOptions = function(options) {
    this._options = options;
};

Task.prototype.getDeployCb = function() {
    return this._deployCb;
};

Task.prototype.setDeployCb = function(deployCb) {
    this._deployCb = deployCb;
};

Task.prototype.getHdiDeployerCb = function() {
    return this._hdiDeployerCb;
};

Task.prototype.setHdiDeployerCb = function(hdiDeployerCb) {
    this._hdiDeployerCb = hdiDeployerCb;
};

Task.prototype.getServices = function() {
    return this._services;
};

Task.prototype.setServices = function(services) {
    this._services = services;
};

Task.prototype.getZdmAction = function() {
    throw new Error('Abstract method');
};

Task.prototype.getSuccessfulFinalMsg = function() {
    return zdmUtils.successfulFinalMsg + " in action \"" + this.getZdmAction() + "\" [" + zdmUtils.deployId + "]";
};

Task.prototype.getFailureFinalMsg = function() {
    return zdmUtils.failureFinalMsg + " in action \"" + this.getZdmAction() + "\" [" + zdmUtils.deployId + "]";
};

Task.prototype.invalidatePathFilters = function(options) {
    options.workingSet = new PathFilter();
    options.includeFilter = new PathFilter();
    options.deploy = new PathFilter();
    options.undeploy = new PathFilter();
};

module.exports = Task;

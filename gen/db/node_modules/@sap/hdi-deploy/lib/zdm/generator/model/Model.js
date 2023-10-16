'use strict';

var zdmUtils = require('../../zdmUtils.js');

function Model() {
    this._model = {
        '_fileArtifacts': {}
    };
}

Model.prototype.addFileArtifact = function(fileArtifact) {
    var model = this._model;
    model._fileArtifacts[fileArtifact._shortFilePath] = fileArtifact;
};

Model.prototype.addFileArtifacts = function(fileArtifacts) {
    for (var i=0; i<fileArtifacts.length; i++) {
        this.addFileArtifact(fileArtifacts[i]);
    }
};

Model.prototype.getFileArtifact = function(fileArtifactPath) {
    var model = this._model;
    return model._fileArtifacts[fileArtifactPath];
};

Model.prototype.deleteFileArtifact = function(fileArtifactPath) {
    var model = this._model;
    delete model._fileArtifacts[fileArtifactPath];
};

Model.prototype.getFileArtifacts = function() {
    var model = this._model;
    return model._fileArtifacts;
};

Model.prototype.getFileArtifactsInDir = function (directoryPath) {
    var fileArtifacts = this.getFileArtifacts();
    var fileArtifactsInDir = [];

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        if (path.indexOf(directoryPath) === -1) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        fileArtifactsInDir.push(fileArtifact);
    }

    return fileArtifactsInDir;
};

Model.prototype.existsEntities = function() {
    var fileArtifacts = this.getFileArtifacts();

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        if(fileArtifact.haveEntities()) {
            return true;
        }
    }
    return false;
};

Model.prototype.existsNonCdsEntities = function() {
    var fileArtifacts = this.getFileArtifacts();

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass === 'HDBCDS') {
            continue;
        }
        if(fileArtifact.haveEntities()) {
            return true;
        }
    }
    return false;
};

Model.prototype.existsSequences = function() {
    var fileArtifacts = this.getFileArtifacts();

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass === 'HDBSequence') {
            return true;
        }
    }
    return false;
};

Model.prototype.getSequences = function() {
    var fileArtifacts = this.getFileArtifacts();

    var sequences = [];

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass !== 'HDBSequence') {
            continue;
        }
        sequences.push(fileArtifact);
    }

    return sequences;
};

Model.prototype.getEntities = function() {
    var fileArtifacts = this.getFileArtifacts();

    var entities = [];

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass !== 'HDBTable' || artifactClass !== 'HDBCDS') {
            continue;
        }
        var localEntities = fileArtifact.getEntities();
        for (var i=0; i<localEntities.length; i++) {
            entities.push(localEntities[i]);
        }
    }

    return entities;
};

Model.prototype.getEntity = function(entityFullname) {
    var entities = this.getEntities();

    for (var i=0; i<entities.length; i++) {
        var entity = entities[i];
        if (entity._fullname === entityFullname) {
            return entity;
        }
    }

    return null;
};

Model.prototype.existsCdsFileArtifact = function() {
    var fileArtifacts = this.getFileArtifacts();

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass === 'HDBCDS') {
            return true;
        }
    }
    return false;
};

Model.prototype.existsDefaultAccessRole = function() {
    var fileArtifacts = this.getFileArtifacts();

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        if (fileArtifact._shortFilePath === zdmUtils.defaultAccessRolePath) {
            return true;
        }
    }
};

Model.prototype.getHdiConfigs = function() {
    var fileArtifacts = this.getFileArtifacts();
    var hdiConfigs = [];

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        var artifactClass = fileArtifact.constructor.name;
        if(artifactClass !== 'HDIConfig') {
            continue;
        }
        hdiConfigs.push(fileArtifact);
    }

    return hdiConfigs;
};

Model.prototype.existsHdiConfigInGlobalCfgDir = function() {
    var sourceHdiConfigArtifacts = this.getHdiConfigs();

    for (var i=0; i<sourceHdiConfigArtifacts.length; i++) {
        var sourceHdiConfig = sourceHdiConfigArtifacts[i];
        var globalCfgRegEx =  /^cfg\//;
        if (globalCfgRegEx.test(sourceHdiConfig._shortFilePath)) {
            return true;
        }
    }
    return false;
};

Model.prototype.existsReusableModule = function() {
    var fileArtifacts = this.getFileArtifacts();

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        if(fileArtifact._isReusableModule) {
            return true;
        }
    }
    return false;
};

Model.prototype.getReusableModuleFileArtifacts = function() {
    var fileArtifacts = this.getFileArtifacts();
    var reusableModules = [];

    for (var path in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(path)) {
            continue;
        }
        var fileArtifact = fileArtifacts[path];
        if(fileArtifact._isReusableModule) {
            reusableModules.push(fileArtifact);
        }
    }

    return reusableModules;
};

Model.prototype.getReusableModuleNameObjects = function() {
    var reusableModules = this.getReusableModuleFileArtifacts();
    var aReusableModuleNameObjects = [];

    for (var i=0; i<reusableModules.length; i++) {
        var reusableModule = reusableModules[i];
        var oReusableModuleName = reusableModule._oReusableModuleName;
        if (zdmUtils.arrayContains(aReusableModuleNameObjects, oReusableModuleName)) {
            continue;
        }
        aReusableModuleNameObjects.push(oReusableModuleName);
    }

    return aReusableModuleNameObjects;
};

Model.prototype.getReusableModuleFileArtifactsByModuleName = function(oReusableModuleName) {
    var allReusableModuleFileArtifacts = this.getReusableModuleFileArtifacts();
    var aReusableModuleFileArtifacts = [];

    for (var i=0; i<allReusableModuleFileArtifacts.length; i++) {
        var reusableModule = allReusableModuleFileArtifacts[i];
        if(zdmUtils.deepEquals(reusableModule._oReusableModuleName, oReusableModuleName)) {
            aReusableModuleFileArtifacts.push(reusableModule);
        }
    }

    return aReusableModuleFileArtifacts;
};

Model.prototype.existsHdiConfigInReusableModuleCfgDir = function(oReusableModuleName) {
    var aReusableModulesWithSameName = this.getReusableModuleFileArtifactsByModuleName(oReusableModuleName);

    for (var i=0; i<aReusableModulesWithSameName.length; i++) {
        var reusableModule = aReusableModulesWithSameName[i];
        var artifactClass = reusableModule.constructor.name;
        if(artifactClass !== 'HDIConfig') {
            continue;
        }
        var reusableModulesCfgRegEx = /^node_modules\/[^\/]*\/cfg\//;
        if (reusableModulesCfgRegEx.test(reusableModule._shortFilePath)) {
            return true;
        }
        var scopedReusableModulesCfgRegEx = /^node_modules\/@[^\/]*\/[^\/]*\/cfg\//;
        if (scopedReusableModulesCfgRegEx.test(reusableModule._shortFilePath)) {
            return true;
        }
    }
    return false;
};

module.exports = Model;

'use strict';

var zdmUtils = require('../../zdmUtils.js');
var fs = require('fs');
var paths = require('../../../paths.js');

function FileArtifact(fullFilePath, shortFilePath, fileNameWithSuffix, fileNameWithoutSuffix, fileSuffix, logger) {
    this._fullFilePath = fullFilePath;
    shortFilePath = paths.clientPath(shortFilePath);
    this._shortFilePath = shortFilePath;
    this._fileNameWithSuffix = fileNameWithSuffix;
    this._fileNameWithoutSuffix = fileNameWithoutSuffix;
    this._fileSuffix = fileSuffix;
    this._directoryPath = shortFilePath.substring(0, shortFilePath.indexOf(fileNameWithSuffix));
    var directoryPathStartingWithoutSrcCfgLib = zdmUtils.getDirPathStartingWithoutSrcCfgLib(this._directoryPath);
    this._directoryPathStartingWithoutSrcCfgLib = directoryPathStartingWithoutSrcCfgLib;
    this._isModeledInDataFolder = zdmUtils.isModeledInDataFolder(directoryPathStartingWithoutSrcCfgLib);
    this._isModeledInAccessFolder = zdmUtils.isModeledInAccessFolder(directoryPathStartingWithoutSrcCfgLib);
    this._isAccepted = false;
    this._logger = logger;
    this._isReusableModule = zdmUtils.isReusableModule(shortFilePath);
    this._oReusableModuleName = {
        'scopeName': null,
        'moduleName': null
    };
    if (!this._isReusableModule) {
        return this;
    }
    this._oReusableModuleName.moduleName = zdmUtils.getReusableModuleName(shortFilePath);
    if (!zdmUtils.isScopedReusableModule(shortFilePath)) {
        return this;
    }
    this._oReusableModuleName.scopeName = zdmUtils.getReusableModuleScopeName(shortFilePath);
}

FileArtifact.prototype.accept = function(artifactVisitor, asyncCb) {
    artifactVisitor.parse(this, asyncCb);
};

FileArtifact.prototype.getNamespace = function() {
    return this._namespace;
};

FileArtifact.prototype.setNamespace = function(namespace) {
    this._namespace = namespace;
    if (this.getFullname()) {
        return;
    }
    var name = this._fileNameWithoutSuffix;
    var fullname = namespace ? namespace + '::' + name : name;
    this.setFullname(fullname);
};

FileArtifact.prototype.getFullname = function() {
    return this._fullyQualifiedName;
};

FileArtifact.prototype.setFullname = function(fullyQualifiedName) {
    this._fullyQualifiedName = fullyQualifiedName;
};

// CDS files contains only one top level artifact, which can be context, type, entity, view, or annotation.
// A context can aggregate other artifacts. 
// .hdb* files (.hdbtable, .hdbview) contains only one top level artifact, which can't be context.
FileArtifact.prototype.getTopLevelArtifact = function() {
    return this._topLevelArtifact;
};

FileArtifact.prototype.setTopLevelArtifact = function(topLevelArtifact) {
    this._topLevelArtifact = topLevelArtifact;
};

FileArtifact.prototype.haveEntities = function() {
    return (this.getEntities().length > 0) ? true : false;
};

FileArtifact.prototype.haveViews = function() {
    return (this.getViews().length > 0) ? true : false;
};

FileArtifact.prototype.haveDerivedTypes = function() {
    return (this.getDerivedTypes().length > 0) ? true : false;
};

FileArtifact.prototype.haveStructuredTypes = function() {
    return (this.getStructuredTypes().length > 0) ? true : false;
};

FileArtifact.prototype.getEntities = function() {
    return this._getArtifacts (function (topLevelArtifact) {
        return topLevelArtifact._isEntity;
    }, function (topLevelArtifact) {
        return topLevelArtifact.getEntities();
    });
};

FileArtifact.prototype.getViews = function() {
    return this._getArtifacts (function (topLevelArtifact) {
        return topLevelArtifact._isView;
    }, function (topLevelArtifact) {
        return topLevelArtifact.getViews();
    });
};

FileArtifact.prototype.getDerivedTypes = function() {
    return this._getArtifacts (function (topLevelArtifact) {
        return topLevelArtifact._isDerivedType;
    }, function (topLevelArtifact) {
        return topLevelArtifact.getDerivedTypes();
    });
};

FileArtifact.prototype.getStructuredTypes = function() {
    return this._getArtifacts (function (topLevelArtifact) {
        return topLevelArtifact._isStructuredType;
    }, function (topLevelArtifact) {
        return topLevelArtifact.getStructuredTypes();
    });
};

FileArtifact.prototype._getArtifacts = function(isConcreteTopLevelArtifact, getContextArtifacts) {
    var topLevelArtifact = this._topLevelArtifact;

    if (!topLevelArtifact) {
        return [];
    }

    if (isConcreteTopLevelArtifact(topLevelArtifact)) {
        return [topLevelArtifact];
    }

    if (topLevelArtifact._isContext) {
        var artifacts = getContextArtifacts(topLevelArtifact);
        return artifacts;
    }

    return [];
};

FileArtifact.prototype.getEntity = function(entityFullname) {
    var topLevelArtifact = this._topLevelArtifact;

    if (!topLevelArtifact) {
        return null;
    }

    if (topLevelArtifact._isEntity) {
        if (topLevelArtifact._fullname === entityFullname) {
            return topLevelArtifact;
        }
    }

    if (topLevelArtifact._isContext) {
        var entity = topLevelArtifact.getEntity(entityFullname);
        if (entity) {
            return entity;
        }
    }

    return null;
};

FileArtifact.prototype.getOriginalContentForDataContainer = function() {
    return this._originalContentForDataContainer;
};

FileArtifact.prototype.setOriginalContentForDataContainer = function(originalContentForDataContainer) {
    this._originalContentForDataContainer = originalContentForDataContainer;
};

FileArtifact.prototype.getOriginalContentForAccessContainer = function() {
    return this._originalContentForAccessContainer;
};

FileArtifact.prototype.setOriginalContentForAccessContainer = function(originalContentForAccessContainer) {
    this._originalContentForAccessContainer = originalContentForAccessContainer;
};

FileArtifact.prototype.getHdbFileFullnameRegEx = function () {
    return this._hdbFileFullnameRegEx;
};

FileArtifact.prototype.setHdbFileFullnameRegEx = function (hdbFileFullnameRegEx) {
    this._hdbFileFullnameRegEx = hdbFileFullnameRegEx;
};

FileArtifact.prototype.setHdbFileArtifactFullnameAndNamespace = function () {
    var hdbFilePath = this._fullFilePath;
    var hdbFileContent = fs.readFileSync(hdbFilePath, 'utf-8');
    var hdbNameObj = this._parseFullnameFromHdbFile(hdbFileContent);
    var hdbFullname = hdbNameObj.fullname;

    if (!hdbFullname) {
        throw new Error("Error parsing file \"" + hdbFilePath + "\"");
    }

    this.setFullname(hdbFullname);
    this.setNamespace(hdbNameObj.namespace);
};

FileArtifact.prototype._parseFullnameFromHdbFile = function (hdbFileContent) {
    var fullTableName = '';
    var hdbFileFullnameRegEx = this.getHdbFileFullnameRegEx();
    var emptyFullnameObj = {'fullname': ''};

    if (!hdbFileFullnameRegEx) {
        return emptyFullnameObj;
    }

    var resultArr = hdbFileFullnameRegEx.exec(hdbFileContent);

    if (resultArr === null) {
        return emptyFullnameObj;
    }

    fullTableName = resultArr[1];
    return zdmUtils.parseFullname(fullTableName);
};

FileArtifact.prototype.isModeledInDataFolder = function () {
    return this._isModeledInDataFolder;
};

FileArtifact.prototype.isModeledInAccessFolder = function () {
    return this._isModeledInAccessFolder;
};

module.exports = FileArtifact;

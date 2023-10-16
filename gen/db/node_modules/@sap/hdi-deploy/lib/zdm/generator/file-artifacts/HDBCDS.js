'use strict';

const FileArtifact = require('./FileArtifact.js');
const fs = require('fs');
const ModelArtifactFactory = require('../model-artifacts/ModelArtifactsFactory.js');
const zdmUtils = require('../../zdmUtils.js');

function HDBCDS() {
  FileArtifact.prototype.constructor.apply(this, arguments);

  this._contexts = [];
  this._entities = [];
  this._views = [];
  this._derivedTypes = [];
  this._structuredTypes = [];
  this._dataControlLanguageArtifacts = [];
}

HDBCDS.prototype = Object.create(FileArtifact.prototype);
HDBCDS.prototype.constructor = HDBCDS;

HDBCDS.prototype.accept = function () {
  FileArtifact.prototype.accept.apply(this, arguments);
};

function parseCDSNamespace(content) {
  const rx = /^namespace (.*);$/gmi;
  const arr = rx.exec(content);
  if (arr !== null) {
    return arr[1];
  }
  return '';
}

function createBaseTopLevelModelArtifact(that, content, modelArtifactFactory, fileArtifactFileNameWithoutSuffix, cb) {
  const topLevelArtifactRegexPattern = `([^\\s]+)\\s+(${  fileArtifactFileNameWithoutSuffix  })`;
  const topLevelArtifactRegex = new RegExp(topLevelArtifactRegexPattern, 'g');
  const topLevelArtifactNameArray = zdmUtils.getMatches(content, topLevelArtifactRegex, 1);

  if (!Array.isArray(topLevelArtifactNameArray) || !topLevelArtifactNameArray.length) {
    return cb(new Error(`Error parsing artifact "${  that._fullFilePath  }". Could not extract top level artifact.`));
  }

  const topLevelArtifactName = topLevelArtifactNameArray[0];
  const modelArtifact = modelArtifactFactory.createModelArtifact(topLevelArtifactName);

  return modelArtifact;
}

function isTopLevelArtifact(fileArtifactFileNameWithoutSuffix, modelArtifact) {
  return (fileArtifactFileNameWithoutSuffix === modelArtifact._name) ? true : false;
}

function getTopLevelArtifact(that, content, modelArtifactFactory, modelArtifacts, cb) {
  const fileArtifactFileNameWithoutSuffix = that._fileNameWithoutSuffix;

  for (let i = 0; i < modelArtifacts.length; i++) {
    const modelArtifact = modelArtifacts[i];
    if (isTopLevelArtifact(fileArtifactFileNameWithoutSuffix, modelArtifact)) {
      return modelArtifact;
    }
  }

  const topLevelArtifact = createBaseTopLevelModelArtifact(that, content, modelArtifactFactory, fileArtifactFileNameWithoutSuffix, cb);

  return topLevelArtifact;
}

function getContexts(content) {
  const contexts = zdmUtils.getMatches(content, /(context\s+([^\s]+)\s*{)/gi, 2);
  return contexts;
}

function getEntities(content) {
  const entities = zdmUtils.getMatches(content, /(entity\s+([^\s]+)\s*{)/gi, 2);
  return entities;
}

function getViews(content) {
  const views = zdmUtils.getMatches(content, /(view\s+([^\s]+)\s+as\s+select\s+from\s+)/gi, 2);
  return views;
}

function getDerivedTypes(content) {
  const derivedTypes = zdmUtils.getMatches(content, /(type\s+([^\s]+)\s*[{:])/gi, 2);
  return derivedTypes;
}

function getStructuredTypes(content) {
  const structuredTypes = zdmUtils.getMatches(content, /(table\s+type\s+([^\s]+)\s*{)/gi, 2);
  return structuredTypes;
}

function getAccessPolicies(content) {
  const accessPolicies = zdmUtils.getMatches(content, /(AccessPolicy\s+([^\s]+)\s*{)/gi, 2);
  return accessPolicies;
}

function getDataDefinitionLanguageArtifacts(that, fileContent, modelArtifactFactory) {
  const contextNames = getContexts(fileContent);
  const entityNames = getEntities(fileContent);
  const viewNames = getViews(fileContent);
  const derivedTypeNames = getDerivedTypes(fileContent);
  const structuredTypeNames = getStructuredTypes(fileContent);

  that._contexts = modelArtifactFactory.createContexts(contextNames);
  that._entities = modelArtifactFactory.createEntities(entityNames);
  that._views = modelArtifactFactory.createViews(viewNames);
  that._derivedTypes = modelArtifactFactory.createDerivedTypes(derivedTypeNames);
  that._structuredTypes = modelArtifactFactory.createStructuredTypes(structuredTypeNames);

  const ddlModelArtifacts = that._contexts.concat(that._entities, that._views, that._derivedTypes, that._structuredTypes);

  return ddlModelArtifacts;
}

function getDataContolLanguageArtifacts(that, fileContent, modelArtifactFactory) {
  const accessPolicyNames = getAccessPolicies(fileContent);

  that._dataControlLanguageArtifacts = modelArtifactFactory.createDataControlLanguageArtifacts(accessPolicyNames);

  return that._dataControlLanguageArtifacts;
}

function handleTopLevelArtifact(that, topLevelArtifact) {
  if (topLevelArtifact._isContext) {
    topLevelArtifact.addEntities(that._entities);
    topLevelArtifact.addViews(that._views);
    topLevelArtifact.addDerivedTypes(that._derivedTypes);
    topLevelArtifact.addStructuredTypes(that._structuredTypes);
  }
}

function parseFile(that, cb) {
  if (that._isAccepted){
    return;
  }

  const fileContent = fs.readFileSync(that._fullFilePath, 'utf-8');
  const namespace = parseCDSNamespace(fileContent);
  that.setNamespace(namespace);

  const modelArtifactFactory = new ModelArtifactFactory();
  const ddlModelArtifacts = getDataDefinitionLanguageArtifacts(that, fileContent, modelArtifactFactory);
  const dclModelArtifacts = getDataContolLanguageArtifacts(that, fileContent, modelArtifactFactory);
  const modelArtifacts = [].concat(ddlModelArtifacts, dclModelArtifacts);

  const topLevelArtifact = getTopLevelArtifact(that, fileContent, modelArtifactFactory, modelArtifacts, cb);
  handleTopLevelArtifact(that, topLevelArtifact);
  that.setTopLevelArtifact(topLevelArtifact);

  that._isAccepted = true;
}

HDBCDS.prototype.parseDataContainer = function (setFileArtifactOriginalContentForDataContainer, cb) {
  const that = this;
  parseFile(that, cb);

  /*
   * Adoption guidelines for default handling of CDS files:
   * 1. Extract CDS views in separate CDS file. (Deployed only in Access schema).
   * 2. CDS types and CDS table types should not be used by both entities and views or procedures. Separate CDS types and CDS table types for Data schema and Access schema respectively. They can be defined in one file.
   * 2.1. Data schema - Define CDS types and CDS table types which are used only by CDS entities. Do not make backward incompatible changes on Data types in next versions. (Deployed in Data and Access schemas).
   * 2.2. Access schema - Define CDS types and CDS table types which are used only by procedures, views and/or table types, but not from entities. (Deployed in Data and Access schemas).
   * 3. Associations defined in CDS entities can be used only by CDS views, but not by .hdbviews. In Data schema do not model associations to objects from Access schema.
   * 4. CDS files containg DCL (Data Control Language) objects should be modeled only for the Access schema.
   */

  if (that.haveEntities() && that.haveViews()) {
    return cb(new Error(`File artifact "${  that._fullFilePath  }" contains entity and view. Entities and views should be extracted in separate CDS files. CDS entities should be modeled in the 'data' folder. CDS views should be modeled in the 'access' folder.`));
  }

  if (!that.isModeledInDataFolder() && !that.haveEntities() && !that.haveStructuredTypes() && !that.haveDerivedTypes()) {
    that._logger.log(`File artifact "${  that._fullFilePath  }" will be skipped for deployment in data container, because it does not contain CDS entity, type or table type.`);
    return cb();
  }

  setFileArtifactOriginalContentForDataContainer(that);
  cb();
};

module.exports = HDBCDS;

'use strict';

const ModelArtifact = require('./ModelArtifact.js');

// Represents Data Control Language (DCL) Model Artifact. Currently DCL artifact is CDS 'AccessPolicy'.
function DataControlLanguageModelArtifact() {
  ModelArtifact.prototype.constructor.apply(this, arguments);
  this._isDataControlLanguage = true;
}

DataControlLanguageModelArtifact.prototype = Object.create(ModelArtifact.prototype);
DataControlLanguageModelArtifact.prototype.constructor = DataControlLanguageModelArtifact;

module.exports = DataControlLanguageModelArtifact;

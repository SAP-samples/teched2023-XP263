'use strict';

var ModelArtifact = require('./ModelArtifact.js');
var Entity = require('./Entity.js');
var View = require('./View.js');
var StructuredType = require('./StructuredType.js');
var DerivedType = require('./DerivedType.js');
var Context = require('./Context.js');
var DataControlLanguageModelArtifact = require('./DataControlLanguageModelArtifact');

function ModelArtifactsFactory() {}

function createModelArtifacts (modelArtifactNames, createModelArtifactCb) {
    var artifacts = [];

    for (var i=0; i<modelArtifactNames.length; i++) {
        var modelArtifact = createModelArtifactCb(modelArtifactNames[i]);

        if (!modelArtifact) {
            throw new Error("Can not create a model artifact with name " + modelArtifactNames[i]);
        }

        artifacts.push(modelArtifact);
    }
    return artifacts;
}

ModelArtifactsFactory.prototype.createEntity = function(fullname) {
    return new Entity(fullname);
};

ModelArtifactsFactory.prototype.createEntities = function(entityNames) {
    return createModelArtifacts(entityNames, this.createEntity);
};

ModelArtifactsFactory.prototype.createView = function(fullname) {
    return new View(fullname);
};

ModelArtifactsFactory.prototype.createViews = function(viewNames) {
    return createModelArtifacts(viewNames, this.createView);
};

ModelArtifactsFactory.prototype.createStructuredType = function(fullname) {
    return new StructuredType(fullname);
};

ModelArtifactsFactory.prototype.createStructuredTypes = function(structuredTypeNames) {
    return createModelArtifacts(structuredTypeNames, this.createStructuredType);
};

ModelArtifactsFactory.prototype.createDerivedType = function(fullname) {
    return new DerivedType(fullname);
};

ModelArtifactsFactory.prototype.createDerivedTypes = function(derivedTypeNames) {
    return createModelArtifacts(derivedTypeNames, this.createDerivedType);
};

ModelArtifactsFactory.prototype.createContext = function(fullname) {
    return new Context(fullname);
};

ModelArtifactsFactory.prototype.createContexts = function(contextNames) {
    return createModelArtifacts(contextNames, this.createContext);
};

ModelArtifactsFactory.prototype.createDataControlLanguageArtifact = function(fullname) {
    return new DataControlLanguageModelArtifact(fullname);
};

ModelArtifactsFactory.prototype.createDataControlLanguageArtifacts = function(dataControlLanguageArtifactNames) {
    return createModelArtifacts(dataControlLanguageArtifactNames, this.createDataControlLanguageArtifact);
};

ModelArtifactsFactory.prototype.createModelArtifact = function(fullname) {
    return new ModelArtifact(fullname);
};

module.exports = ModelArtifactsFactory;

'use strict';

var ModelArtifact = require('./ModelArtifact.js');

function Context() {
    ModelArtifact.prototype.constructor.apply(this, arguments);

    this._isContext = true;
    this._contextObjects = [];
    this._entities = [];
    this._views = [];
    this._derivedTypes = [];
    this._structuredTypes = [];
}

Context.prototype = Object.create(ModelArtifact.prototype);
Context.prototype.constructor = Context;

Context.prototype.getContexts = function() {
    return this._contextObjects;
};

Context.prototype.addContext = function(ctx) {
    this._contextObjects.push(ctx);
};

Context.prototype.addContexts = function(contexts) {
    this._contextObjects = this._contextObjects.concat(contexts);
};

Context.prototype.getEntities = function() {
    return this._getArtifacts(this._entities, function (nestedContext) {
        return nestedContext.getEntities();
    });
};

Context.prototype.getViews = function() {
    return this._getArtifacts(this._views, function (nestedContext) {
        return nestedContext.getViews();
    });
};

Context.prototype.getDerivedTypes = function() {
    return this._getArtifacts(this._derivedTypes, function (nestedContext) {
        return nestedContext.getDerivedTypes();
    });
};

Context.prototype.getStructuredTypes = function() {
    return this._getArtifacts(this._structuredTypes, function (nestedContext) {
        return nestedContext.getStructuredTypes();
    });
};

Context.prototype._getArtifacts = function(ownArtifacts, getNestedContextArtifacts) {
    var artifacts = [];
    for (var k=0; k<ownArtifacts.length; k++) {
        artifacts.push(ownArtifacts[k]);
    }

    var nestedContexts = this._contextObjects;

    for (var i=0; i<nestedContexts.length; i++) {
        var nestedContext = nestedContexts[i];
        var nestedEntities = getNestedContextArtifacts(nestedContext);
        artifacts = artifacts.concat(nestedEntities);
    }

    return artifacts;
};

Context.prototype.getEntity = function(entityFullname) {
    var entities = this.getEntities();

    for (var i=0; i<entities.length; i++) {
        var entity = entities[i];
        if (entity._fullname === entityFullname) {
            return entity;
        }
    }

    return null;
};

Context.prototype.addEntity = function(entitiy) {
    this._entities.push(entitiy);
};

Context.prototype.addEntities = function(entities) {
    this._entities = this._entities.concat(entities);
};

Context.prototype.addView = function(view) {
    this._views.push(view);
};

Context.prototype.addViews = function(views) {
    this._views = this._views.concat(views);
};

Context.prototype.addDerivedType = function(derivedType) {
    this._derivedTypes.push(derivedType);
};

Context.prototype.addDerivedTypes = function(derivedTypes) {
    this._derivedTypes = this._derivedTypes.concat(derivedTypes);
};

Context.prototype.addStructuredType = function(structuredType) {
    this._structuredTypes.push(structuredType);
};

Context.prototype.addStructuredTypes = function(structuredTypes) {
    this._structuredTypes = this._structuredTypes.concat(structuredTypes);
};

module.exports = Context;

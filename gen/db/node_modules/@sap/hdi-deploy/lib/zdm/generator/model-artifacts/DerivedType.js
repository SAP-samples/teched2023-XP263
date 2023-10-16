'use strict';

var ModelArtifact = require('./ModelArtifact.js');

function DerivedType() {
    ModelArtifact.prototype.constructor.apply(this, arguments);

    this._isDerivedType = true;
    this._type = null;
}

DerivedType.prototype = Object.create(ModelArtifact.prototype);
DerivedType.prototype.constructor = DerivedType;

DerivedType.prototype.getType = function() {
    return this._type;
};

DerivedType.prototype.setType = function(type) {
    this._type = type;
};

module.exports = DerivedType;

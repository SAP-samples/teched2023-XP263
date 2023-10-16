'use strict';

var TableModelArtifact = require('./TableModelArtifact.js');

function StructuredType() {
    TableModelArtifact.prototype.constructor.apply(this, arguments);

    this._isStructuredType = true;
    this._isTableType = false;
}

StructuredType.prototype = Object.create(TableModelArtifact.prototype);
StructuredType.prototype.constructor = StructuredType;

StructuredType.prototype.isTableType = function() {
    return this._isTableType;
};

StructuredType.prototype.setIsTableType = function(isTableType) {
    this._isTableType = isTableType;
};

module.exports = StructuredType;

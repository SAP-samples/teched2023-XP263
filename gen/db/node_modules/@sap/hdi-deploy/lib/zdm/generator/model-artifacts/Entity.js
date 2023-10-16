'use strict';

var TableModelArtifact = require('./TableModelArtifact.js');

function Entity() {
    TableModelArtifact.prototype.constructor.apply(this, arguments);

    this._isEntity = true;
}

Entity.prototype = Object.create(TableModelArtifact.prototype);
Entity.prototype.constructor = Entity;

module.exports = Entity;

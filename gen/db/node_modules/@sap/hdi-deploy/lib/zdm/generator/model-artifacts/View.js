'use strict';

var TableModelArtifact = require('./TableModelArtifact.js');

function View() {
    TableModelArtifact.prototype.constructor.apply(this, arguments);

    this._isView = true;
}

View.prototype = Object.create(TableModelArtifact.prototype);
View.prototype.constructor = View;

module.exports = View;

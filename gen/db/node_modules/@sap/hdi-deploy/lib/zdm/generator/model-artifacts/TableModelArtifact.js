'use strict';

var ModelArtifact = require('./ModelArtifact.js');

function TableModelArtifact() {
    ModelArtifact.prototype.constructor.apply(this, arguments);
    this._columns = []; // In DB position order
}

TableModelArtifact.prototype = Object.create(ModelArtifact.prototype);
TableModelArtifact.prototype.constructor = TableModelArtifact;

TableModelArtifact.prototype.getColumns = function() {
    return this._columns;
};

TableModelArtifact.prototype.getColumn = function(columnName) {
    var columns = this.getColumns();
    for (var i=0; i<columns.length; i++) {
        var column = columns[i];
        if (column._name === columnName) {
            return column;
        }
    }
    return null;
};

TableModelArtifact.prototype.setColumns = function(columns) {
    this._columns = columns;
};

TableModelArtifact.prototype.addColumn = function(column, position) {
    var columns = this.getColumns();
    if (position) {
        columns.splice(position - 1, 0, column);
    } else {
        columns.push(column);
    }
};

module.exports = TableModelArtifact;

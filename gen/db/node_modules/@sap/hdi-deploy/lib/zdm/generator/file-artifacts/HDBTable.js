'use strict';

var FileArtifact = require('./FileArtifact.js');
var Entity = require('../model-artifacts/Entity.js');
var Column = require('../model-artifacts/Column.js');
var fs = require('fs');
var zdmUtils = require('../../zdmUtils.js');

function HDBTable() {
    FileArtifact.prototype.constructor.apply(this, arguments);
    this.setHdbFileFullnameRegEx(/^(?:table|column table|row table) (?:["'])?([a-zA-z0-9-_::\.]+){1}(?:["'])?\s*\(/i);
}

HDBTable.prototype = Object.create(FileArtifact.prototype);
HDBTable.prototype.constructor = HDBTable;

HDBTable.prototype.accept = function () {
    FileArtifact.prototype.accept.apply(this, arguments);
};

function extractColumnsString(fileContent) {
    var index = fileContent.indexOf('(');
    if (index === -1) {
        throw new Error("Invalid table definition! No '(' found");
    }
    var resultString = "(";
    var bracketCounter = 1;
    index++;
    while(index < fileContent.length && bracketCounter > 0) {
        if(fileContent[index] === '(') {
            bracketCounter++;
        } else if (fileContent[index] === ')') {
            bracketCounter--;
        }
        resultString += fileContent[index];
        index++;
    }
    if(bracketCounter !== 0) {
        throw new Error("Invalid table definition! Check opening and closing brackets.");
    }
    return resultString;
}

function getTableColumns(that, fileContent, cb) {
    var columnsString = extractColumnsString(fileContent);
    var columnNames = zdmUtils.getMatches(columnsString, /(["'])(?:(?=(\\?))\2.)*?([^\s]+)\1/gi, 3);

    if (columnNames.length === 0) {
        cb(new Error("Error parsing artifact \"" + that._fullFilePath + "\". Could not extract column names."));
    }

    columnNames = zdmUtils.removeDuplicatedEntries(columnNames);
    return columnNames;
}

HDBTable.prototype.parseDataContainer = function (setFileArtifactOriginalContentForDataContainer, cb) {
    var that = this;

    try {
        that.setHdbFileArtifactFullnameAndNamespace();
    } catch (err) {
        return cb(err);
    }

    var hdbTableFullname = that.getFullname();
    var entity = new Entity(hdbTableFullname);
    that.setTopLevelArtifact(entity);

    var fileContent = fs.readFileSync(that._fullFilePath, 'utf-8');
    var columnNames = getTableColumns(that, fileContent, cb);

    for (var i = 0; i < columnNames.length; i++) {
        var columnName = columnNames[i];
        entity.addColumn(new Column(columnName));
    }

    setFileArtifactOriginalContentForDataContainer(that);

    cb();
};

module.exports = HDBTable;

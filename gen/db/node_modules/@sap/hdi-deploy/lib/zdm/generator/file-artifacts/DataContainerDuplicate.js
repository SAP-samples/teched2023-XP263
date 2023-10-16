'use strict';

var FileArtifact = require('./FileArtifact.js');

function DataContainerDuplicate() {
    FileArtifact.prototype.constructor.apply(this, arguments);
}

DataContainerDuplicate.prototype = Object.create(FileArtifact.prototype);
DataContainerDuplicate.prototype.constructor = DataContainerDuplicate;

DataContainerDuplicate.prototype.accept = function() {
    FileArtifact.prototype.accept.apply(this, arguments);
};

module.exports = DataContainerDuplicate;

'use strict';

var FileArtifact = require('./FileArtifact.js');

function AccessContainerDuplicate() {
    FileArtifact.prototype.constructor.apply(this, arguments);
}

AccessContainerDuplicate.prototype = Object.create(FileArtifact.prototype);
AccessContainerDuplicate.prototype.constructor = AccessContainerDuplicate;

AccessContainerDuplicate.prototype.accept = function() {
    FileArtifact.prototype.accept.apply(this, arguments);
};

module.exports = AccessContainerDuplicate;

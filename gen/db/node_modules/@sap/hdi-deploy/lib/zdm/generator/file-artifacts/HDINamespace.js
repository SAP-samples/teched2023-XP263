'use strict';

var FileArtifact = require('./FileArtifact.js');

function HDINamespace() {
    FileArtifact.prototype.constructor.apply(this, arguments);
}

HDINamespace.prototype = Object.create(FileArtifact.prototype);
HDINamespace.prototype.constructor = HDINamespace;

HDINamespace.prototype.accept = function() {
    FileArtifact.prototype.accept.apply(this, arguments);
};

module.exports = HDINamespace;

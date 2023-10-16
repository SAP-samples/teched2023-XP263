'use strict';

var FileArtifact = require('./FileArtifact.js');

function HDBSequence() {
    FileArtifact.prototype.constructor.apply(this, arguments);
    this.setHdbFileFullnameRegEx(/^(?:sequence) (?:["'])?([a-zA-z0-9-_::\.]+){1}(?:["'])?/i);
}

HDBSequence.prototype = Object.create(FileArtifact.prototype);
HDBSequence.prototype.constructor = HDBSequence;

HDBSequence.prototype.accept = function() {
    FileArtifact.prototype.accept.apply(this, arguments);
};

HDBSequence.prototype.parseDataContainer = function (setFileArtifactOriginalContentForDataContainer, cb) {
    var that = this;
    try {
        that.setHdbFileArtifactFullnameAndNamespace();
    } catch (err) {
        return cb(err);
    }

    setFileArtifactOriginalContentForDataContainer(that);
    cb();
};

module.exports = HDBSequence;

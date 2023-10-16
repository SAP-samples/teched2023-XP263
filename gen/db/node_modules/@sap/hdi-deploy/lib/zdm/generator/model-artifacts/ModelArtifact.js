'use strict';

var zdmUtils = require('../../zdmUtils.js');

function ModelArtifact(fullname) {
    var namesObj = zdmUtils.parseFullname(fullname);
    this._fullname = fullname;
    this._namespace = namesObj.namespace;
    this._contextNames = namesObj.contexts;
    this._name = namesObj.name;
    this._fullnameWithoutNamespace = namesObj.fullnameWithoutNamespace;
}

ModelArtifact.prototype.getNamespace = function() {
    return this._namespace;
};

ModelArtifact.prototype.setNamespace = function(namespace) {
    this._namespace = namespace;
};

module.exports = ModelArtifact;

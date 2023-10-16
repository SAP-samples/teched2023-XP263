'use strict';

function ArtifactVisitor(model) {
    this._model = model;
}

ArtifactVisitor.prototype.parse = function() {
    throw new Error('Abstract function');
};

module.exports = ArtifactVisitor;

'use strict';

var fs = require('fs');
var ArtifactVisitor = require('./ArtifactVisitor.js');

function AccessArtifactParserVisitor() {
    ArtifactVisitor.prototype.constructor.apply(this, arguments);
}

AccessArtifactParserVisitor.prototype = Object.create(ArtifactVisitor.prototype);
AccessArtifactParserVisitor.prototype.constructor = AccessArtifactParserVisitor;

function setFileArtifactOriginalContentForAccessContainer(fileArtifact) {
    var artifactFullFilePath = fileArtifact._fullFilePath;
    var content = fs.readFileSync(artifactFullFilePath, 'utf-8');
    if (!content) {
        return;
    }
    fileArtifact.setOriginalContentForAccessContainer(content);
}

AccessArtifactParserVisitor.prototype.parse = function(fileArtifact, cb) {    
    var artifactClass = fileArtifact.constructor.name;

    if (fileArtifact.isModeledInDataFolder() && artifactClass !== 'HDBCDS' && artifactClass !== 'HDINamespace' && artifactClass !== 'HDIConfig') {
        return cb();
    }

    switch(artifactClass) {
        case 'AccessContainerDuplicate': {
            setFileArtifactOriginalContentForAccessContainer(fileArtifact);
            cb();
            break;
        }
        case 'DataContainerDuplicate': {
            if (fileArtifact.isModeledInAccessFolder()) {
                setFileArtifactOriginalContentForAccessContainer(fileArtifact);
            }
            cb();
            break;
        }
        case 'HDIConfig':{
            setFileArtifactOriginalContentForAccessContainer(fileArtifact);
            cb();
            break;
        }
        case 'HDINamespace': {
            setFileArtifactOriginalContentForAccessContainer(fileArtifact);
            cb();
            break;
        }
        case 'HDBRole': {
            setFileArtifactOriginalContentForAccessContainer(fileArtifact);
            cb();
            break;
        }
        case 'HDBCDS': {
            setFileArtifactOriginalContentForAccessContainer(fileArtifact);
            cb();
            break;
        }
        default :
            cb();
            break;
    }
};

module.exports = AccessArtifactParserVisitor;

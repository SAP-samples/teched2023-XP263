'use strict';

var ArtifactVisitor = require('./ArtifactVisitor.js');
var fs = require('fs');

function DataArtifactParserVisitor() {
    ArtifactVisitor.prototype.constructor.apply(this, arguments);
}

DataArtifactParserVisitor.prototype = Object.create(ArtifactVisitor.prototype);
DataArtifactParserVisitor.prototype.constructor = DataArtifactParserVisitor;

function setFileArtifactOriginalContentForDataContainer(fileArtifact) {
    var fullFilePath = fileArtifact._fullFilePath;
    var content = fs.readFileSync(fullFilePath, 'utf-8');
    if (!content) {
        return;
    }
    fileArtifact.setOriginalContentForDataContainer(content);
}

DataArtifactParserVisitor.prototype.parse = function(fileArtifact, cb) {
    if(fileArtifact.isModeledInAccessFolder()){
        return cb();
    }

    var artifactClass = fileArtifact.constructor.name;

    switch(artifactClass) {
        case 'DataContainerDuplicate': {
            setFileArtifactOriginalContentForDataContainer(fileArtifact);
            cb();
            break;
        }
        case 'AccessContainerDuplicate': {
            if(fileArtifact.isModeledInDataFolder()){
                setFileArtifactOriginalContentForDataContainer(fileArtifact);
            }
            cb();
            break;
        }
        case 'HDIConfig': {
            setFileArtifactOriginalContentForDataContainer(fileArtifact);
            cb();
            break;
        }
        case 'HDINamespace': {
            setFileArtifactOriginalContentForDataContainer(fileArtifact);
            cb();
            break;
        }
        case 'HDBRole': {
            // User provided .hdbroles are deployed only into access schema.
            cb();
            break;
        }
        case 'HDBCDS': {
            fileArtifact.parseDataContainer(setFileArtifactOriginalContentForDataContainer, cb);
            break;
        }
        case 'HDBTable': {
            fileArtifact.parseDataContainer(setFileArtifactOriginalContentForDataContainer, cb);
            break;
        }
        case 'HDBSequence': {
            fileArtifact.parseDataContainer(setFileArtifactOriginalContentForDataContainer, cb);
            break;
        }
        default :
            cb();
            break;
    }
};

module.exports = DataArtifactParserVisitor;

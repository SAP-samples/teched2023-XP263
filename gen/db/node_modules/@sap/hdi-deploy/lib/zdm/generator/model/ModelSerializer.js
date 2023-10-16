'use strict';

var fs = require('fs');
var path = require('path');
var zdmUtils = require('../../zdmUtils.js');
var os = require('os');

function ModelSerializer(zdmAction, logger) {
    this._zdmAction = zdmAction;
    this._logger = logger;
}

ModelSerializer.prototype.serializeSync = function(model) {
    var fileArtifacts = model.getFileArtifacts();

    for (var fileArtifactPath in fileArtifacts) {
        if (!fileArtifacts.hasOwnProperty(fileArtifactPath)) {
            continue;
        }
        var fileArtifact = fileArtifacts[fileArtifactPath];
        var dataContent = fileArtifact.getOriginalContentForDataContainer();
        var accessContent = fileArtifact.getOriginalContentForAccessContainer();

        if (dataContent) {
            this.createFileSync(this.getGeneratedDir(), path.join('data', fileArtifactPath), dataContent);
        }
        var isFinalizeAction = this._zdmAction === zdmUtils.finalizeAction;
        if (!isFinalizeAction && accessContent) {
            this.createFileSync(this.getGeneratedDir(), path.join('access', fileArtifactPath), accessContent);
        }
    }
};

ModelSerializer.prototype.getGeneratedDir = function() {
    if (!this._generatedDir) {
        this._generatedDir = this.getUniqueTempDir();
    }
    return this._generatedDir;
};

ModelSerializer.prototype.setGeneratedDir = function(generatedDir) {
    this._generatedDir = generatedDir;
};

function getTempDir () {
    if (process.env.TMP){
        return  process.env.TMP;
    }
    if (process.env.TEMP) {
        return process.env.TEMP;
    }
    for (var tmpDir in ['/var/tmp','/tmp']) {
        if (fs.existsSync(tmpDir)){
            return tmpDir;
        }
    }
    var osTmpDir = os.tmpdir();
    if (osTmpDir) {
        return osTmpDir;
    }
    return '.';
}

function getTimeStamp () {
    var now = new Date();

    // Create an array with the current month, day and time
    var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];

    // Create an array with the current hour, minute and second
    var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];

    // Convert hour from military time
    time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

    // If hour is 0, set it to 12
    time[0] = time[0] || 12;

    // If year, month, date, hours, minutes and seconds are less than 10, add a zero
    for ( var i = 0; i < 3; i++ ) {
        if ( date[i] < 10 ) {
          date[i] = "0" + date[i];
        }
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
    }

    // Return the formatted string
    return date.join("-") + "_" + time.join(".");
}

ModelSerializer.prototype.getUniqueTempDir = function() {
    var tmpDir = getTempDir();
    var timeStamp = getTimeStamp();
    var prefix = 'zdm_' + this._zdmAction + '_';
    prefix = prefix + timeStamp;

    return path.join(tmpDir, prefix);// uuid.v1()
};

ModelSerializer.prototype.createFileSync = function(targetRootPath, filePath, fileContent) {
    var targetDirName = path.dirname(filePath);
    var targetFileBaseName = path.basename(filePath);
    var logger = this._logger;
    targetDirName = path.join(targetRootPath, targetDirName);

    this.createDirsSync(targetDirName);

    var unixStyleFilePath = filePath.replace(/(\\)/g, '/');

    logger.logTimerInit('generate-file', "Generating file \"" + unixStyleFilePath + "\"...");
    fs.writeFileSync(path.join(targetDirName, targetFileBaseName), fileContent);
    logger.logTimerDelta('generate-file', "Generating file \"" + unixStyleFilePath + "\"... ok");
};

ModelSerializer.prototype.createDirsSync = function(targetDir) {
    var dirsToCreate = [];

    while (!fs.existsSync(targetDir)) {
        var lastDir = path.basename(targetDir);
        dirsToCreate.unshift(lastDir);
        targetDir = path.dirname(targetDir);
    }

    for (var i=0; i<dirsToCreate.length; i++) {
        targetDir = path.join(targetDir, dirsToCreate[i]);
        fs.mkdirSync(targetDir);
    }
};

module.exports = ModelSerializer;

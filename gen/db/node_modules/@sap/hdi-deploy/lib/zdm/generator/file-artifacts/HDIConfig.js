'use strict';

var zdmUtils = require('../../zdmUtils.js');
var FileArtifact = require('./FileArtifact.js');

function HDIConfig() {
    FileArtifact.prototype.constructor.apply(this, arguments);
}

HDIConfig.prototype = Object.create(FileArtifact.prototype);
HDIConfig.prototype.constructor = HDIConfig;

HDIConfig.prototype.accept = function() {
    FileArtifact.prototype.accept.apply(this, arguments);
};

module.exports = HDIConfig;

var FILESUFFIX_TO_PLUGIN_MAPPINGS = {};
var defaultPluginVersion = '2.0.0.0';

FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.csv] = {
    "plugin_name": "com.sap.hana.di.tabledata.source",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbafllangprocedure] = {
    "plugin_name": "com.sap.hana.di.afllangprocedure",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbanalyticprivilege] = {
    "plugin_name": "com.sap.hana.di.analyticprivilege",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbcalculationview] = {
    "plugin_name": "com.sap.hana.di.calculationview",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbcds] = {
    "plugin_name": "com.sap.hana.di.cds",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbconstraint] = {
    "plugin_name": "com.sap.hana.di.constraint",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbdropcreatetable] = {
    "plugin_name": "com.sap.hana.di.dropcreatetable",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbflowgraph] = {
    "plugin_name": "com.sap.hana.di.flowgraph",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbfulltextindex] = {
    "plugin_name": "com.sap.hana.di.fulltextindex",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbfunction] = {
    "plugin_name": "com.sap.hana.di.function",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbgraphworkspace] = {
    "plugin_name": "com.sap.hana.di.graphworkspace",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbhadoopmrjob] = {
    "plugin_name": "com.sap.hana.di.virtualfunctionpackage.hadoop",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbindex] = {
    "plugin_name": "com.sap.hana.di.index",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdblibrary] = {
    "plugin_name": "com.sap.hana.di.library",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbprocedure] = {
    "plugin_name": "com.sap.hana.di.procedure",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbprojectionview] = {
    "plugin_name": "com.sap.hana.di.projectionview",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbprojectionviewconfig] = {
    "plugin_name": "com.sap.hana.di.projectionview.config",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbreptask] = {
    "plugin_name": "com.sap.hana.di.reptask",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbrole] = {
    "plugin_name": "com.sap.hana.di.role",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbroleconfig] = {
    "plugin_name": "com.sap.hana.di.role.config",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbsequence] = {
    "plugin_name": "com.sap.hana.di.sequence",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbstatistics] = {
    "plugin_name": "com.sap.hana.di.statistics",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbstructuredprivilege] = {
    "plugin_name": "com.sap.hana.di.structuredprivilege",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbsynonym] = {
    "plugin_name": "com.sap.hana.di.synonym",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbsynonymconfig] = {
    "plugin_name": "com.sap.hana.di.synonym.config",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbtable] = {
    "plugin_name": "com.sap.hana.di.table",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbtabledata] = {
    "plugin_name": "com.sap.hana.di.tabledata",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbtabletype] = {
    "plugin_name": "com.sap.hana.di.tabletype",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbtrigger] = {
    "plugin_name": "com.sap.hana.di.trigger",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbview] = {
    "plugin_name": "com.sap.hana.di.view",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbvirtualfunction] = {
    "plugin_name": "com.sap.hana.di.virtualfunction",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbvirtualfunctionconfig] = {
    "plugin_name": "com.sap.hana.di.virtualfunction.config",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbvirtualtable] = {
    "plugin_name": "com.sap.hana.di.virtualtable",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.hdbvirtualtableconfig] = {
    "plugin_name": "com.sap.hana.di.virtualtable.config",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.properties] = {
    "plugin_name": "com.sap.hana.di.tabledata.properties",
    "plugin_version": defaultPluginVersion
};
FILESUFFIX_TO_PLUGIN_MAPPINGS[zdmUtils.txt] = {
    "plugin_name": "com.sap.hana.di.copyonly",
    "plugin_version": defaultPluginVersion
};

HDIConfig.prototype.existsSuffixToPluginMapping = function (fileSuffix) {
    var content = this.getOriginalContentForDataContainer() || this.getOriginalContentForAccessContainer();
    var configObject = JSON.parse(content);
    var fileSuffixToPluginMappings = configObject.file_suffixes;

    if (!fileSuffixToPluginMappings[fileSuffix]) {
        return false;
    }

    return true;
};

HDIConfig.prototype.addSuffixToPluginMapping = function (fileSuffix) {
    if (this.existsSuffixToPluginMapping(fileSuffix)) {
        return;
    }

    var dataContent = this.getOriginalContentForDataContainer();
    var accessContent = this.getOriginalContentForAccessContainer();
    var content = dataContent || accessContent;
    var configObject = JSON.parse(content);
    var pluginNameVersionObject = FILESUFFIX_TO_PLUGIN_MAPPINGS[fileSuffix];

    if (!pluginNameVersionObject) {
        return;
    }

    configObject.file_suffixes[fileSuffix] = pluginNameVersionObject;
    var fileSuffixToPluginMappingString = JSON.stringify(configObject, null, '\t');

    if (dataContent) {
        this.setOriginalContentForDataContainer(fileSuffixToPluginMappingString);
    }
    if (accessContent) {
        this.setOriginalContentForAccessContainer(fileSuffixToPluginMappingString);
    }
};

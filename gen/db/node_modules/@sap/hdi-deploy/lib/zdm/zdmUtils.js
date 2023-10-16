'use strict';

var dataFolderName = 'data';
var accessFolderName = 'access';
var hdiSeparator = '/';

var isScopedReusableModule = function(path) {
    var scopedReusableModulesRegEx = /node_modules\/@[^\/]*\/[^\/]*/;
    return scopedReusableModulesRegEx.test(path);
};

var deepEquals = function (obj1, obj2) {
    if ((typeof obj1 === "object" && obj1 !== null) && (typeof obj2 === "object" && obj2 !== null)) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (var property in obj1) {
            if (obj1.hasOwnProperty(property)) {
                if (!obj2.hasOwnProperty(property)) {
                    return false;
                }
                if (!deepEquals(obj1[property], obj2[property])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    } else if (obj1 === obj2) {
        return true;
    }
    return false;
};

module.exports = {
    'hdiSeparator': hdiSeparator,
    'dataFolderName': dataFolderName,
    'accessFolderName': accessFolderName,
    'defaultAccessRoleFilename': 'default_access_role',
    'defaultAccessRolePath': 'src/defaults/default_access_role.hdbrole',
    'generatedHdbroleFilename': "zdm_access",
    'generatedSequencesHdbroleFilename': "zdm_sequences",
    'generatedHdbGrantsFilename': "zdm_data_access",
    'deployId': process.env.DEPLOY_ID || 'Deployment ID: none',
    'installAction': 'install',
    'startAction': 'start',
    'finalizeAction': 'finalize',
    'logicalServiceDataContainer': 'zdm-data-service',
    'logicalServiceAccessContainer': 'zdm-access-service',
    'successfulFinalMsg': 'ZDM deployment done',
    'failureFinalMsg': 'ZDM deployment failed',
    'parseFullname': function (fullname) {
        var fullnameCopy = fullname;
        var namespace = '';
        var firstNameAfterNamespace = fullname;

        if (fullnameCopy.indexOf('::') !== -1) {
            namespace = fullnameCopy.substring(0, fullnameCopy.lastIndexOf('::'));
            var fullnameWithoutNamespace = fullnameCopy.substring(fullnameCopy.lastIndexOf('::') + 2, fullnameCopy.length);
            fullnameCopy = fullnameWithoutNamespace;
            firstNameAfterNamespace = fullnameWithoutNamespace;
        }
        if (fullnameCopy.indexOf('.') !== -1) {
            firstNameAfterNamespace = fullnameCopy.substring(0, fullnameCopy.indexOf('.'));
        } else {
            firstNameAfterNamespace = fullnameCopy.substring(0, fullnameCopy.length);
        }

        var contexts = [];
        if (fullnameCopy.indexOf('.') !== -1) {
            var tmpFullname = fullnameCopy;
            while (tmpFullname.indexOf('.') > -1) {
                var contextName = tmpFullname.substring(0, tmpFullname.indexOf('.'));
                contexts.push(contextName);
                tmpFullname = tmpFullname.substring(tmpFullname.indexOf('.') + 1, tmpFullname.length);
            }
        }

        var name = '';
        if (contexts.length > 0) {
            name = fullnameCopy.substring(fullnameCopy.lastIndexOf('.') + 1, fullnameCopy.length);
        } else {
            name = fullnameCopy;
        }

        return {
            'fullname': fullname,
            'namespace': namespace,
            'contexts': contexts,
            'name': name,
            'firstNameAfterNamespace': firstNameAfterNamespace, // Could be context, entity, view, ...
            'fullnameWithoutNamespace': fullnameCopy
        };
    },
    'getDirPathStartingWithoutSrcCfgLib': function (directoryShortPath) {
        var srcCfgRegEx = /^(src|cfg)\/(.*)$/g;
        var globalSrcCfgResult = srcCfgRegEx.exec(directoryShortPath);
        if (globalSrcCfgResult !== null) {
            return globalSrcCfgResult[2];
        }
        var nodeModulesLibSrcCfgRegEx = /^node_modules\/[^\/]*\/(src|cfg)\/(.*)$/g;
        if (isScopedReusableModule(directoryShortPath)) {
            nodeModulesLibSrcCfgRegEx = /^node_modules\/@[^\/]*\/[^\/]*\/(src|cfg)\/(.*)$/g;
        }
        var reusableModulesResult = nodeModulesLibSrcCfgRegEx.exec(directoryShortPath);
        if (reusableModulesResult !== null) {
            return reusableModulesResult[2];
        }
        return null;
    }, 
    'getReusableModuleName': function (shortPath) {
        var reusableModulesRegEx = /^node_modules\/([^\/]*)\/.*$/g;
        if (isScopedReusableModule(shortPath)) {
            reusableModulesRegEx = /^node_modules\/@[^\/]*\/([^\/]*)\/.*$/g;
        }
        var result = reusableModulesRegEx.exec(shortPath);
        if (result !== null) {
            return result[1];
        }
        return null;
    }, 
    'getReusableModuleScopeName': function (shortPath) {
        if (!isScopedReusableModule(shortPath)) {
            return null;
        }
        var reusableModuleScopeNameRegEx = /^node_modules\/(@[^\/]*)\/[^\/]*\/.*$/g;
        var result = reusableModuleScopeNameRegEx.exec(shortPath);
        if (result !== null) {
            return result[1];
        }
        return null;
    }, 
    'isScopedReusableModule': isScopedReusableModule, 
    'isReusableModule': function (path) {
        var reusableModulesRegEx = /node_modules\/[^\/]*/;
        return reusableModulesRegEx.test(path);
    },
    'isModeledInDataFolder': function (directoryPathStartingWithoutSrcCfgLib) {
        if (directoryPathStartingWithoutSrcCfgLib === null) {
            return false;
        }
        var baseFolder = directoryPathStartingWithoutSrcCfgLib.split(hdiSeparator)[0];
        if (baseFolder === dataFolderName) {
            return true;
        }
        return false;
    },
    'isModeledInAccessFolder': function (directoryPathStartingWithoutSrcCfgLib) {
        if (directoryPathStartingWithoutSrcCfgLib === null) {
            return false;
        }
        var baseFolder = directoryPathStartingWithoutSrcCfgLib.split(hdiSeparator)[0];
        if (baseFolder === accessFolderName) {
            return true;
        }
        return false;
    },
    'getMatches': function (string, regex, index) {
        if (!regex.global) {
            throw new Error("The regex " + regex + " must be global.");
        }
        var matches = [];
        var match = regex.exec(string);
        while (match) {
            matches.push(match[index]);
            match = regex.exec(string);
        }
        return matches;
    },
    'removeDuplicatedEntries': function (array){
        var map = {};
        for (var i=0; i<array.length; i++) {
            map[array[i]] = null;
        }
        return Object.keys(map);
    },
    'jsonExtend': function () {
        var ret = {};
        var len = arguments.length;
        for (var i=0; i<len; i++) {
            for (var p in arguments[i]) {
                if (arguments[i].hasOwnProperty(p)) {
                    ret[p] = arguments[i][p];
                }
            }
        }
        return ret;
    }, 
    'deepEquals': deepEquals, 
    'arrayContains': function (arr, targetObj) {
        for (var i=0; i<arr.length; i++) {
            var sourceObj = arr[i];
            if (deepEquals(sourceObj, targetObj)) {
                return true;
            }
        }
        return false;
    },
    'hdbafllangprocedure': 'hdbafllangprocedure',
    'hdbanalyticprivilege': 'hdbanalyticprivilege',
    'hdbcalculationview': 'hdbcalculationview',
    'hdbconstraint': 'hdbconstraint',
    'hdbcds': 'hdbcds',
    'hdbcollection': 'hdbcollection',
    'hdbflowgraph': 'hdbflowgraph',
    'hdbfulltextindex': 'hdbfulltextindex',
    'hdbfunction': 'hdbfunction',
    'hdbgraphworkspace': 'hdbgraphworkspace',
    'hdbmrjob': 'hdbmrjob',
    'jar':'jar',
    'hdbindex': 'hdbindex',
    'hdblibrary': 'hdblibrary',
    'hdblogicalschema': 'hdblogicalschema',
    'hdbprocedure': 'hdbprocedure',
    'hdbprojectionview': 'hdbprojectionview',
    'hdbprojectionviewconfig': 'hdbprojectionviewconfig',
    'hdbpublicsynonym': 'hdbpublicsynonym',
    'hdbreptask': 'hdbreptask',
    'hdbresultcache': 'hdbresultcache',
    'hdbrole': 'hdbrole',
    'hdbroleconfig': 'hdbroleconfig',
    'hdbsearchruleset': 'hdbsearchruleset',
    'hdbsequence': 'hdbsequence',
    'hdbstatistics': 'hdbstatistics',
    'hdbstructuredprivilege': 'hdbstructuredprivilege',
    'hdbsynonym': 'hdbsynonym',
    'hdbsynonymconfig': 'hdbsynonymconfig',
    'hdbsysbicsynonym': 'hdbsysbicsynonym',
    'hdbtable': 'hdbtable',
    'hdbdropcreatetable': 'hdbdropcreatetable',
    'hdbtabledata': 'hdbtabledata',
    'csv': 'csv',
    'properties': 'properties',
    'tags': 'tags',
    'hdbtabletype': 'hdbtabletype',
    'hdbtextconfig': 'hdbtextconfig',
    'hdbtextdict': 'hdbtextdict',
    'hdbtextrule': 'hdbtextrule',
    'hdbtextinclude': 'hdbtextinclude',
    'hdbtextlexicon': 'hdbtextlexicon',
    'hdbtextminingconfig': 'hdbtextminingconfig',
    'hdbtrigger': 'hdbtrigger',
    'hdbview': 'hdbview',
    'hdbvirtualfunction': 'hdbvirtualfunction',
    'hdbvirtualfunctionconfig': 'hdbvirtualfunctionconfig',
    'hdbvirtualprocedure': 'hdbvirtualprocedure',
    'hdbvirtualprocedureconfig': 'hdbvirtualprocedureconfig',
    'hdbvirtualtable': 'hdbvirtualtable',
    'hdbvirtualtableconfig': 'hdbvirtualtableconfig',
    'hdbvirtualpackagehadoop': 'hdbvirtualpackagehadoop',
    'hdbvirtualpackagesparksql': 'hdbvirtualpackagesparksql',
    'txt': 'txt',
    'hdiconfig': 'hdiconfig',
    'hdinamespace': 'hdinamespace',
    'hdbgrants': 'hdbgrants'
};

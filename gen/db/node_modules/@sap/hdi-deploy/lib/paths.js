'use strict';

const syspath = require('path');


/*
 * regular expression for the cfg/ directories:
 * - cfg/
 * - lib/<single directory>/cfg/
 * - lib/@<scope>/<single directory>/cfg/
 */
const regExpCfgDirectory = /^cfg\/|^lib\/[^\/]*\/cfg\/|^lib\/@[^\/]*\/[^\/]*\/cfg\//;

/*
 * regular expression for the lib/ directory:
 * - lib/
 */
const regExpLibDirectory = /^lib\//;

/*
 * regular expression for the node_modules/ directory:
 * - node_modules/
 */
const regExpNodeModulesDirectory = /^node_modules\//;

// replace platform path separator with server-side path separator
function pathWithServerPathSeparator (path) {
  if (syspath.sep === '/') {
    return path;
  }
  return path.split(syspath.sep).join('/');
}

/*
 * canonicalize the given path for the server-side
 * - ensure that the path separator is '/'
 * - ensure that modules live at 'lib/'
 */
function serverPath (path) {
  path = pathWithServerPathSeparator(path);
  path = path.replace(regExpNodeModulesDirectory, 'lib/');
  return path;
}

/*
 * canonicalize the given path for the client-side
 * - ensure that the path separator is '/'
 * - ensure that modules live at 'modules/'
 */
function clientPath (path) {
  path = pathWithServerPathSeparator(path);
  path = path.replace(regExpLibDirectory, 'node_modules/');
  return path;
}

// returns whether the given path is inside a cfg/ directory, e.g. cfg/ or lib/<single directory>/cfg/
function isInCfgDirectory (path) {
  return path.match(regExpCfgDirectory);
}

module.exports = {
  serverPath: serverPath,
  clientPath: clientPath,
  isInCfgDirectory: isInCfgDirectory,

  // pass through some symbols from syspath
  extname: syspath.extname,
  dirname: syspath.dirname,
  basename: syspath.basename,
  join: syspath.join
};

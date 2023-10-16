'use strict';


const fs = require('./fileWorker');
const path = require('path');
const paths = require('./paths.js');

exports.walk = function (root, dirs, enterDir, leaveDir, addFile) {
  function walkIntern (level, dir) {
    let found;

    // canonical directory name; ending with '/'
    const dirWithSlash = `${dir}/`;

    if (!enterDir(level, dirWithSlash)) {
      return false;
    }
    const files = fs.readdirSync(dir);

    const stats = files.map(function (name) {
      return fs.statSync(path.join(dir, name));
    });

    found = false;

    stats.forEach(function (stat, i) {
      // create the canonical filename with '/' as path separator
      const file = dirWithSlash + files[i];

      if (stat.isDirectory()) {
        if (walkIntern(level + 1, file)) {
          found = true;
        }
      }

      if (stat.isFile()) {
        if (addFile(level, dirWithSlash, file)) {
          found = true;
        }
      }
    });
    leaveDir(level, dir, found);
    return found;
  }

  // walk through every root directory
  dirs.forEach(function (dir) {
    dir = paths.clientPath(dir);
    if (dir[dir.length - 1] === '/') {
      dir = dir.slice(0, dir.length - 1);
    }
    if (fs.existsSync(dir)) {
      if (fs.statSync(dir).isDirectory()) {
        walkIntern(0, dir);
      }
    }
  });
};

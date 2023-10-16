

'use strict';

const util = require('util');
const inspect = Symbol.for('nodejs.util.inspect.custom');
const regex_helper = require('./regex-helper');

/**
 * A filter for paths (directories and files)
 *
 * @class PathFilter
 */
class PathFilter {
  /**
   * Creates an instance of PathFilter.
   *
   * @memberOf PathFilter
   */
  constructor () {
    this.invalidate();
  }

  /**
   * Invalidate the filter, initialize the properties.
   *
   * @returns {undefined}
   * @memberOf PathFilter
   */
  invalidate () {
    this.valid = false;
    this.directories = {};
    this.files = {};
    this.regex = [];
  }

  /**
   * inspect will be called by util.inspect in node.js
   * we want to avoid that the 'class name' is also printed and mucks up the assertions
   * @returns {String} the inspect properties.
   *
   * @memberOf PathFilter
   */
  inspect () {
    if (this.regex.length > 0) {
      return util.format('{ valid: %s, directories: %j, files: %j, regex: %j }', this.valid, this.directories, this.files, this.regex);
    } else {
      return util.format('{ valid: %s, directories: %j, files: %j }', this.valid, this.directories, this.files);
    }
  }

  // Use Symbol-based implementation - old one is deprecated, but we have to keep it for node 6 support.
  /**
   * inspect will be called by util.inspect in node.js
   * we want to avoid that the 'class name' is also printed and mucks up the assertions
   * @returns {String} the inspect properties.
   *
   * @memberOf PathFilter
   */
  [inspect] () {
    if (this.regex.length > 0) {
      return util.format('{ valid: %s, directories: %j, files: %j, regex: %j }', this.valid, this.directories, this.files, this.regex);
    } else {
      return util.format('{ valid: %s, directories: %j, files: %j }', this.valid, this.directories, this.files);
    }
  }

  /**
   * Filter the given paths by the regexes in this filter.
   *
   * @param {[String]} paths Paths to filter.
   * @returns {[String]} The filtered paths.
   *
   * @memberOf PathFilter
   */
  filter_by_regex (paths) {
    return paths.filter((path) => {
      for (let i = 0; i < this.regex.length; i++) {
        const regex = this.regex[i];
        if (regex_helper.regex_match(regex, path)) {
          return true;
        }
      }
      return false;
    });
  }

  /**
   * Add the given path and make the filter valid.
   *
   * @param {String} path Path to add.
   * @returns {undefined}
   * @memberOf PathFilter
   */
  addPath (path) {
    this.valid = true;
    if (path.indexOf('*') !== -1) {
      this.regex.push(regex_helper.build_regex(path));
    } else if (path[path.length - 1] === '/') {
      this.directories[path] = true;
    } else {
      this.files[path] = true;
    }
  }

  /**
   * Add the given paths and make the filter valid.
   *
   * @param {[String]} paths Paths to add.
   * @returns {undefined}
   * @memberOf PathFilter
   */ addPaths (paths) {
    if (Array.isArray(paths)) {
      for (let i = 0; i < paths.length; ++i) {
        this.addPath(paths[i]);
      }
    } else {
      let ps;
      let p;
      if (paths.hasOwnProperty('directories')) {
        ps = paths.directories;
        for (p in ps) {
          if (ps.hasOwnProperty(p)) {
            this.addPath(p);
          }
        }
      }
      if (paths.hasOwnProperty('files')) {
        ps = paths.files;
        for (p in ps) {
          if (ps.hasOwnProperty(p)) {
            this.addPath(p);
          }
        }
      }

      if (paths.hasOwnProperty('regex')) {
        paths.regex.forEach((r) => this.regex.push(r));
      }
    }
  }

  /**
   * Checks whether the given path (directory or file) matches to the filter
   *
   * @param {String} path Path to check.
   * @returns {boolean} True if it matches a filter.
   *
   * @memberOf PathFilter
   */ matchesPath (path) {
    if (!this.valid) {
      // an invalid filter always contains everything
      return true;
    }

    if (this.files.hasOwnProperty(path)) {
      // exact match for a file
      return true;
    }

    for (const directory in this.directories) {
      if (path.indexOf(directory) === 0) { // startsWith
        // we have a directory in the filter which is a prefix of path
        return true;
      }
    }

    for (let i = 0; i < this.regex.length; i++) {
      const regex = this.regex[i];
      if (regex_helper.regex_match(regex, path)) {
        this.addPath(path);
        return true;
      }
    }

    return false;
  }

  /**
   * Calls the given callback for each file in this filter
   *
   * @param {Function} cb Callback to call.
   * @returns {undefined}
   *
   * @memberOf PathFilter
   */
  forEachFile (cb) {
    if (!this.valid) {
      return;
    }
    for (const path in this.files) {
      if (this.files.hasOwnProperty(path)) {
        // eslint-disable-next-line callback-return
        cb(path);
      }
    }
  }

  /**
   * Returns the number of elements in the filter
   *
   * @returns {Integer} The number of elements in the filter.
   *
   * @memberOf PathFilter
   */
  size () {
    return Object.keys(this.directories).length + Object.keys(this.files).length + this.regex.length;
  }
}

module.exports = PathFilter;

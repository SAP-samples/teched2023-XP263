'use strict';
const fs = require('fs');
const path = require('path');
const logger = require('./logger.js');

/**
 * Handles parsing of the ignore file.
 *
 * @class IgnoreFile
 */
class IgnoreFile {
  /**
   * Creates an instance of IgnoreFile.
   * @param {any} root ROOT Path for the deployer.
   * @param {string} [ignore_file_name='.hdiignore'] Name of the ignore file. Default is .hdiignore
   *
   * @memberOf IgnoreFile
   */
  constructor (root, ignore_file_name = '.hdiignore') {
    const file_path = path.join(root, ignore_file_name);
    if (fs.existsSync(file_path)) {
      try {
        this.lines = fs.readFileSync(file_path, 'utf8').split(/\r?\n/)
          .filter((line) => {
            if (line.startsWith('!')) {
              throw new Error('The "!" operator is not supported!');
            }
            return line !== '';
          });
        let lines_message = `Found ${this.lines.length} lines.`;
        if (this.lines.length === 1) {
          lines_message = `Found ${this.lines.length} line.`;
        }
        logger.log(`Ignore file found at "${file_path}". ${lines_message}`);
      } catch (e) {
        throw new Error(`Could not parse .hdiignore file at "${file_path}". Error: ${e.message}`);
      }
    } else {
      logger.log(`No ignore file at ${file_path}.`);
      this.lines = [];
    }
  }

  /**
   * Get the lines from the file.
   *
   * @returns {String[]} The lines from the file.
   *
   * @memberOf IgnoreFile
   */
  getPaths () {
    return this.lines;
  }
}

module.exports = IgnoreFile;
'use strict';

const fs = require('fs');
const path = require('path');
const utils = require('./utils');

function replace_root_path_in_error_message (error, root, dir) {
  error.message = error.message.replace(path.join(root, dir), dir);
  return error;
}
class FileWorker {
  constructor () {
  }

  set_root (root) {
    this.root = root;
  }

  join (dir, prefix = this.root) {
    return path.join(prefix, dir);
  }

  readdirSync (dir) {
    try {
      return fs.readdirSync(this.join(dir));
    } catch (e) {
      throw replace_root_path_in_error_message(e, this.root, dir);
    }
  }

  statSync (dir) {
    try {
      return fs.statSync(this.join(dir));
    } catch (e) {
      throw replace_root_path_in_error_message(e, this.root, dir);
    }
  }

  existsSync (dir) {
    try {
      return fs.existsSync(this.join(dir));
    } catch (e) {
      throw replace_root_path_in_error_message(e, this.root, dir);
    }
  }

  createReadStream (dir) {
    try {
      const rs =  fs.createReadStream(this.join(dir));
      return rs;
    } catch (e) {
      throw replace_root_path_in_error_message(e, this.root, dir);
    }
  }

  copyFileSync (target, destination) {
    try  {
      const read_file = fs.readFileSync(this.join(target));
      const write_result = fs.writeFileSync(this.join(destination), read_file);
      return write_result;
    } catch (e) {
      throw replace_root_path_in_error_message(e, this.root, target);
    }
  }

  readJSONFile (dir) {
    try {
      return utils.readJSONFile(this.join(dir));
    } catch (e) {
      throw replace_root_path_in_error_message(e, this.root, dir);
    }
  }
}

module.exports = new FileWorker();



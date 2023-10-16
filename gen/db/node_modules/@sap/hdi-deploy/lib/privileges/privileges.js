'use strict';


const async = require('async');

const logger = require('../logger.js');

const grantor = require('./grantor');
const revoker = require('./revoker');

// grant target container oo and target container access role
exports.grant = function (options, services, content, container, grantee, cb) {
  const tasks = [];

  try {
    logger.logTimerInit('grants-files', 'Processing grants files...');

    const fileNames = content.synonymGrantorFiles;
    logger.trace('grants files:', fileNames);

    fileNames.forEach(function (fileName) {
      if (options.workingSet.matchesPath(fileName)) {
        tasks.push(logger.logfn(` Processing "${fileName}"...`));
        tasks.push(function (callback) {
          grantor(services, content.root, fileName, container, grantee, callback);
        });
        tasks.push(logger.logfn(` Processing "${fileName}"... ok`));
      }
    });

    tasks.push(logger.logfnTimerDelta('grants-files', 'Processing grants files... ok'));
  } catch (err) {
    return cb(err);
  }

  async.series(tasks, function (err, results) {
    cb(err, {
      task: 'synonym',
      results: results
    });
  });
};

exports.revoke = function (options, services, content, container, grantee, cb) {
  const tasks = [];
  try {
    logger.logTimerInit('revoke-files', 'Processing revoke files...');

    const fileNames = content.synonymRevokerFiles;
    logger.trace('revoke files:', fileNames);

    fileNames.forEach(function (fileName) {
      if (options.workingSet.matchesPath(fileName)) {
        tasks.push(logger.logfn(` Processing "${fileName}"...`));
        tasks.push(function (callback) {
          revoker(services, content.root, fileName, container, grantee, callback);
        });
        tasks.push(logger.logfn(` Processing "${fileName}"... ok`));
      }
    });

    tasks.push(logger.logfnTimerDelta('revoke-files', 'Processing revoke files... ok'));
  } catch (err) {
    return cb(err);
  }

  async.series(tasks, function (err, results) {
    cb(err, {
      task: 'synonym',
      results: results
    });
  });
};

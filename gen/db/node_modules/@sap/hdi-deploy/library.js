/* eslint no-console: 0 */
'use strict';

// Use let here to allow changing this variable using rewire for testing
/* eslint-disable-next-line prefer-const */
let child_process = require('child_process');

const path = require('path');
const fs = require('fs');
const { dedupeMessagesById } = require('./lib/utils');

/**
 * Delete all deployer options from the given environment
 *
 * @param {Object} env Environment variables like process.env
 * @returns {Object} Environment variables without deployer specific variables.
 */
function clean_env (env) {
  const env_copy = JSON.parse(JSON.stringify(env));

  delete env_copy.APPLICATION_ID;
  delete env_copy.APPLICATION_VERSION_INFO;
  delete env_copy.EXIT;
  delete env_copy.HDI_DEPLOY_OPTIONS;
  delete env_copy.HDI_DEPLOY_MODE;
  delete env_copy.DEPLOY_ID;
  delete env_copy.TRACE;
  delete env_copy.ROOT;
  delete env_copy.SERVICE_REPLACEMENTS;
  delete env_copy.TARGET_CONTAINER;
  // ZDM;
  delete env_copy.HDI_DEPLOY_ZDM_ACTION;

  return env_copy;
}

/**
 * Run a deployment for the given folder and services.
 *
 * @param {String} contentDir Basically the "ROOT", where the files are.
 * @param {Object} deployerEnv Env for the deployer, VCAP_SERVICES etc.
 * @param {Nodeback} callback Callback to call after finishing the deployment. (error, response)
 * @param {any} io Overwrite the default io streams.
 *
 * @returns {Function} Returns with callback to prevent calling twice.
 */
function deploy (contentDir, deployerEnv, callback, io) {
  // Check user input.
  if (!fs.existsSync(contentDir)) {
    return callback(new Error(`Content directory ${contentDir} does not exist.`));
  }
  const response = {messages: []};

  try {
    let stdio;
    if (io === undefined) {
      stdio = ['ignore', process.stdout, process.stderr, 'ipc'];
    } else {
      stdio = ['ignore', 'pipe', 'pipe', 'ipc'];
    }
    // console.log('forking hdi-deploy...');

    const pathToDeployer = path.join(__dirname, 'deploy.js');

    const deployer = child_process.fork(pathToDeployer, ['--exit', '--send-messages-to-parent-process'],
      {
        cwd: contentDir,
        env: deployerEnv,
        stdio: stdio,
        execArgv: process.execArgv
      }
    );

    deployer.on('message', function (message) {
      if (message.hasOwnProperty('final_message_sent')) {
        deployer.send({final_message_received: {}});
      } else {
        response.messages.push(message);
      }
    });

    if (io) { // not null and not undefined
      if (io.stdoutCB !== undefined) {
        deployer.stdout.on('data', io.stdoutCB);
      }

      if (io.stderrCB !== undefined) {
        deployer.stderr.on('data', io.stderrCB);
      }
    }

    deployer.on('close', function (code, signal) {
      if (code === null) {
        response.signal = `@sap/hdi-deploy child process was closed by signal: ${signal}`;
        response.exitCode = -1;
      } else {
        response.exitCode = code;
      }
      // Dedupe and sort messages, since they might be disordered due to "late sending"
      response.messages = dedupeMessagesById(response.messages);
      response.messages.sort((a, b) => parseInt(a.id) - parseInt(b.id));
      return callback(null, response);
    });
  } catch (e) {
    // In case of an exception, call the callback with the exception and any responses received so far.
    return callback(e, response);
  }
}

module.exports = {
  deploy: deploy,
  clean_env: clean_env
};

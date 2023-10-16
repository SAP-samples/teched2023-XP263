'use strict';
const {isArray} = require('./utils');

/**
 * Get the password parts from the services specified in service.
 *
 * @param {any} service Service to build.
 * @param {any} service_accessor Service getter
 * @returns {Object} service
 */
function build (service, service_accessor) {
  if (isArray(service.credentials.password)) {
    const services_to_check = service.credentials.password;

    const password = services_to_check.map(service_name => {
      let creds;
      try {
        creds = service_accessor.getCreds(service_name);
      } catch (e) {
        const error_message = `Could not get the credentials for service ${service_name}, required by ${service.name}. Root cause: ${e.message ? e.message : e}`;

        throw new Error(error_message);
      }

      if (!creds.password) {
        throw new Error(`The service ${service_name} should provide a password-part for the password service ${service.name}, but none was provided!`);
      }

      return creds.password;
    }).reduce((previous, current) => previous + current, '');

    service.credentials.password = password;
  }

  if (isArray(service.credentials.hdi_password)) {
    const services_to_check = service.credentials.hdi_password;

    const hdi_password = services_to_check.map(service_name => {
      let creds;
      try {
        creds = service_accessor.getCreds(service_name);
      } catch (e) {
        const error_message = `Could not get the credentials for service ${service_name}, required by ${service.name}. Root cause: ${e.message ? e.message : e}`;

        throw new Error(error_message);
      }

      if (!creds.hdi_password) {
        throw new Error(`The service ${service_name} should provide a hdi_password-part for the password service ${service.name}, but none was provided!`);
      }

      return creds.hdi_password;
    }).reduce((previous, current) => {
      return previous + current;
    }, '');
    service.credentials.hdi_password = hdi_password;
  }

  return service;
}

module.exports.build = build;

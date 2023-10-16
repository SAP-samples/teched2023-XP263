'use strict';


const paths = require('./paths.js');

/**
 * Translates given key/option by replacing all the underscores '_' with dash '-'
 *
 * @param {string} key
 * @returns {any} Replaced key
 */
function translateKey (key) {
  return key.replace(/_/g, '-');
}

// translates the boolean-typed value of a JSON environment option to process arguments
function translateJSONEnvBooleanOptionToOption (logger, options, name, key, argv) {
  if (!options.hasOwnProperty(key)) {
    return;
  }

  const option = options[key];
  if (option === true) {
    argv.push(`--${translateKey(key)}`);
  } else if (option === false) {
    argv.push(`--no-${translateKey(key)}`);
  } else {
    logger.error(`Option "${key}" in ${name} needs to have a boolean value`);
    process.exit(1);
  }
}

// translates the integer-typed value of a JSON environment option to process arguments
function translateJSONEnvIntegerOptionToOption (logger, options, name, key, argv) {
  if (!options.hasOwnProperty(key)) {
    return;
  }

  const option = options[key];
  if (Number.isInteger(option)) {
    argv.push(`--${translateKey(key)}`);
    argv.push(option);
  } else {
    logger.error(`Option "${key}" in ${name} needs to have an integer value`);
    process.exit(1);
  }
}

// translates the string-typed value of a JSON environment option to process arguments
function translateJSONEnvStringOptionToOption (logger, options, name, key, argv) {
  if (!options.hasOwnProperty(key)) {
    return;
  }

  const option = options[key];
  if (typeof option === 'string') {
    argv.push(`--${translateKey(key)}`);
    argv.push(option);
  } else {
    logger.error(`Option "${key}" in ${name} needs to have a string value`);
    process.exit(1);
  }
}

// translates the string-array-typed value of a JSON environment option to process arguments
function translateJSONEnvStringArrayOptionToOption (logger, options, name, key, argv) {
  if (!options.hasOwnProperty(key)) {
    return;
  }

  const option = options[key];
  if (Array.isArray(option)) {
    for (let i = 0; i < option.length; ++i) {
      const path = option[i];
      if (typeof path !== 'string') {
        logger.error(`Option "${key}" in ${name} needs to have a string value at array element ${i}`);
        process.exit(1);
      }
    }
    argv.push(`--${translateKey(key)}`);
    argv.push(option);
  } else {
    logger.error(`Option "${key}" in ${name} needs to have an array value`);
    process.exit(1);
  }
}

function translateJSONEnvStringKeyValueObjectOptionToOption (logger, options, name, key, argv) {
  if (!options.hasOwnProperty(key)) {
    return;
  }

  const option = options[key];
  if (typeof option === 'object' && !Array.isArray(option)) {
    Object.keys(option).forEach(function (k) {
      const v = option[k];
      if (typeof v !== 'string') {
        logger.error(`Option "${key}" in ${name} needs to have a string value at key "${k}"`);
        process.exit(1);
      }
    });
    argv.push(`--${translateKey(key)}`);
    argv.push(option);
  } else {
    logger.error(`Option "${key}" in ${name} needs to have an object value`);
    process.exit(1);
  }
}

// translates the given string list-option via the given callback function
function translateStringListOption (i, argv, cb) {
  ++i;
  let nextArgIsNotAnOption = false;
  while (i < argv.length) {
    const arg = argv[i];
    if (typeof arg === 'string' && arg !== '') {
      if (nextArgIsNotAnOption) {
        // this is definitely a value
        cb(arg);
        nextArgIsNotAnOption = false;
      } else if (arg === '--') {
        // it's a marker to allow values which start with --
        nextArgIsNotAnOption = true;
      } else if (arg.length > 2 && arg[0] === '-' && arg[1] === '-') {
        // it's an option, push it back and continue in caller('s loop)
        --i;
        break;
      } else {
        // it's a value
        cb(arg);
      }
    } else if (Array.isArray(arg)) {
      // it's a list of values
      for (let j = 0; j < arg.length; ++j) {
        const argj = arg[j];
        if (typeof argj === 'string' && argj !== '') {
          cb(argj);
        }
      }
    } else {
      // it's a key-valued object
      for (const key in arg) {
        if (arg.hasOwnProperty(key)) {
          cb([key, arg[key]]);
        }
      }
    }
    ++i;
  }
  return i;
}

// translates the given string list-option option to an array
function translateStringListOptionToArray (i, argv, array) {
  while (array.length > 0) {
    array.pop();
  }
  return translateStringListOption(i, argv, function (value) {
    array.push(value);
  });
}

// translates the given string <key>=<value> list-option option to an object with keyed values
function translateStringKeyValueListOptionToObject (i, argv, object) {
  Object.keys(object).forEach(function (key) {
    delete object[key];
  });
  return translateStringListOption(i, argv, function (value) {
    if (typeof value === 'string') {
      // split the string <key>=<value> into key and value
      const index = value.indexOf('=');
      if (index === -1) {
        object[value] = '';
      } else {
        object[value.substring(0, index)] = value.substring(index+1);
      }
    } else {
      // it's a 2 element array
      object[value[0]] = value[1];
    }
  });
}

// translates the given path-filter-like option to a path filter object, e.g. --include-filter path1 path2 -- --path3
function translatePathListOptionToPathFilter (i, argv, pathFilter, cb) {
  pathFilter.invalidate();
  return translateStringListOption(i, argv, function (path) {
    // ensure that path filters always use server paths
    path = paths.serverPath(path);
    if (cb) {
      cb(path);
    }
    pathFilter.addPath(path);
  });
}

module.exports = {
  translateJSONEnvBooleanOptionToOption: translateJSONEnvBooleanOptionToOption,
  translateJSONEnvIntegerOptionToOption: translateJSONEnvIntegerOptionToOption,
  translateJSONEnvStringOptionToOption: translateJSONEnvStringOptionToOption,
  translateJSONEnvStringArrayOptionToOption: translateJSONEnvStringArrayOptionToOption,
  translateJSONEnvStringKeyValueObjectOptionToOption: translateJSONEnvStringKeyValueObjectOptionToOption,
  translateStringListOptionToArray: translateStringListOptionToArray,
  translateStringKeyValueListOptionToObject: translateStringKeyValueListOptionToObject,
  translatePathListOptionToPathFilter: translatePathListOptionToPathFilter
};

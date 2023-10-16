/**
 * create config files from templates (stored in folder cfg.templates)
 */

'use strict';


exports.convertTemplate = function (template, services) {
  if (!(template instanceof Object)) {
    throw new Error(`invalid template type: ${typeof template}`);
  }

  /*
   * check whether a key in the template ends with '.configure'
   * allow 'grantor' as key for downward compatibility
   * TODO ECMAScript 6: String.prototype.endsWith()
   */
  function isConfigurable (key) {
    return (key === 'grantor' || -1 !== key.indexOf('.configure', key.length - 10));
  }

  function isWellKnownField (field) {
    return (field === 'database' || field === 'schema' || field === 'remote');
  }

  /**
   * checks whether the field is either database or schema or remote
   *
   * @param {any} field refers to key
   * @returns {boolean}
   */
  function checkProperties (target) {
    if ('grantor' in target && ('schema' in target || 'schema.configure' in target || '*.configure' in target)) {
      throw new Error('Property "grantor" must not exist simultaneously with "schema", "schema.configure" or "*.configure"');
    }
  }

  // replace configurable keys with their real name & value
  function replaceKey (target, key) {
    let grantor;
    if (key === 'grantor') {
      grantor = target.grantor;
      const schema = services.getCreds(grantor).schema;
      if (typeof schema === 'undefined') {
        throw new Error(`grantor ${grantor} has no property "schema"`);
      }
      target.schema = schema;
      delete target.grantor;
      return;
    }

    const newKey = key.substr(0, key.length - 10); // everything but '.configure'
    if (newKey === '*') {
      grantor = target[key];
      const creds = services.getCreds(grantor);
      Object.keys(creds).forEach(function (key) {
        if (isWellKnownField(key)) {
          target[key] = creds[key];
        }
      });
    } else {
      const replacement = target[key].split('/');    // <grantor>/<value>
      grantor = replacement[0];
      const value = replacement[1];
      target[newKey] = services.getCreds(grantor)[value];
    }
    delete target[key];
  }

  let converted = false;

  // convert one hierarchy level of a JSON object
  function convertLevel (obj) {
    checkProperties(obj);
    Object.keys(obj).forEach(function (key) {
      if (obj[key] instanceof Object) { // descend one level deeper
        convertLevel(obj[key]);
      } else if (isConfigurable(key)) {
        converted = true;
        replaceKey(obj, key);
      }
    });
  }

  convertLevel(template);

  return {
    converted: converted,
    content: template
  };
};

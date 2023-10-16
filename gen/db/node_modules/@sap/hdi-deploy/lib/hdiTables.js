'use strict';


exports.parameters = {
  type: '_SYS_DI.TT_PARAMETERS',
  fields: ['KEY', 'VALUE']
};

exports.schemaRoles = {
  type: '_SYS_DI.TT_SCHEMA_ROLES',
  fields: ['ROLE_NAME', 'PRINCIPAL_NAME']
};

exports.schemaPrivileges = {
  type: '_SYS_DI.TT_SCHEMA_PRIVILEGES',
  fields: ['PRIVILEGE_NAME', 'PRINCIPAL_NAME']
};

exports.filesFolders = {
  type: '_SYS_DI.TT_FILESFOLDERS',
  fields: ['PATH']
};

exports.filesFoldersParameters = {
  type: '_SYS_DI.TT_FILESFOLDERS_PARAMETERS',
  fields: ['PATH', 'KEY', 'VALUE']
};

exports.filesFoldersContent = {
  type: '_SYS_DI.TT_FILESFOLDERS_CONTENT',
  fields: ['PATH', 'CONTENT']
};

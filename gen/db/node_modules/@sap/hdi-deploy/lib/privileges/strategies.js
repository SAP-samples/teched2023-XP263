'use strict';

const hdiTables = require('../hdiTables.js');

/**
 * Grant privileges via SQL.
 *
 * @class SQLGrantorStrategy
 */
class SQLGrantorStrategy {
  /**
   * Creates an instance of SQLGrantorStrategy.
   * @param {hana-helper} client SQL client.
   * @param {Array} tasks Tasks.
   *
   * @memberOf SQLGrantorStrategy
   */
  constructor (client, tasks) {
    this.client = client;
    this.tasks = tasks;
  }

  /**
   * Initialize the strategy.
   *
   * Does nothing.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  initialize () {
  }

  /**
   * Finalize the strategy.
   *
   * Does nothing.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  finalize () {
  }

  /**
   * Grant system privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  handleSystemPrivileges (privileges, grantee, grantable) {
    this.tasks.push(this.client.grantSystemPrivileges(privileges, grantee, grantable));
  }

  /**
   * Grant schema privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} schema Schema to grant for
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  handleSchemaPrivileges (privileges, schema, grantee, grantable) {
    this.tasks.push(this.client.grantSchemaPrivileges(privileges, schema, grantee, grantable));
  }

  /**
   * Grant global object privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} name Name
   * @param {any} type Type
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  handleGlobalObjectPrivileges (privileges, name, type, grantee, grantable) {
    this.tasks.push(this.client.grantGlobalObjectPrivileges(privileges, name, type, grantee, grantable));
  }

  /**
   * Grant schema object privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} schema Schema to grant for
   * @param {any} name Name
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  handleSchemaObjectPrivileges (privileges, schema, name, grantee, grantable) {
    this.tasks.push(this.client.grantObjectPrivileges(privileges, schema, name, grantee, grantable));
  }

  /**
   * Grant global roles to the grantee.
   *
   * @param {any} roles Roles to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  handleGlobalRoles (roles, grantee, grantable) {
    this.tasks.push(this.client.grantRoles(roles, grantee, grantable));
  }

  /**
   * Grant schema roles to the grantee.
   *
   * @param {any} schema Schema to grant for
   * @param {any} roles Roles to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf SQLGrantorStrategy
   */
  handleSchemaRoles (schema, roles, grantee, grantable) {
    this.tasks.push(this.client.grantSchemaRoles(schema, roles, grantee, grantable));
  }
}

/**
 * Grant privileges via a HDI container.
 *
 * @class HDIContainerGrantorStrategy
 */
class HDIContainerGrantorStrategy {
  /**
   * Creates an instance of HDIContainerGrantorStrategy.
   * @param {hana-helper} client SQL client.
   * @param {Array} tasks Tasks.
   * @param {String} grantor_schema Schema of the grantor container.
   *
   * @memberOf HDIContainerGrantorStrategy
   */
  constructor (client, tasks, grantor_schema) {
    this.client = client;
    this.tasks = tasks;
    this.grantor_schema = grantor_schema;
    this.container_roles = [];
  }

  /**
   * Initialize the strategy.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  initialize () {
    this.container_roles = [];
  }

  /**
   * Finalize the strategy.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  finalize () {
    if (this.container_roles.length > 0) {
      // grant all container roles which were collected into container_roles
      const tempTablesForContainerRoles = [
        ['#CONTAINER_ROLES_PARAMETERS', hdiTables.parameters.type],
        ['#CONTAINER_ROLES', hdiTables.schemaRoles.type]
      ];

      this.tasks.push(this.client.createTmpTables(tempTablesForContainerRoles));

      this.tasks.push(this.client.bulkInsert('#CONTAINER_ROLES', hdiTables.schemaRoles.fields, this.container_roles));
      this.tasks.push(this.client.hdiGrantSchemaRoles(this.grantor_schema, '#CONTAINER_ROLES', '#CONTAINER_ROLES_PARAMETERS', this.client.hdiCheckResult('grant container roles', true)));

      this.tasks.push(this.client.dropTmpTables(tempTablesForContainerRoles));
    }
  }

  /**
   * Grant system privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  handleSystemPrivileges () {
    throw new Error('system privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Grant schema privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} schema Schema to grant for
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  handleSchemaPrivileges () {
    throw new Error('schema privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Grant global object privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} name Name
   * @param {any} type Type
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  handleGlobalObjectPrivileges () {
    throw new Error('global object privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Grant schema object privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} schema Schema to grant for
   * @param {any} name Name
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  handleSchemaObjectPrivileges () {
    throw new Error('object privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Grant global roles to the grantee.
   *
   * @param {any} roles Roles to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  handleGlobalRoles () {
    throw new Error('global roles are not supported in case of an HDI container service binding');
  }

  /**
   * Grant schema roles to the grantee.
   *
   * @param {any} schema Schema to grant for
   * @param {any} roles Roles to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf HDIContainerGrantorStrategy
   */
  handleSchemaRoles (schema, roles, grantee, grantable) {
    if (schema !== this.grantor_schema) {
      throw new Error('schema is not supported for schema roles in case of an HDI container service binding');
    }
    if (grantable) {
      throw new Error('schema roles with admin option are not supported in case of an HDI container service binding');
    }
    const container_roles = this.container_roles;
    roles.forEach(function (role) {
      container_roles.push([role, grantee]);
    });
  }
}

/**
 * Grant privileges via a Procedure as a grantor.
 *
 * @class ProcedureGrantorStrategy
 */
class ProcedureGrantorStrategy {
  /**
   * Creates an instance of ProcedureGrantorStrategy.
   * @param {hana-helper} client SQL client.
   * @param {Array} tasks Tasks.
   * @param {String} grantor_procedure Procedure to use
   * @param {String} grantor_procedure_schema Schema to use
   *
   * @memberOf ProcedureGrantorStrategy
   */
  constructor (client, tasks, grantor_procedure, grantor_procedure_schema) {
    this.client = client;
    this.tasks = tasks;
    this.grantor_procedure = grantor_procedure;
    this.grantor_procedure_schema = grantor_procedure_schema;
    this.grant_privileges = [];
  }

  /**
   * Initialize the strategy.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  initialize () {
    this.privileges = [];
  }

  /**
   * Finalize the strategy.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  finalize () {
    if (this.grant_privileges.length > 0) {
      this.tasks.push(this.client.execute('CREATE LOCAL TEMPORARY COLUMN TABLE #PRIVILEGES (PRIVILEGE_TYPE NVARCHAR(128), PRIVILEGE_NAME NVARCHAR(256), OBJECT_SCHEMA NVARCHAR(256), OBJECT_NAME NVARCHAR(256), OBJECT_TYPE NVARCHAR(128), GRANTEE_SCHEMA NVARCHAR(256), GRANTEE_NAME NVARCHAR(256), GRANTABLE NVARCHAR(5))'));

      this.tasks.push(this.client.bulkInsert('#PRIVILEGES', ['PRIVILEGE_TYPE', 'PRIVILEGE_NAME', 'OBJECT_SCHEMA', 'OBJECT_NAME', 'OBJECT_TYPE', 'GRANTEE_SCHEMA', 'GRANTEE_NAME', 'GRANTABLE'], this.grant_privileges));
      const schema_prefix = this.grantor_procedure_schema ? `${this.client.quotedSQLIdentifier(this.grantor_procedure_schema)}.` : '';
      this.tasks.push(this.client.execute(`CALL ${schema_prefix}${this.client.quotedSQLIdentifier(this.grantor_procedure)}(#PRIVILEGES)`));

      this.tasks.push(this.client.execute('DROP TABLE #PRIVILEGES'));
    }
  }

  /**
   * Grant system privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  handleSystemPrivileges (privileges, grantee, grantable) {
    privileges.forEach((privilege) => {
      this.grant_privileges.push([
        'SYSTEM_PRIVILEGE',
        privilege,
        null,
        null,
        null,
        null,
        grantee,
        grantable ? 'TRUE' : 'FALSE'
      ]);
    });
  }

  /**
   * Grant schema privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} schema Schema to grant for
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  handleSchemaPrivileges (privileges, schema, grantee, grantable) {
    privileges.forEach((privilege) => {
      this.grant_privileges.push([
        'SCHEMA_PRIVILEGE',
        privilege,
        null,
        schema,
        null,
        null,
        grantee,
        grantable ? 'TRUE' : 'FALSE'
      ]);
    });
  }

  /**
   * Grant global object privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} name Name
   * @param {any} type Type
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  handleGlobalObjectPrivileges (privileges, name, type, grantee, grantable) {
    privileges.forEach((privilege) => {
      this.grant_privileges.push([
        'GLOBAL_OBJECT_PRIVILEGE',
        privilege,
        null,
        name,
        type,
        null,
        grantee,
        grantable ? 'TRUE' : 'FALSE'
      ]);
    });
  }

  /**
   * Grant schema object privileges to the grantee.
   *
   * @param {any} privileges Privileges to grant.
   * @param {any} schema Schema to grant for
   * @param {any} name Name
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  handleSchemaObjectPrivileges (privileges, schema, name, grantee, grantable) {
    privileges.forEach((privilege) => {
      this.grant_privileges.push([
        'SCHEMA_OBJECT_PRIVILEGE',
        privilege,
        schema,
        name,
        null,
        null,
        grantee,
        grantable ? 'TRUE' : 'FALSE'
      ]);
    });
  }

  /**
   * Grant global roles to the grantee.
   *
   * @param {any} roles Roles to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  handleGlobalRoles (roles, grantee, grantable) {
    roles.forEach((role) => {
      this.grant_privileges.push([
        'GLOBAL_ROLE',
        null,
        null,
        role,
        null,
        null,
        grantee,
        grantable ? 'TRUE' : 'FALSE'
      ]);
    });
  }

  /**
   * Grant schema roles to the grantee.
   *
   * @param {any} schema Schema to grant for
   * @param {any} roles Roles to grant.
   * @param {any} grantee Who to grant to.
   * @param {any} grantable Add WITH ADMIN OPTION.
   *
   * @returns {undefined}
   * @memberOf ProcedureGrantorStrategy
   */
  handleSchemaRoles (schema, roles, grantee, grantable) {
    roles.forEach((role) => {
      this.grant_privileges.push([
        'SCHEMA_ROLE',
        null,
        schema,
        role,
        null,
        null,
        grantee,
        grantable ? 'TRUE' : 'FALSE'
      ]);
    });
  }
}

/**
 * Revoke privileges via SQL.
 *
 * @class SQLRevokerStrategy
 */
class SQLRevokerStrategy {
  /**
   * Creates an instance of SQLRevokerStrategy.
   * @param {hana-helper} client SQL client.
   * @param {Array} tasks Tasks.
   *
   * @memberOf SQLRevokerStrategy
   */
  constructor (client, tasks) {
    this.client = client;
    this.tasks = tasks;
  }

  /**
   * Initialize the strategy.
   *
   * Does nothing.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  initialize () {
  }

  /**
   * Finalize the strategy.
   *
   * Does nothing.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  finalize () {
  }

  /**
   * Revoke system privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  handleSystemPrivileges (privileges, revokee) {
    this.tasks.push(this.client.revokeSystemPrivileges(privileges, revokee));
  }

  /**
   * Revoke schema privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} schema Schema to Revoke for
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  handleSchemaPrivileges (privileges, schema, revokee) {
    this.tasks.push(this.client.revokeSchemaPrivileges(privileges, schema, revokee));
  }

  /**
   * Revoke global object privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} name Name
   * @param {any} type Type
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  handleGlobalObjectPrivileges (privileges, name, type, revokee) {
    this.tasks.push(this.client.revokeGlobalObjectPrivileges(privileges, name, type, revokee));
  }

  /**
   * Revoke schema object privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} schema Schema to revoke for
   * @param {any} name Name
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  handleSchemaObjectPrivileges (privileges, schema, name, revokee) {
    this.tasks.push(this.client.revokeObjectPrivileges(privileges, schema, name, revokee));
  }

  /**
   * Revoke global roles from the revokee.
   *
   * @param {any} roles Roles to revoke.
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  handleGlobalRoles (roles, revokee) {
    this.tasks.push(this.client.revokeRoles(roles, revokee));
  }

  /**
   * Revoke schema roles from the revokee.
   *
   * @param {any} schema Schema to revoke for
   * @param {any} roles Roles to revoke.
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf SQLRevokerStrategy
   */
  handleSchemaRoles (schema, roles, revokee) {
    this.tasks.push(this.client.revokeSchemaRoles(schema, roles, revokee));
  }
}

/**
 * Revoke privileges via a HDI container.
 *
 * @class HDIContainerRevokerStrategy
 */
class HDIContainerRevokerStrategy {
  /**
   * Creates an instance of HDIContainerRevokerStrategy.
   * @param {hana-helper} client SQL client.
   * @param {Array} tasks Tasks.
   * @param {String} grantor_schema Schema of the grantor container.
   *
   * @memberOf HDIContainerRevokerStrategy
   */
  constructor (client, tasks, grantor_schema) {
    this.client = client;
    this.tasks = tasks;
    this.grantor_schema = grantor_schema;
    this.container_roles = [];
  }

  /**
   * Initialize the strategy.
   *
   * @returns {undefined}
   * @memberOf HDIContainerRevokerStrategy
   */
  initialize () {
    this.container_roles = [];
  }

  /**
   * Finalize the strategy.
   *
   * @returns {undefined}
   * @memberOf HDIContainerRevokerStrategy
   */
  finalize () {
    if (this.container_roles.length > 0) {
      // revoke all container roles which were collected into container_roles
      const tempTablesForContainerRoles = [
        ['#CONTAINER_ROLES_PARAMETERS', hdiTables.parameters.type],
        ['#CONTAINER_ROLES', hdiTables.schemaRoles.type]
      ];

      this.tasks.push(this.client.createTmpTables(tempTablesForContainerRoles));

      this.tasks.push(this.client.bulkInsert('#CONTAINER_ROLES', hdiTables.schemaRoles.fields, this.container_roles));
      this.tasks.push(this.client.hdiRevokeSchemaRoles(this.grantor_schema, '#CONTAINER_ROLES', '#CONTAINER_ROLES_PARAMETERS', this.client.hdiCheckResult('revoke container roles', true)));

      this.tasks.push(this.client.dropTmpTables(tempTablesForContainerRoles));
    }
  }

  /**
   * Revoke system privileges from the revokee.
   * @returns {undefined}
   * @throws {Error} Throws because this is not supported.
   * @memberOf HDIContainerRevokerStrategy
   */
  handleSystemPrivileges () {
    throw new Error('system privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Revoke schema privileges from the revokee.
   * @returns {undefined}
   * @throws {Error} Throws because this is not supported.
   * @memberOf HDIContainerRevokerStrategy
   */
  handleSchemaPrivileges () {
    throw new Error('schema privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Revoke global object privileges from the revokee.
   * @returns {undefined}
   * @throws {Error} Throws because this is not supported.
   * @memberOf HDIContainerRevokerStrategy
   */
  handleGlobalObjectPrivileges () {
    throw new Error('global object privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Revoke schema object privileges from the revokee.
   * @returns {undefined}
   * @throws {Error} Throws because this is not supported.
   * @memberOf HDIContainerRevokerStrategy
   */
  handleSchemaObjectPrivileges () {
    throw new Error('object privileges are not supported in case of an HDI container service binding');
  }

  /**
   * Revoke global roles from the revokee.
   * @returns {undefined}
   * @throws {Error} Throws because this is not supported.
   * @memberOf HDIContainerRevokerStrategy
   */
  handleGlobalRoles () {
    throw new Error('global roles are not supported in case of an HDI container service binding');
  }

  /**
   * Revoke schema roles from the revokee.
   *
   * @param {any} schema Schema to revoke for.
   * @param {any} roles Roles to revoke.
   * @param {any} revokee Whom to revoke from.
   *
   * @returns {undefined}
   * @memberOf HDIContainerRevokerStrategy
   */
  handleSchemaRoles (schema, roles, revokee) {
    if (schema !== this.grantor_schema) {
      throw new Error('schema is not supported for schema roles in case of an HDI container service binding');
    }
    const container_roles = this.container_roles;
    roles.forEach(function (role) {
      container_roles.push([role, revokee]);
    });
  }
}

/**
 * Revoke privileges via a Procedure as a grantor.
 *
 * @class ProcedureRevokerStrategy
 */
class ProcedureRevokerStrategy {
  /**
   * Creates an instance of ProcedureRevokerStrategy.
   * @param {hana-helper} client SQL client.
   * @param {Array} tasks Tasks.
   * @param {String} revoker_procedure Procedure to use
   * @param {String} revoker_procedure_schema Schema to use
   *
   * @memberOf ProcedureRevokerStrategy
   */
  constructor (client, tasks, revoker_procedure, revoker_procedure_schema) {
    this.client = client;
    this.tasks = tasks;
    this.revoker_procedure = revoker_procedure;
    this.revoker_procedure_schema = revoker_procedure_schema;
    this.revoke_privileges = [];
  }

  /**
   * Initialize the strategy.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  initialize () {
    this.privileges = [];
  }

  /**
   * Finalize the strategy.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  finalize () {
    if (this.revoke_privileges.length > 0) {
      this.tasks.push(this.client.execute('CREATE LOCAL TEMPORARY COLUMN TABLE #PRIVILEGES (PRIVILEGE_TYPE NVARCHAR(128), PRIVILEGE_NAME NVARCHAR(256), OBJECT_SCHEMA NVARCHAR(256), OBJECT_NAME NVARCHAR(256), OBJECT_TYPE NVARCHAR(128), REVOKEE_SCHEMA NVARCHAR(256), REVOKEE_NAME NVARCHAR(256))'));

      this.tasks.push(this.client.bulkInsert('#PRIVILEGES', ['PRIVILEGE_TYPE', 'PRIVILEGE_NAME', 'OBJECT_SCHEMA', 'OBJECT_NAME', 'OBJECT_TYPE', 'REVOKEE_SCHEMA', 'REVOKEE_NAME'], this.revoke_privileges));
      const schema_prefix = this.revoker_procedure_schema ? `${this.client.quotedSQLIdentifier(this.revoker_procedure_schema)}.` : '';
      this.tasks.push(this.client.execute(`CALL ${schema_prefix}${this.client.quotedSQLIdentifier(this.revoker_procedure)}(#PRIVILEGES)`));

      this.tasks.push(this.client.execute('DROP TABLE #PRIVILEGES'));
    }
  }

  /**
   * Revoke system privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} revokee Who to revoke from.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  handleSystemPrivileges (privileges, revokee) {
    privileges.forEach((privilege) => {
      this.revoke_privileges.push([
        'SYSTEM_PRIVILEGE',
        privilege,
        null,
        null,
        null,
        null,
        revokee
      ]);
    });
  }

  /**
   * Revoke schema privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} schema Schema to revoke from
   * @param {any} revokee Who to revoke from.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  handleSchemaPrivileges (privileges, schema, revokee) {
    privileges.forEach((privilege) => {
      this.revoke_privileges.push([
        'SCHEMA_PRIVILEGE',
        privilege,
        null,
        schema,
        null,
        null,
        revokee
      ]);
    });
  }

  /**
   * Revoke global object privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} name Name
   * @param {any} type Type
   * @param {any} revokee Who to revoke from.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  handleGlobalObjectPrivileges (privileges, name, type, revokee) {
    privileges.forEach((privilege) => {
      this.revoke_privileges.push([
        'GLOBAL_OBJECT_PRIVILEGE',
        privilege,
        null,
        name,
        type,
        null,
        revokee
      ]);
    });
  }

  /**
   * Revoke schema object privileges from the revokee.
   *
   * @param {any} privileges Privileges to revoke.
   * @param {any} schema Schema to revoke from
   * @param {any} name Name
   * @param {any} revokee Who to revoke from.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  handleSchemaObjectPrivileges (privileges, schema, name, revokee) {
    privileges.forEach((privilege) => {
      this.revoke_privileges.push([
        'SCHEMA_OBJECT_PRIVILEGE',
        privilege,
        schema,
        name,
        null,
        null,
        revokee
      ]);
    });
  }

  /**
   * Revoke global roles from the revokee.
   *
   * @param {any} roles Roles to revoke.
   * @param {any} revokee Who to revoke from.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  handleGlobalRoles (roles, revokee) {
    roles.forEach((role) => {
      this.revoke_privileges.push([
        'GLOBAL_ROLE',
        null,
        null,
        role,
        null,
        null,
        revokee
      ]);
    });
  }

  /**
   * Revoke schema roles from the revokee.
   *
   * @param {any} schema Schema to revoke from
   * @param {any} roles Roles to revoke.
   * @param {any} revokee Who to revoke from.
   *
   * @returns {undefined}
   * @memberOf ProcedureRevokerStrategy
   */
  handleSchemaRoles (schema, roles, revokee) {
    roles.forEach((role) => {
      this.revoke_privileges.push([
        'SCHEMA_ROLE',
        null,
        schema,
        role,
        null,
        null,
        revokee
      ]);
    });
  }
}

module.exports = {
  SQLGrantorStrategy,
  HDIContainerGrantorStrategy,
  ProcedureGrantorStrategy,
  SQLRevokerStrategy,
  HDIContainerRevokerStrategy,
  ProcedureRevokerStrategy
};
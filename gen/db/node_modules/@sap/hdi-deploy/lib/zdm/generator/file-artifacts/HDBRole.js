'use strict';

var FileArtifact = require('./FileArtifact.js');

function HDBRole() {
    FileArtifact.prototype.constructor.apply(this, arguments);
}

HDBRole.prototype = Object.create(FileArtifact.prototype);
HDBRole.prototype.constructor = HDBRole;

// Default handling of .hdbrole:
// Deployed only in ACCESS schema.
// The privileges from ACCESS to DATA are handled by the zdm roles, and app can only assign roles to users from the ACCESS schema.
// A role in the DATA schema would need to reference tables only.
// Limitation: It's not possible to give privileges like ALTER or INDEX for tables via roles (in the ACCESS schema).

HDBRole.prototype.accept = function() {
    FileArtifact.prototype.accept.apply(this, arguments);
};

HDBRole.prototype.isDefaultRole = function() {
    return false;
};

module.exports = HDBRole;

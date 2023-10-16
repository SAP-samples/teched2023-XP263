/**
 * Returns true/false if entity is root of a document in a draft enabled service.
 *
 * @param {object} definitions Definitions of the reflected model
 * @param {string} entityName Name of the entity
 */
const isDraftRootEntity = (definitions, entityName) => {
  return definitions[entityName] && definitions[entityName]['@Common.DraftRoot.PreparationAction']
}

module.exports = {
  isDraftRootEntity
}

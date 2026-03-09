const map = require("../mappers/shamel-v1-map");

function projectRow(tableName, row) {
  const definition = map[tableName];
  if (!definition) {
    return null;
  }

  const result = {
    sourceTable: tableName,
    targetEntity: definition.entity
  };

  Object.keys(definition.fields).forEach(function (sourceField) {
    const targetField = definition.fields[sourceField];
    result[targetField] = row[sourceField];
  });

  return result;
}

module.exports = {
  projectRow
};

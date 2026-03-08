const moduleIdentity = require("../../module-identity");

module.exports = {
  name: "iPharmEGY Module Registry",
  registeredModules: Object.keys(moduleIdentity),
  mode: "central-registry"
};

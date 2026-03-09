const store = require("./memory-store");

function save(s) {
  store.stores.set(s.storeId, s);
}

function findById(id) {
  return store.stores.get(id);
}

function all() {
  return Array.from(store.stores.values());
}

module.exports = {
  save,
  findById,
  all
};

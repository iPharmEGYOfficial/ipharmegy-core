const store = require("./memory-store");

function save(item) {
  store.items.set(item.itemId, item);
}

function findById(id) {
  return store.items.get(id);
}

function all() {
  return Array.from(store.items.values());
}

module.exports = {
  save,
  findById,
  all
};

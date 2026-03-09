const store = require("./memory-store");

function save(stock) {
  store.stocks.set(stock.stockRowId, stock);
}

function findByItem(itemId) {
  return Array.from(store.stocks.values())
    .filter(s => s.itemId === itemId);
}

function findByStore(storeId) {
  return Array.from(store.stocks.values())
    .filter(s => s.storeId === storeId);
}

module.exports = {
  save,
  findByItem,
  findByStore
};

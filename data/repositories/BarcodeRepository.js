const store = require("./memory-store");

function save(barcode) {
  store.barcodes.set(barcode.barcodeId, barcode);
}

function findByItem(itemId) {
  return Array.from(store.barcodes.values())
    .filter(b => b.itemId === itemId);
}

module.exports = {
  save,
  findByItem
};

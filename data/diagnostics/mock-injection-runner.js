const projector = require("../importers/shamel-v1-projector");

const ItemRepository = require("../repositories/ItemRepository");
const BarcodeRepository = require("../repositories/BarcodeRepository");
const StoreRepository = require("../repositories/StoreRepository");
const StockRepository = require("../repositories/StockRepository");

const samples = require("./sample-data");

function inject(table, rows) {
  rows.forEach(row => {
    const obj = projector.projectRow(table, row);

    if (!obj) return;

    if (obj.targetEntity === "Item") ItemRepository.save(obj);
    if (obj.targetEntity === "Barcode") BarcodeRepository.save(obj);
    if (obj.targetEntity === "Store") StoreRepository.save(obj);
    if (obj.targetEntity === "StockQty") StockRepository.save(obj);
  });
}

inject("CLASSES", samples.CLASSES);
inject("CLS_UNIT_BARCODE", samples.BARCODES);
inject("STORES_TAB", samples.STORES);
inject("STORAG_QTY", samples.STOCKS);

console.log("Items:", ItemRepository.all());
console.log("Stores:", StoreRepository.all());
console.log("Barcodes for item 56994:", BarcodeRepository.findByItem(56994));
console.log("Stock for item 56994:", StockRepository.findByItem(56994));

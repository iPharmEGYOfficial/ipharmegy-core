module.exports = {
  version: "v1",
  priorityTables: [
    "GROUP_CLASS",
    "GROUP_CLASS_2",
    "CLASSES",
    "CLS_UNIT_BARCODE",
    "STORES_TAB",
    "STORAG_QTY"
  ],
  injectionMode: "import-only",
  notes: [
    "Negative stock quantities are allowed",
    "Do not write back to Shamel",
    "Use mapping layer before repository injection"
  ]
};

const projector = require("../importers/shamel-v1-projector");

const samples = {
  CLASSES: {
    CLS_ID: 56994,
    CLS_NO: "12",
    CLS_ARNAME: "ASTROGLIDE LUBRICANT GEL 35 ML",
    CLS_ENNAME: "",
    GCLS_ID: 3,
    GCLS_ID_1: 6,
    CLS_STATE: 0,
    CLS_TYPE: 0,
    CLS_COMPANY: "",
    CLS_CONTRY: "",
    CLS_CATOGRY: "",
    CLS_SIZE: "",
    CLS_COLOR: "",
    GTIN: null,
    CLS_TAX: 5,
    CLS_TAX_P: 5,
    CLS_SALES_TAX: null,
    CLS_MIN_LIMIT: null,
    CLS_LIMIT: null,
    CLS_MAX_LIMIT: null,
    CLS_UN_1: "PCs",
    CLS_UN_1_PCODE: "015594010069",
    CLS_IMG_PATH: null
  },
  CLS_UNIT_BARCODE: {
    CLS_BAR_ID: 8,
    CLS_ID: 56994,
    UN_ID: 1,
    UN_BARCODE_NO: "015594010069",
    CLS_BAR_PRICE: 0,
    CLS_BAR_COLOR: null,
    CLS_BAR_SIZE: null,
    CUS_ID: null
  },
  STORES_TAB: {
    ST_ID: 2,
    ST_NO: "2",
    ST_ARNAME: "??? ???2",
    ST_ENNAME: null,
    ST_STATE: 0,
    ST_ADD: "????????",
    ST_TEL: "0542073199",
    ST_ADMIN: null,
    BRA_ID: 1,
    CE_ID_ST: null
  },
  STORAG_QTY: {
    STO_ID: 1,
    ST_ID: 2,
    CLS_ID: 56994,
    STO_QTY: 4,
    STO_VAL: 58.46,
    ST_NO: "2",
    ST_ARNAME: "??? ???2",
    ST_ENNAME: null
  }
};

const output = {
  item: projector.projectRow("CLASSES", samples.CLASSES),
  barcode: projector.projectRow("CLS_UNIT_BARCODE", samples.CLS_UNIT_BARCODE),
  store: projector.projectRow("STORES_TAB", samples.STORES_TAB),
  stock: projector.projectRow("STORAG_QTY", samples.STORAG_QTY)
};

console.log(JSON.stringify(output, null, 2));

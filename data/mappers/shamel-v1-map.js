module.exports = {
  GROUP_CLASS: {
    entity: "ItemGroup",
    key: "GCLS_ID",
    fields: {
      GCLS_ID: "groupId",
      GCLS_NO: "groupCode",
      GCLS_AR_NAME: "groupNameAr",
      GCLS_ENNAME: "groupNameEn",
      GCLS_STATE: "status",
      GCLS_PRICE: "defaultPrice1",
      GCLS_PRICE_2: "defaultPrice2",
      GCLS_PRICE_3: "defaultPrice3"
    }
  },
  GROUP_CLASS_2: {
    entity: "ItemBrandGroup",
    key: "GCLS_ID",
    fields: {
      GCLS_ID: "brandGroupId",
      GCLS_NO: "brandCode",
      GCLS_AR_NAME: "brandNameAr",
      GCLS_ENNAME: "brandNameEn",
      GCLS_STATE: "status"
    }
  },
  CLASSES: {
    entity: "Item",
    key: "CLS_ID",
    fields: {
      CLS_ID: "itemId",
      CLS_NO: "itemCode",
      CLS_ARNAME: "itemNameAr",
      CLS_ENNAME: "itemNameEn",
      GCLS_ID: "groupId",
      GCLS_ID_1: "brandGroupId",
      CLS_STATE: "status",
      CLS_TYPE: "itemType",
      CLS_COMPANY: "companyName",
      CLS_CONTRY: "countryName",
      CLS_CATOGRY: "categoryName",
      CLS_SIZE: "sizeName",
      CLS_COLOR: "colorName",
      GTIN: "gtin",
      CLS_TAX: "taxValue",
      CLS_TAX_P: "taxPercent",
      CLS_SALES_TAX: "salesTaxValue",
      CLS_MIN_LIMIT: "minLimit",
      CLS_LIMIT: "reorderLimit",
      CLS_MAX_LIMIT: "maxLimit",
      CLS_UN_1: "baseUnitName",
      CLS_UN_1_PCODE: "baseUnitBarcode",
      CLS_IMG_PATH: "imagePath"
    }
  },
  CLS_UNIT_BARCODE: {
    entity: "Barcode",
    key: "CLS_BAR_ID",
    fields: {
      CLS_BAR_ID: "barcodeId",
      CLS_ID: "itemId",
      UN_ID: "unitId",
      UN_BARCODE_NO: "barcode",
      CLS_BAR_PRICE: "barcodePrice",
      CLS_BAR_COLOR: "barcodeColor",
      CLS_BAR_SIZE: "barcodeSize",
      CUS_ID: "customerId"
    }
  },
  STORES_TAB: {
    entity: "Store",
    key: "ST_ID",
    fields: {
      ST_ID: "storeId",
      ST_NO: "storeCode",
      ST_ARNAME: "storeNameAr",
      ST_ENNAME: "storeNameEn",
      ST_STATE: "status",
      ST_ADD: "address",
      ST_TEL: "phone",
      ST_ADMIN: "managerName",
      BRA_ID: "branchId",
      CE_ID_ST: "centerId"
    }
  },
  STORAG_QTY: {
    entity: "StockQty",
    key: "STO_ID",
    fields: {
      STO_ID: "stockRowId",
      ST_ID: "storeId",
      CLS_ID: "itemId",
      STO_QTY: "qty",
      STO_VAL: "stockValue",
      ST_NO: "storeCode",
      ST_ARNAME: "storeNameAr",
      ST_ENNAME: "storeNameEn"
    }
  }
};

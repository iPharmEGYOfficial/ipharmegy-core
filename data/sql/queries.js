module.exports = {
  classesBatch: (offset, size) => `
    SELECT
      CLS_ID,
      CLS_NO,
      CLS_ARNAME,
      CLS_ENNAME,
      GCLS_ID,
      GCLS_ID_1,
      CLS_STATE,
      CLS_TYPE,
      CLS_COMPANY,
      CLS_CONTRY,
      CLS_CATOGRY,
      CLS_SIZE,
      CLS_COLOR,
      GTIN,
      CLS_TAX,
      CLS_TAX_P,
      CLS_SALES_TAX,
      CLS_MIN_LIMIT,
      CLS_LIMIT,
      CLS_MAX_LIMIT,
      CLS_UN_1,
      CLS_UN_1_PCODE,
      CLS_IMG_PATH
    FROM CLASSES
    ORDER BY CLS_ID
    OFFSET ${offset} ROWS
    FETCH NEXT ${size} ROWS ONLY
  `,
  barcodesBatch: (offset, size) => `
    SELECT
      CLS_BAR_ID,
      CLS_ID,
      UN_ID,
      UN_BARCODE_NO,
      CLS_BAR_PRICE,
      CLS_BAR_COLOR,
      CLS_BAR_SIZE,
      CUS_ID
    FROM CLS_UNIT_BARCODE
    ORDER BY CLS_BAR_ID
    OFFSET ${offset} ROWS
    FETCH NEXT ${size} ROWS ONLY
  `,
  stockBatch: (offset, size) => `
    SELECT
      STO_ID,
      ST_ID,
      CLS_ID,
      STO_QTY,
      STO_VAL,
      ST_NO,
      ST_ARNAME,
      ST_ENNAME
    FROM STORAG_QTY
    ORDER BY STO_ID
    OFFSET ${offset} ROWS
    FETCH NEXT ${size} ROWS ONLY
  `,
  storesAll: `
    SELECT
      ST_ID,
      ST_NO,
      ST_ARNAME,
      ST_ENNAME,
      ST_STATE,
      ST_ADD,
      ST_TEL,
      ST_ADMIN,
      BRA_ID,
      CE_ID_ST
    FROM STORES_TAB
    ORDER BY ST_ID
  `,
  salesHeadersBatch: (offset, size) => `
    SELECT
      SP_S_ID,
      SP_ID,
      S_ID,
      USER_ID,
      CUS_ID,
      CUS_ARNAME,
      SP_S_DATE,
      SP_S_TOT_FORIGNVALUE,
      SP_S_COST,
      SP_S_REBH,
      SP_S_TAX,
      SP_S_COUNT,
      SP_S_RET_NO,
      SP_S_RET_DATE,
      PRESCRIPTIONNO
    FROM SAL_POINT_INV
    ORDER BY SP_S_ID
    OFFSET ${offset} ROWS
    FETCH NEXT ${size} ROWS ONLY
  `,
  salesDetailsBatch: (offset, size) => `
    SELECT
      SP_SD_ID,
      SP_S_ID,
      CLS_ID,
      SP_SD_QLT,
      SP_SD_QLT_FREE,
      SP_SD_PRICE,
      SP_SD_TOT_FORIGNVALUE,
      SP_SD_PRICE_COST,
      SP_SD_DATE_PR,
      SP_SD_DATE_EX,
      SP_SD_CLS_BARCODE,
      SP_SD_TAX,
      SP_SD_SALES_TAX
    FROM SAL_POINT_INV_DET
    ORDER BY SP_SD_ID
    OFFSET ${offset} ROWS
    FETCH NEXT ${size} ROWS ONLY
  `
};

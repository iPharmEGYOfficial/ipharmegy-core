module.exports = {
  classesTop10: `
    SELECT TOP 10
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
  `,
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
  barcodesTop10: `
    SELECT TOP 10
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
  `,
  storesTop10: `
    SELECT TOP 10
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
  stockTop10: `
    SELECT TOP 10
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
  `
};

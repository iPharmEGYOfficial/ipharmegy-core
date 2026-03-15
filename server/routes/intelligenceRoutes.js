import express from "express";
import sql from "mssql";
import { getTenantDb } from "../db/dbFactory.js";

const router = express.Router();

async function runQuery(tenantCode, query) {
  const { pool } = await getTenantDb(tenantCode);
  const result = await pool.request().query(query);
  return result.recordset;
}

/* =========================================
   Dashboard KPI
========================================= */
router.get("/dashboard/:tenantCode", async (req, res) => {
  try {
    const data = await runQuery(
      req.params.tenantCode,
      "SELECT * FROM dbo.vw_pi_dashboard"
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      data
    });
  } catch (error) {
    console.error("dashboard intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Top Selling Products
========================================= */
router.get("/top-selling/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "20", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_pi_top_selling_products
      ORDER BY total_sold_qty DESC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("top-selling intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Dead Stock
========================================= */
router.get("/dead-stock/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "20", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_pi_dead_stock
      ORDER BY balance_qty DESC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("dead-stock intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Low Stock
========================================= */
router.get("/low-stock/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "20", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_pi_low_stock_risk
      ORDER BY balance_qty ASC, product_name_ar
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("low-stock intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Profitability
========================================= */
router.get("/profitability/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "20", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_pi_profitability
      ORDER BY estimated_profit DESC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("profitability intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Daily Sales Trend
========================================= */
router.get("/daily-sales/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "30", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_pi_daily_sales_trend
      ORDER BY sales_date DESC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("daily-sales intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

export default router;
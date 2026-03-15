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
   Low Stock Risk
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

/* =========================================
   Reorder Forecast
========================================= */
router.get("/reorder/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "50", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_reorder_forecast
      ORDER BY
        CASE recommendation
          WHEN N'OUT OF STOCK' THEN 1
          WHEN N'URGENT ORDER' THEN 2
          WHEN N'REORDER' THEN 3
          WHEN N'OK' THEN 4
          WHEN N'OVERSTOCK' THEN 5
          ELSE 6
        END,
        days_of_stock_left ASC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("reorder intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Negative Stock Audit
========================================= */
router.get("/negative-stock/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "50", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_negative_stock_audit
      ORDER BY balance_qty ASC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("negative-stock intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Purchase Gap Detector
========================================= */
router.get("/purchase-gap/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "50", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_purchase_gap_detector
      ORDER BY missing_purchase_qty DESC, current_balance_qty ASC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("purchase-gap intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Expiry Risk
========================================= */
router.get("/expiry-risk/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "50", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_expiry_intelligence
      ORDER BY
        CASE expiry_risk
          WHEN N'EXPIRED' THEN 1
          WHEN N'HIGH' THEN 2
          WHEN N'MEDIUM' THEN 3
          WHEN N'LOW' THEN 4
          ELSE 5
        END,
        days_to_expiry ASC,
        batch_balance_qty DESC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("expiry-risk intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Slow Moving Stock
========================================= */
router.get("/slow-moving/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "50", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_slow_moving_stock
      WHERE movement_status IN (N'DEAD', N'SLOW')
      ORDER BY
        CASE movement_status
          WHEN N'DEAD' THEN 1
          WHEN N'SLOW' THEN 2
          ELSE 3
        END,
        balance_qty DESC,
        sold_last_90_days ASC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("slow-moving intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

/* =========================================
   Smart Reorder Intelligence
========================================= */
router.get("/smart-reorder/:tenantCode", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit || "50", 10);

    const data = await runQuery(
      req.params.tenantCode,
      `
      SELECT TOP (${limit}) *
      FROM dbo.vw_smart_reorder_intelligence
      WHERE reorder_status IN (N'ORDER NOW', N'URGENT', N'REORDER')
        AND suggested_reorder_qty > 0
      ORDER BY
        CASE reorder_status
          WHEN N'ORDER NOW' THEN 1
          WHEN N'URGENT' THEN 2
          WHEN N'REORDER' THEN 3
          ELSE 4
        END,
        suggested_reorder_qty DESC
      `
    );

    res.json({
      ok: true,
      tenantCode: req.params.tenantCode,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("smart-reorder intelligence error:", error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

export default router;
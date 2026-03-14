import { Router } from "express";
import { getTenantDb } from "../../db/dbFactory.js";

const router = Router();

router.get("/:tenantCode", async (req, res) => {
  try {

    const tenantCode = req.params.tenantCode;

    const { pool, tenant } = await getTenantDb(tenantCode);

    const result = await pool.request().query(`
      SELECT DB_NAME() AS currentDatabase
    `);

    res.status(200).json({
      tenant: tenant.tenantName,
      database: result.recordset[0].currentDatabase
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

export default router;

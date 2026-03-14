import sql from "mssql";
import { resolveTenantByCode } from "../modules/tenant-resolver/tenantResolver.js";

/* ======================================================
   Tenant Database Factory
   Responsible for creating SQL connection per tenant
====================================================== */

export async function getTenantDb(tenantCode) {

  const tenant = resolveTenantByCode(tenantCode);

  if (!tenant || !tenant.resolved) {
    throw new Error("Tenant not found: " + tenantCode);
  }

  /* =====================================
     SQL Server Connection Configuration
  ===================================== */

  const config = {
    server: "localhost",
    database: tenant.database,

    options: {
      instanceName: "SQLEXPRESS",
      encrypt: false,
      trustServerCertificate: true,
      enableArithAbort: true
    },

    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },

    requestTimeout: 30000,
    connectionTimeout: 15000
  };

  try {

    const pool = await sql.connect(config);

    /* ===== simple connection test ===== */

    await pool.request().query("SELECT 1 as status");

    console.log(
      `Tenant DB connected → ${tenant.tenantName} (${tenant.database})`
    );

    return {
      pool,
      tenant
    };

  } catch (error) {

    console.error("Tenant DB connection error:", error.message);

    throw new Error(
      `Database connection failed for tenant ${tenantCode}`
    );

  }

}
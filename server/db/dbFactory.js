import sql from "mssql";
import { resolveTenantByCode } from "../modules/tenant-resolver/tenantResolver.js";

export async function getTenantDb(tenantCode) {
  const tenant = resolveTenantByCode(tenantCode);

  if (!tenant || !tenant.resolved) {
    throw new Error("Tenant not found: " + tenantCode);
  }

  const config = {
    server: "127.0.0.1",
    port: 1433,
    database: tenant.database,
    user: "ipharmegy_dev",
    password: "iPharmEGY@123456",
    options: {
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

    const result = await pool
      .request()
      .query("SELECT DB_NAME() AS currentDatabase");

    console.log(
      `Tenant DB connected → ${tenant.tenantName} (${result.recordset[0].currentDatabase})`
    );

    return {
      pool,
      tenant
    };
  } catch (error) {
    console.error("Tenant DB connection error (full):", error);
    throw error;
  }
}
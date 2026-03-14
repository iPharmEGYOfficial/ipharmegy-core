import sql from "mssql";
import { resolveTenantByCode } from "../modules/tenant-resolver/tenantResolver.js";

export async function getTenantDb(tenantCode) {
  const tenant = resolveTenantByCode(tenantCode);

  if (!tenant.resolved) {
    throw new Error("Tenant not found: " + tenantCode);
  }

  const config = {
    server: "127.0.0.1",
    database: tenant.database,
    options: {
      instanceName: "SQLEXPRESS",
      trustServerCertificate: true,
      encrypt: false
    }
  };

  const pool = await sql.connect(config);

  return {
    pool,
    tenant
  };
}
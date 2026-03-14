import sql from "mssql";
import { resolveTenantByCode } from "../modules/tenant-resolver/tenantResolver.js";

export async function getTenantDb(tenantCode) {

  const tenant = resolveTenantByCode(tenantCode);

  if (!tenant.resolved) {
    throw new Error("Tenant not found: " + tenantCode);
  }

  const config = {
    server: "localhost",
    database: tenant.database,
    options: {
      trustServerCertificate: true,
      encrypt: false
    },
    authentication: {
      type: "default"
    }
  };

  const pool = await sql.connect(config);

  return {
    pool,
    tenant
  };
}
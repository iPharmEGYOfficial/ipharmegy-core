import { tenantRegistry } from "../tenant-registry/tenantRegistry.js";

export function resolveTenantByCode(tenantCode) {
  if (!tenantCode) {
    return {
      resolved: false,
      message: "tenantCode is required."
    };
  }

  const normalized = tenantCode.trim().toLowerCase();

  const tenant = tenantRegistry.find(
    (x) => x.tenantCode.trim().toLowerCase() === normalized
  );

  if (!tenant) {
    return {
      resolved: false,
      message: "Tenant not found.",
      tenantCode
    };
  }

  return {
    resolved: true,
    tenantId: tenant.id,
    tenantCode: tenant.tenantCode,
    tenantName: tenant.tenantName,
    city: tenant.city,
    status: tenant.status,
    sourceSystemId: tenant.sourceSystemId,
    branchCode: tenant.branchCode,
    database: tenant.databaseName,
    connectionString: tenant.connectionString
  };
}

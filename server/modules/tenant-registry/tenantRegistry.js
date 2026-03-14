export const tenantRegistry = [
  {
    id: 1,
    tenantCode: "taif-main",
    tenantName: "Al Dora Pharmacy",
    city: "Taif",
    status: "active",
    sourceSystemId: "ALSHAMEL",
    branchCode: "MAIN",
    databaseName: "iPharmEGY_Taif_Main",
    connectionString: "Server=.;Database=iPharmEGY_Taif_Main;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  {
    id: 2,
    tenantCode: "riyadh-demo",
    tenantName: "Demo Pharmacy",
    city: "Riyadh",
    status: "inactive",
    sourceSystemId: "ALSHAMEL",
    branchCode: "DEMO",
    databaseName: "iPharmEGY_Riyadh_Demo",
    connectionString: "Server=.;Database=iPharmEGY_Riyadh_Demo;Trusted_Connection=True;TrustServerCertificate=True;"
  }
];

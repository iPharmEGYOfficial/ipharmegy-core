import express from "express";
import cors from "cors";

import { appConfig } from "./config/appConfig.js";

import healthRoutes from "./routes/healthRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import posRoutes from "./routes/posRoutes.js";
import cloudRoutes from "./routes/cloudRoutes.js";
import osRoutes from "./routes/osRoutes.js";
import importRoutes from "./routes/importRoutes.js";

import tenantsRoutes from "./modules/tenants/tenants.js";
import tenantResolverRoutes from "./modules/tenant-resolver/tenantResolverRoutes.js";
import tenantDbTestRoutes from "./modules/tenant-resolver/tenantDbTestRoutes.js";

const app = express();

/* ===============================
   Middlewares
================================ */

app.use(cors());
app.use(express.json());

/* ===============================
   Root Endpoint
================================ */

app.get("/", (req, res) => {
  res.status(200).json({
    app: appConfig.appName,
    message: "Welcome to iPharmEGY Core API",
    version: "1.0",
    platform: "iPharmEGY Platform"
  });
});

/* ===============================
   API Routes
================================ */

app.use("/api/health", healthRoutes);

app.use("/api/inventory", inventoryRoutes);

app.use("/api/pos", posRoutes);

app.use("/api/cloud", cloudRoutes);

app.use("/api/os-summary", osRoutes);

app.use("/api/import", importRoutes);

app.use("/api/tenants", tenantsRoutes);

app.use("/api/tenant-resolver", tenantResolverRoutes);

app.use("/api/tenant-db-test", tenantDbTestRoutes);

/* ===============================
   Server Start
================================ */

app.listen(appConfig.port, () => {
  console.log(
    `${appConfig.appName} running on http://127.0.0.1:${appConfig.port}`
  );
});
import express from "express";
import cors from "cors";

import { appConfig } from "./config/appConfig.js";

import healthRoutes from "./routes/healthRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import posRoutes from "./routes/posRoutes.js";
import cloudRoutes from "./routes/cloudRoutes.js";
import osRoutes from "./routes/osRoutes.js";
import importRoutes from "./routes/importRoutes.js";
import intelligenceRoutes from "./routes/intelligenceRoutes.js";

import tenantsRoutes from "./modules/tenants/tenants.js";
import tenantResolverRoutes from "./modules/tenant-resolver/tenantResolverRoutes.js";
import tenantDbTestRoutes from "./modules/tenant-resolver/tenantDbTestRoutes.js";

const app = express();

/* ===============================
   Middlewares
================================ */

app.use(
  cors({
    origin: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "http://127.0.0.1:5173",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

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

app.use("/api/intelligence", intelligenceRoutes);

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
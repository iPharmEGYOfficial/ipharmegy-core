import express from "express";
import cors from "cors";
import { appConfig } from "./config/appConfig.js";
import healthRoutes from "./routes/healthRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import posRoutes from "./routes/posRoutes.js";
import cloudRoutes from "./routes/cloudRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    app: appConfig.appName,
    message: "Welcome to iPharmEGY Core API"
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/pos", posRoutes);
app.use("/api/cloud", cloudRoutes);

app.listen(appConfig.port, () => {
  console.log(`${appConfig.appName} running on http://127.0.0.1:${appConfig.port}`);
});
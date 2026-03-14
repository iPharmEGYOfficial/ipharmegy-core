import express from "express";
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { getTenantDb } from "../modules/tenant-resolver/getTenantDb.js";
const router = express.Router();

const PARSED_FOLDER = "D:/iPharmEGY_OS/Parsed";

router.get("/run/:tenantCode", async (req, res) => {
  const { tenantCode } = req.params;

  try {
    const files = fs
      .readdirSync(PARSED_FOLDER)
      .filter((f) => f.endsWith(".csv"));

    if (files.length === 0) {
      return res.json({
        status: "no-files",
        message: "No parsed CSV files found"
      });
    }

    const latestFile = files
      .map((f) => ({
        name: f,
        time: fs.statSync(path.join(PARSED_FOLDER, f)).mtime.getTime()
      }))
      .sort((a, b) => b.time - a.time)[0].name;

    const filePath = path.join(PARSED_FOLDER, latestFile);

    const rows = [];

    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => rows.push(data))
        .on("end", resolve)
        .on("error", reject);
    });

    const { pool } = await getTenantDb(tenantCode);

    let inserted = 0;

    for (const row of rows) {
      await pool
        .request()
        .input("name", row.name || "")
        .input("barcode", row.barcode || "")
        .query(`
          INSERT INTO products (name, barcode)
          VALUES (@name, @barcode)
        `);

      inserted++;
    }

    res.json({
      tenant: tenantCode,
      file: latestFile,
      rows: rows.length,
      inserted
    });
  } catch (error) {
    console.error("Import Engine Error:", error);

    res.status(500).json({
      error: error.message
    });
  }
});

export default router;
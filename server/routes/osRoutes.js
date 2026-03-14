import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const OS_ROOT = "D:\\iPharmEGY_OS";

function safeCountFiles(targetPath, extensions = []) {
  if (!fs.existsSync(targetPath)) return 0;

  const items = fs.readdirSync(targetPath, { withFileTypes: true });
  let count = 0;

  for (const item of items) {
    const fullPath = path.join(targetPath, item.name);

    if (item.isDirectory()) {
      count += safeCountFiles(fullPath, extensions);
    } else {
      if (extensions.length === 0) {
        count += 1;
      } else {
        const ext = path.extname(item.name).toLowerCase();
        if (extensions.includes(ext)) {
          count += 1;
        }
      }
    }
  }

  return count;
}

function getLatestFolder(targetPath) {
  if (!fs.existsSync(targetPath)) return null;

  const dirs = fs
    .readdirSync(targetPath, { withFileTypes: true })
    .filter((x) => x.isDirectory())
    .map((x) => {
      const fullPath = path.join(targetPath, x.name);
      return {
        name: x.name,
        fullPath,
        time: fs.statSync(fullPath).mtime
      };
    })
    .sort((a, b) => b.time - a.time);

  return dirs.length > 0 ? dirs[0] : null;
}

router.get("/", (req, res) => {
  try {
    const importedRoot = path.join(OS_ROOT, "Imported");
    const logsRoot = path.join(OS_ROOT, "Logs");
    const parsedRoot = path.join(OS_ROOT, "Parsed");
    const reportsRoot = path.join(OS_ROOT, "Reports");

    const latestRun = getLatestFolder(importedRoot);

    const xmlCount = safeCountFiles(importedRoot, [".xml"]);
    const amnCount = safeCountFiles(importedRoot, [".amn"]);
    const logsCount = safeCountFiles(logsRoot, [".log"]);
    const parsedCount = safeCountFiles(parsedRoot, [".csv"]);
    const reportsCount = safeCountFiles(reportsRoot, [".txt"]);

    res.status(200).json({
      module: "os-import-monitor",
      status: "ready",
      osRoot: OS_ROOT,
      latestImportRun: latestRun ? latestRun.name : null,
      xmlFiles: xmlCount,
      amnFiles: amnCount,
      logs: logsCount,
      parsedFiles: parsedCount,
      reports: reportsCount
    });
  } catch (error) {
    res.status(500).json({
      module: "os-import-monitor",
      status: "error",
      message: error.message
    });
  }
});

export default router;
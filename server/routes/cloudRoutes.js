import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    module: "cloud",
    status: "ready",
    message: "Cloud module endpoint is ready."
  });
});

export default router;
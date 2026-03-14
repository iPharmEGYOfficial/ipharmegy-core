import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    module: "inventory",
    status: "ready",
    message: "Inventory module endpoint is ready."
  });
});

export default router;
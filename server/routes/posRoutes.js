import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    module: "pos",
    status: "ready",
    message: "POS module endpoint is ready."
  });
});

export default router;
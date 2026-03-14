import { Router } from "express";
import { resolveTenantByCode } from "./tenantResolver.js";

const router = Router();

router.get("/:tenantCode", (req, res) => {
  const result = resolveTenantByCode(req.params.tenantCode);

  if (!result.resolved) {
    return res.status(404).json(result);
  }

  return res.status(200).json(result);
});

export default router;

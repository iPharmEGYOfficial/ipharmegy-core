import { Router } from "express";

const router = Router();

const tenants = [
  {
    id: 1,
    name: "Al Dora Pharmacy",
    city: "Taif",
    status: "active"
  },
  {
    id: 2,
    name: "Demo Pharmacy",
    city: "Riyadh",
    status: "inactive"
  }
];

router.get("/", (req, res) => {
  res.json({
    module: "tenants",
    total: tenants.length,
    tenants
  });
});

export default router;
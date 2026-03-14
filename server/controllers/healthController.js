export function getHealth(req, res) {
  res.status(200).json({
    ok: true,
    service: "iPharmEGY Core API",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
}
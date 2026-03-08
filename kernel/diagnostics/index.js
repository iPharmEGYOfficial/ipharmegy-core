module.exports = {
  name: "iPharmEGY Diagnostics Kernel",
  probes: [
    "module-status",
    "navigation-status",
    "brand-status",
    "integration-status",
    "bridge-status"
  ],
  mode: "health-monitoring"
};

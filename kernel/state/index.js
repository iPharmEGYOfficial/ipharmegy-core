module.exports = {
  name: "iPharmEGY State Kernel",
  containers: [
    "session",
    "runtime",
    "modules",
    "diagnostics",
    "security"
  ],
  mode: "shared-state-bootstrap"
};

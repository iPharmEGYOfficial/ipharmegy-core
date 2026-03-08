module.exports = {
  name: "iPharmEGY Event Bus",
  channels: [
    "system.boot",
    "module.loaded",
    "sync.started",
    "sync.completed",
    "import.validated",
    "security.alert",
    "diagnostics.report"
  ],
  mode: "in-memory-bootstrap"
};

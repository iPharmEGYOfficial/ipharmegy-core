function AppShell(props = {}) {
  return {
    type: "AppShell",
    module: props.module || "iPharmEGY",
    page: props.page || "Home"
  };
}

module.exports = AppShell;

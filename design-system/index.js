module.exports = {
  tokens: {
    colors: require("./tokens/colors"),
    spacing: require("./tokens/spacing"),
    typography: require("./tokens/typography")
  },
  components: {
    Button: require("./components/Button"),
    Card: require("./components/Card"),
    SectionTitle: require("./components/SectionTitle")
  },
  layouts: {
    AppShell: require("./layouts/AppShell")
  }
};

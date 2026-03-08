function SectionTitle(props = {}) {
  return {
    type: "SectionTitle",
    title: props.title || "Section",
    subtitle: props.subtitle || ""
  };
}

module.exports = SectionTitle;

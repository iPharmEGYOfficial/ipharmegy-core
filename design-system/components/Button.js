function Button(props = {}) {
  return {
    type: "Button",
    variant: props.variant || "primary",
    label: props.label || "Button"
  };
}

module.exports = Button;

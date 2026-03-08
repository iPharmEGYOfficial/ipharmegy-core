function Card(props = {}) {
  return {
    type: "Card",
    title: props.title || "",
    content: props.content || ""
  };
}

module.exports = Card;

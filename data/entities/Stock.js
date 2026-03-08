function Stock(props = {}) {

return {

type: "Stock",

itemId: props.itemId || null,

quantity: props.quantity || 0,

warehouse: props.warehouse || "",

status: props.status || "available"

};

}

module.exports = Stock;

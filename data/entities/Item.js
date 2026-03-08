function Item(props = {}) {

return {

type: "Item",

itemId: props.itemId || null,

name: props.name || "",

barcode: props.barcode || "",

category: props.category || "",

status: props.status || "active"

};

}

module.exports = Item;

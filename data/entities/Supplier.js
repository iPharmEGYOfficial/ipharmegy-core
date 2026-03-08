function Supplier(props = {}) {

return {

type: "Supplier",

supplierId: props.supplierId || null,

name: props.name || "",

phone: props.phone || ""

};

}

module.exports = Supplier;

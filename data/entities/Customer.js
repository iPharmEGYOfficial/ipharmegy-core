function Customer(props = {}) {

return {

type: "Customer",

customerId: props.customerId || null,

name: props.name || "",

phone: props.phone || ""

};

}

module.exports = Customer;

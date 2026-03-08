function Expiry(props = {}) {

return {

type: "Expiry",

itemId: props.itemId || null,

expiryDate: props.expiryDate || null,

status: props.status || "valid"

};

}

module.exports = Expiry;

function Invoice(props = {}) {

return {

type: "Invoice",

invoiceId: props.invoiceId || null,

customerId: props.customerId || null,

date: props.date || null,

total: props.total || 0

};

}

module.exports = Invoice;

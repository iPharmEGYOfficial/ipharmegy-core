function Transaction(props = {}) {

return {

type: "Transaction",

transactionId: props.transactionId || null,

itemId: props.itemId || null,

quantity: props.quantity || 0,

date: props.date || null

};

}

module.exports = Transaction;

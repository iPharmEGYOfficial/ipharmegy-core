function Batch(props = {}) {

return {

type: "Batch",

batchNo: props.batchNo || "",

itemId: props.itemId || null,

expiryDate: props.expiryDate || null

};

}

module.exports = Batch;

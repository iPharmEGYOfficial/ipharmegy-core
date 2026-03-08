module.exports = {

context: require("./data-context"),

status: require("./data-status"),

map: require("./data-map"),

entities: {

Item: require("./entities/Item"),

Stock: require("./entities/Stock"),

Batch: require("./entities/Batch"),

Expiry: require("./entities/Expiry"),

Invoice: require("./entities/Invoice"),

Customer: require("./entities/Customer"),

Supplier: require("./entities/Supplier"),

Transaction: require("./entities/Transaction")

}

};

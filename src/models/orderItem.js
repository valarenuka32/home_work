const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
    {
        Quantity: {
            type: Number,
            default: 0,
        },
        price: {
            type: Number,
            default: 0,
        },
        time_of_purchase: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const orderItem = mongoose.model("orderItem", orderItemSchema);
module.exports = orderItem;
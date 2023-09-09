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
            type:Number,
            trim: true,
        },
        orders: {
            type: mongoose.Types.ObjectId,
            ref: "orders",
        },
        products: {
            type: mongoose.Types.ObjectId,
            ref: "products",
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const orderItem = mongoose.model("orderItem", orderItemSchema);
module.exports = orderItem;
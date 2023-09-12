const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_date: {
            type: Date,
            default: Date.now(),
            trim: true,
        },
        ship_date: {
            type: Date,
            default: Date.now(),
            trim: true,
        },
        total_amount: {
            type: Number,
            default: 0,
        },
        shipping_address: {
            type: String,
            trim: true,
        },
        users: {
            type: mongoose.Types.ObjectId,
            ref: "users",
        },
        products: {
            type: mongoose.Types.ObjectId,
            ref: "products",
        },
    },
);

const orders = mongoose.model("orders", orderSchema);

module.exports = orders;
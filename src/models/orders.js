const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            trim: true,
        },
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
        products: {
            type: mongoose.Types.ObjectId,
            ref: "products",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const orders = mongoose.model("orders", orderSchema);

module.exports = orders;
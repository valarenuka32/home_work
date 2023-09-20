const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
    {
        payment_method: {
            type: String,
            trim: true,
        },
        amount: {
            type: Number,
            default: 0,
        },
        transaction_date: {
            type: Date,
            default: Date.now(),
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        orders: {
            type: mongoose.Types.ObjectId,
            ref: "orders",
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

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;
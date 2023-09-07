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
            default:Date.new(),
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;
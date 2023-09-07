const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        created_at: {
            type: Date,
            default: Date.now(),
        },
        updated_at: {
            type: Date,
            default: Date.now(),
        },
        Quantity: {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
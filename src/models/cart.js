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
        },
        users: {
            type: mongoose.Types.ObjectId,
            ref: "users",
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

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
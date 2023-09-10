const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_code: {
            type: Number,
            trim: true,
        },
        Quantity: {
            type: Number,
            default: 0,
        },
        discount: {
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
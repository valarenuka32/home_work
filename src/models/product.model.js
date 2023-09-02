const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_brand: {
            type: String,
            trim: true,
        },
        product_price: {
            type: Number,
            default: 0,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        is_active: {
            type: Boolean,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const product = mongoose.model("products", productSchema);

module.exports = product;
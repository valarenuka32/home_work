const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        Stock_Quantity: {
            type: Number,
            default: 0,
        },
        categorys: {
            type: mongoose.Types.ObjectId,
            ref: "categorys",
        },
        subCategory: {
            type: mongoose.Types.ObjectId,
            ref: "subCategory",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const product = mongoose.model("products", productSchema);
module.exports = product;
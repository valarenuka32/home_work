const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        Category: {
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
        manufacturer: {
            type: String,
            trim: true,
        },
        ratings_and_reviews: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const product = mongoose.model("products", productSchema);
module.exports = product;
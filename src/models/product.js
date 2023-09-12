const mongoose = require("mongoose");
const config = require("../config/config");

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
        product_image:{
           type:String,
           trim:true,
        },
        price: {
            type: Number,
            default: 0,
        },
        Stock_Quantity: {
            type: Number,
            default: 0,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        subCategory: {
            type: mongoose.Types.ObjectId,
            ref: "subCategory",
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.product_image) {
                    data.product_image = `${config.base_url}product_image/${data.product_image}`;
                }
            },
        },
    },
);

const product = mongoose.model("products", productSchema);
module.exports = product;
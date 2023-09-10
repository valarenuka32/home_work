const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        items_name: {
            type: String,
            trim: true,
        },
        product_code: {
            type: String,
            trim: true,
        },
        quantity: {
            type: Number,
        },
        discount: {
            type: Number,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const cart = mongoose.model('cart', cartSchema);

module.exports = cart;
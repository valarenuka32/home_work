const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_code: {
            type: Number,
            default: 444,
        },
        quantity: {
            type: Number,
            default: 0,
        },
        discount: {
            type: Number,
            default: 0,
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
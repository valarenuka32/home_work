const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        quantity: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        stationery_supplier: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const stationary = mongoose.model("stationary", stationarySchema);
module.exports = stationary;
const mongoose = require("mongoose");

const fashionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        description: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const fashion = mongoose.model("fashion", fashionSchema);
module.exports = fashion;
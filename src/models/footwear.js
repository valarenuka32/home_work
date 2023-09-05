const mongoose = require("mongoose");

const footwearSchema = new mongoose.Schema(
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
        description:{
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const footwear = mongoose.model("footwear", footwearSchema);
module.exports = footwear;
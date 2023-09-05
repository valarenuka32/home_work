const mongoose = require("mongoose");

const electroincsSchema = new mongoose.Schema(
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
        category:{
            type: String,
            trim: true,
        },
        description:{
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const electroincs = mongoose.model("electroincs", electroincsSchema);
module.exports = electroincs;
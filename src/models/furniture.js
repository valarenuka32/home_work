const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        material: {
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
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const furniture = mongoose.model("furniture", furnitureSchema);
module.exports = furniture;
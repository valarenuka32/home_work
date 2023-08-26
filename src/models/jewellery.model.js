const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
        jewellery_name: {
            type: String,
            trim: true,
        },
        jewellery_material: {
            type: String,
            trim: true,
        },
        gemstone: {
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
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const jewellery = mongoose.model("jewellery", jewellerySchema);
module.exports = jewellery;
const mongoose = require("mongoose");

const PharmacySchema = new mongoose.Schema(
    {
        Pharmacy_name: {
            type: String,
            trim: true,
        },
        medicines_name: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
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

const Pharmacy = mongoose.model("Pharmacy", PharmacySchema);
module.exports = Pharmacy;
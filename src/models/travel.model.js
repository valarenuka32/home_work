const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        travel_name: {
            type: String,
            trim: true,
        },
        telephone: {
            type: Number,
            default: 0,
        },
        email: {
            type: String,
            trim: true,
        },
        address_Country: {
            type: String,
            trim: true,
        },
        payment: {
            type: Number,
            default: 0,
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

const travel = mongoose.model("travel", travelSchema);
module.exports = travel;
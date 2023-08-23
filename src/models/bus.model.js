const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true,
        },
        bus_number: {
            type: Number,
            trim: true,
        },
        route: {
            type: String,
            trim: true,
        },
        pasenger_name: {
            type: String,
            trim: true,
        },
        seat_number: {
            type: Number,
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

const bus = mongoose.model("bus", busSchema);
module.exports = bus;
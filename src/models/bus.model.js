const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true,
        },
        bus_number: {
            type: Number,
            default: 0,
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
            default: 0,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        travel: {
            type: mongoose.Types.ObjectId,
            ref: "travel",
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

const bus = mongoose.model("bus", busSchema);
module.exports = bus;
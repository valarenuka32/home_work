const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            trim: true,
        },
        departurn_date: {
            type: Number,
            default: 0,
        },
        return_date: {
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

const travel = mongoose.model("travels", travelSchema);
module.exports = travel;
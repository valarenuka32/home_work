const mongoose = require("mongoose");

const appliancesSchema = new mongoose.Schema(
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
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const appliances = mongoose.model("appliances", appliancesSchema);
module.exports = appliances;
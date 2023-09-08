const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_date: {
            type: Date,
            default: Date.now(),
            trim: true,
        },
        Status: {
            type: String,
            trim: true,
        },
        users_name: {
            type: mongoose.Types.ObjectId,
            ref: "users"
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

const order = mongoose.model("orders", orderSchema);
module.exports = order;
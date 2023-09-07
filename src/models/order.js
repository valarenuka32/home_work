const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_date: {
            type:Date,
            default:Date.now(),
            trim:true,
        },
        Status:{
          type:String,
          trim:true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const order = mongoose.model("orders", orderSchema);
module.exports = order;
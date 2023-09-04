const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
    {
        grocery_name: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        price:{
            type:Number,
            default:0,
        },
        quantity:{
            type:Number,
            default:0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const grocery = mongoose.model("categorys", grocerySchema);
module.exports = grocery;
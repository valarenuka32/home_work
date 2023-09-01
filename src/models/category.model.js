const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
        },
        category_desc: {
            type: String,
            trim: true,
        },
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product",
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

const category = mongoose.model("categorys", categorySchema);
module.exports = category;
const mongoose = require("mongoose");

const SubchildCategorySchema = new mongoose.Schema(
    {
        categorys: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        subCategory: {
            type: mongoose.Types.ObjectId,
            ref: "subCategory",
        },
        SubchildCategory_name: {
            type: String,
            trim: true,
        },
        SubchildCategory_desc: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const SubchildCategory = mongoose.model("SubchildCategory", SubchildCategorySchema);

module.exports = SubchildCategory;
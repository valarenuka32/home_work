const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: "categorys",
        },
        subCategory_name: {
            type: String,
            trim: true,
        },
        subCategory_desc: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: false,
        },
        price: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const subCategory = mongoose.model("subCategory", subCategorySchema);

module.exports = subCategory
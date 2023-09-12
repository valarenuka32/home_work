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
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const category = mongoose.model("category", categorySchema);
module.exports = category;
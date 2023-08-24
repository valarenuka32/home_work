const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        school_branch: {
            type: String,
            trim: true,
        },
        school_address: {
            type: String,
            trim: true,
        },
        studdent_id:{
            type: Number,
            trim: true,
        },
        std_contect:{
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const school = mongoose.model("categorys", schoolSchema);
module.exports = school;
const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        school_name: {
            type: String,
            trim: true,
        },
        school_code: {
            type: Number,
            default:0,
        },
        school_address: {
            type: String,
            trim: true,
        },
        studdent_id: {
            type: Number,
            default: 0,
        },
        std_contect: {
            type: Number,
            default: 0,
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
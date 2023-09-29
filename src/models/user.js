const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        Password: {
            type: Number,
            trim: true,
        },
        mobile_no: {
            type: Number,
            trim: true,
        },
        Address: {
            type: String,
            trim: true,
        },
        Payment_information: {
            type: String,
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

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.Password = bcrypt.hash(user.Password, 8);
    }
    next();
});
const user = mongoose.model("user", userSchema);
module.exports = user;
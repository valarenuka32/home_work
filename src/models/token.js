const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    expire_time: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const token = mongoose.model("token", tokenSchema);

module.exports = token;
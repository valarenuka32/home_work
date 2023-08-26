const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
    {
        music_name: {
            type: String,
            trim: true,
        },
        language: {
            type: String,
            trim: true,
        },
        artist: {
            type: String,
            trim: true,
        },
        release_year: {
            type: String,
            trim: true,
        },
        genre: {
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
    }
);

const music = mongoose.model("music", musicSchema);
module.exports = music;
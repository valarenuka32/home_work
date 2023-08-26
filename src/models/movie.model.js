const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_name: {
            type: String,
            trim: true,
        },
        release_date: {
            type: Number,
            default:0,
        },
        director_name: {
            type: String,
            trim: true,
        },
        actor_name: {
            type: String,
            trim: true,
        },
        language: {
            type: String,
            trim: true,
        },
        movie_type: {
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

const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
const Joi = require("joi");

/** create music */
const createMusic = {
    body: Joi.object().keys({
        music_name: Joi.string().required().trim(),
        language: Joi.string().required().trim(),
        artist: Joi.string().required().trim(),
        genre: Joi.string().required().trim(),
        release_year: Joi.number().integer().required(),
    }),
};

module.exports = {
    createMusic
};
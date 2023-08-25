const Joi = require("joi");

/** create user */
const createBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        bus_number: Joi.number().integer().required(),
        route: Joi.string().required().trim(),
        pasenger_name: Joi.string().required().trim(),
        seat_number: Joi.number().integer().required(),
    }),
};

module.exports = {
    createBus
};
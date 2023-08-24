const Joi = require("joi");

/** create user */
const createBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        // bus_number: Joi.Number().required().trim(),
        route: Joi.string().required().trim(),
        pasenger_name: Joi.string().required().trim(),
        // seat_number: Joi.string().required().trim(),
    }),
};

module.exports = {
    createBus
};
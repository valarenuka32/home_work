const Joi = require("joi");

/** create travel */
const createTravel = {
    body: Joi.object().keys({
        travel_name: Joi.string().required().trim(),
        telephone: Joi.number().integer().required(),
        email: Joi.string().required().trim(),
        address_Country: Joi.string().required().trim(),
        payment: Joi.number().integer().required(),
    }),
};

module.exports = {
    createTravel
};
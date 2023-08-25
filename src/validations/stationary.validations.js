const Joi = require("joi");

/** create stationary */
const createstationary = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        quantity: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createstationary
};
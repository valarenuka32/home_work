const Joi = require("joi");

/** create cart */
const createcart = {
    body: Joi.object().keys({
        created_at: Joi.number().integer().required(),
        updated_at: Joi.number().integer().required(),
        Quantity: Joi.number().integer().required(),
    }),
};

module.exports = {
    createcart
};
const Joi = require("joi");

/** create cart */
const createcart = {
    body: Joi.object().keys({
        created_at: Joi.date().required(),
        updated_at: Joi.date().required(),
        Quantity: Joi.number().integer().required(),
        users:Joi.string(),
        products:Joi.string(),
    }),
};

module.exports = {
    createcart
};
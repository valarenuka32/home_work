const Joi = require("joi");

/** create cart */
const createcart = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_code: Joi.number().required(),
        discount: Joi.number().integer().required(),
        Quantity: Joi.number().integer().required(),
        users: Joi.string(),
        products: Joi.string(),
    }),
};

module.exports = {
    createcart
};
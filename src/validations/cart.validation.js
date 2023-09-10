const Joi = require("joi");

/** create cart */
const createcart = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_code: Joi.number().require().trim(),
        discount: Joi.number().integer().required(),
        Quantity: Joi.number().integer().required(),
    }),
};

module.exports = {
    createcart
};
const Joi = require("joi");

/** create product */
const createproduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_brand: Joi.string().required().trim(),
        product_price: Joi.number().integer().required(),
        product_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createproduct
};
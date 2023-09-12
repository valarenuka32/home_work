const Joi = require("joi");

/** create Product */

const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        Category: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        Stock_Quantity: Joi.number().integer().required(),
        product_image:Joi.string().allow(""),
        category: Joi.string(),
        subCategory: Joi.string(),
    }),
};

module.exports = {
    createProduct
};
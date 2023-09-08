const Joi = require("joi");

/** create Product */

const createProduct = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        Category: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        Stock_Quantity: Joi.number().integer().required(),
        manufacturer: Joi.string().required().trim(),
        ratings_and_reviews: Joi.string().required().trim(),
    }),
};

module.exports = {
    createProduct
};
const Joi = require("joi");

/** create orderitem */

const createOrderitem = {
    body: Joi.object().keys({
        Quantity: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        time_of_purchase: Joi.number().allow(),
        products: Joi.string(),
        orders: Joi.string(),
    }),
};

module.exports = {
    createOrderitem
};
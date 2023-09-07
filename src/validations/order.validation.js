const Joi = require("joi");

/** create order */

const createOrder = {
    body: Joi.object().keys({
        order_date: Joi.number().integer().allow(),
        Status: Joi.string().required().trim(),
    }),
};

module.exports = {
    createOrder
};
const Joi = require("joi");

/** create order */

const createOrder = {
    body: Joi.object().keys({
        order_date: Joi.date().required(),
        Status: Joi.string().required().trim(),
        user: Joi.string(),
    }),
};

module.exports = {
    createOrder
};
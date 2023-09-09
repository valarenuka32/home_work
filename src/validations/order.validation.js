const Joi = require("joi");

/** create order */

const createOrder = {
    body: Joi.object().keys({
        order_date: Joi.date().required(),
        Status: Joi.string().required().trim(),
        users: Joi.string(),
    }),
};

module.exports = {
    createOrder
};
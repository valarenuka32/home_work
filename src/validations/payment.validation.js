const Joi = require("joi");

/** create payment */

const createPayment = {
    body: Joi.object().keys({
        payment_method: Joi.string().required().trim(),
        amount: Joi.number().integer().required(),
        transaction_date: Joi.date().required(),
        user: Joi.string(),
        orders: Joi.string(),
    }),
};

module.exports = {
    createPayment
};
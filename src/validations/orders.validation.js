const Joi = require("joi");

/** create orders */
const createorders = {
    body: Joi.object().keys({
        user_id: Joi.string().required().trim(),
        order_date: Joi.date().required(),
        ship_date: Joi.date().required(),
        total_amount: Joi.number().integer().required(),
        shipping_address: Joi.string().trim().required(),
    }),
};

module.exports = {
    createorders
};
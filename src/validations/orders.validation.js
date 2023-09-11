const Joi = require("joi");

/** create orders */
const createorders = {
    body: Joi.object().keys({
        order_date: Joi.date().required(),
        ship_date: Joi.date().required(),
        total_amount: Joi.number().integer().required(),
        shipping_address: Joi.string().trim().required(),
        users: Joi.string(),
        products: Joi.string(),
    }),
};
module.exports = {
    createorders
};
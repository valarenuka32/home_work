const Joi = require("joi");

/** create orders */
const createorders = {
    body: Joi.object().keys({
        user_id: Joi.number().required(),
        order_date: Joi.date().required(),
        ship_date: Joi.date().required(),
        total_amount: Joi.number().integer().required(),
        shipping_address: Joi.string().trim().required(),
        products:Joi.string(),
    }),
};
module.exports = {
    createorders
};
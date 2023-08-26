const Joi = require("joi");

/** create grocery */
const creategrocery = {
    body: Joi.object().keys({
        grocery_name: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        quantity: Joi.string().required().trim(),
    }),
};

module.exports = {
    creategrocery
};
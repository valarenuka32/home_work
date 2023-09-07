const Joi = require("joi");

/** create user */

const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        mobile_no: Joi.number().integer().required(),
        Password: Joi.number().integer().required(),
        Address: Joi.string().required().trim(),
        Payment_information: Joi.string().required().trim(),
    }),
};

module.exports = {
    createUser
};
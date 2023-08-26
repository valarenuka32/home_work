const Joi = require("joi");

/** create Pharmacy */
const createPharmacy = {
    body: Joi.object().keys({
        Pharmacy_name: Joi.string().required().trim(),
        medicines_name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
    }),
};

module.exports = {
    createPharmacy
};
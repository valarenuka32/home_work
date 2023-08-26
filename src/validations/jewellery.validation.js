const Joi = require("joi");

/** create jewellery */
const createjewellery = {
    body: Joi.object().keys({
        jewellery_name: Joi.string().required().trim(),
        jewellery_material: Joi.string().required().trim(),
        gemstone: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        description: Joi.string().required().trim(),
    }),
};

module.exports = {
    createjewellery
};
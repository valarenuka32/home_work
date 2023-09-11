const Joi = require("joi");

/** create subCategory */
const createsubCategory = {
    body: Joi.object().keys({
        subCategory_name: Joi.string().required().trim(),
        subCategory_desc: Joi.string().required().trim(),
        price: Joi.number().required(),
        categorys: Joi.string(),
    }),
};

module.exports = {
    createsubCategory
};
const Joi = require("joi");

/** create SubchildCategory */
const createSubchildCategory = {
    body: Joi.object().keys({
        SubchildCategory_name: Joi.string().required().trim(),
        SubchildCategory_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createSubchildCategory
};
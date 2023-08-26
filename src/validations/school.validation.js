const Joi = require("joi");

/** create school detiles */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    school_code: Joi.number().integer().required(),
    school_address: Joi.string().required().trim(),
    studdent_id: Joi.number().integer().required(),
    std_contect: Joi.number().integer().required(),
  }),
};

module.exports = {
  createSchool
};
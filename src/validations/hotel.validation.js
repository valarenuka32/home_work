const Joi = require("joi");

/** create hotel detiles */
const createhotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    hotel_location: Joi.string().required().trim(),
    contact_number: Joi.number().integer().required(),
    room_no: Joi.number().integer().required(),
    room_type: Joi.string().required().trim(),
  }),
};

module.exports = {
  createhotel,
};
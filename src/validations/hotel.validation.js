const Joi = require("joi");

/** create hotel detiles */
const createhotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    hotel_location: Joi.string().required().trim(),
    // contact_number: Joi.number().required(),
    // room_no: Joi.number().required().trim(),
    // room_type: Joi.string().required().trim(),
  }),
};

// get hotel list
const gethotelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};



module.exports = {
    createhotel,
    gethotelList,

};
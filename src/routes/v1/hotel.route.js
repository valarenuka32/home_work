const express = require("express");
const { hotelControler } = require("../../controllers");
const { hotelValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

// hotel detiles create
router.post(
      "/createhotel",
      validate(hotelValidation.createhotel),
      hotelControler.createhotel
);

// get hotel list
router.get(
      "/list",
      validate(hotelValidation.gethotelList),
      hotelControler.gethotelList
);
// delete
router.delete(
      "/delete-hotel/:hotelId",
      validate(hotelValidation.deletehotel),
      hotelControler.deletehotel
)
module.exports = router;
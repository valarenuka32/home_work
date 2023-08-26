const express = require("express");
const { busValidaton } = require("../../validations");
const { busControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create bus
router.post(
      "/create-bus",
      validate(busValidaton.createBus),
      busControler.createBus
);

// get bus list
router.get(
      "/bus-list",
      // validate(busValidaton.getBusList),
      busControler.getBusList
);

// bus list delete
router.delete(
      "/delete-bus/:busId",
      // validate(hotelValidation.deleteRecord),
      busControler.deleteRecord
);

module.exports = router;
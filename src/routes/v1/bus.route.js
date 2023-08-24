const express = require("express");
const { busValidaton } = require("../../validations");
const { busControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
      "/create-bus",
      validate(busValidaton.createBus),
      busControler.createBus
);

// get bus list
// router.get(
//       "/bus-list",
//       validate(busValidaton.getBusList),
//       busControler.getBusList
// );

module.exports = router;
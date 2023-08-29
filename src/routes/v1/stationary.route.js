const express = require("express");
const { stationaryControler } = require("../../controllers");
const { stationaryValidation } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

// hotel detiles create
router.post(
      "/create-stationary",
      validate(stationaryValidation.createstationary),
      stationaryControler.createstationary
);

// get hotel list
router.get(
      "/list",
      // validate(stationaryValidation.getstationaryList),
      stationaryControler.getstationaryList
);
// delete
router.delete(
      "/delete-stationary/:stationaryId",
      // validate(stationaryValidation.deleteRecord),
      stationaryControler.deleteRecord
);

// update
router.put(
      "/update/:stationaryId",
      stationaryControler.updateStationary
  );
module.exports = router;
const express = require("express");
const { travelValidaton } = require("../../validations");
const { travelControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
    "/create-travel",
    validate(travelValidaton.createTravel),
    travelControler.createTravel
);

// get bus list
router.get(
    "/travel-list",
    // validate(travelValidaton.getTravelList),
    travelControler.getTravelList
);

// bus list delete
router.delete(
    "/delete-travel/:travelId",
    // validate(travelValidaton.deleteRecord),
    travelControler.deleteRecord
);

module.exports = router;
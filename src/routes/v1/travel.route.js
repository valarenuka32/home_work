const express = require("express");
const { travelValidaton } = require("../../validations");
const { travelControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create travel
router.post(
    "/create-travel",
    validate(travelValidaton.createTravel),
    travelControler.createTravel
);

// get travel list
router.get(
    "/travel-list",
    // validate(travelValidaton.getTravelList),
    travelControler.getTravelList
);

// travel list delete
router.delete(
    "/delete-travel/:travelId",
    // validate(travelValidaton.deleteRecord),
    travelControler.deleteRecord
);

// update
router.put(
    "/update/:travelId",
    travelControler.updateTravel
);

module.exports = router;
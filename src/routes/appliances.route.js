const express = require("express");
const { appliancesValidation } = require("../validations");
const { appliancesCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create user
router.post(
    "/create-user",
    validate(appliancesValidation.createAppliances),
    appliancesCantroller.createAppliances
);

// // get user
router.get(
    "/list",
    appliancesCantroller.appliancesList
);

// // dalete
router.delete(
    "/delete-user/:userId",
    appliancesCantroller.deleteRecord
);

// // update
router.put(
    "/update/:userId",
    appliancesCantroller.updateDetiles
);

module.exports = router;
const express = require("express");
const { PharmacyValidaton } = require("../../validations");
const { PharmacyControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Pharmacy
router.post(
    "/create-Pharmacy",
    validate(PharmacyValidaton.createPharmacy),
    PharmacyControler.createPharmacy
);

// get Pharmacy list
router.get(
    "/Pharmacy-list",
    // validate(PharmacyValidaton.getPharmacyList),
    PharmacyControler.getPharmacyList
);

// Pharmacy list delete
router.delete(
    "/delete-Pharmacy/:PharmacyId",
    // validate(PharmacyValidaton.deleteRecord),
    PharmacyControler.deleteRecord
);

// update
router.put(
    "/update/:PharmacyId",
    PharmacyControler.updatePharmacy
);

module.exports = router;
const express = require("express");
const { PharmacyValidaton } = require("../../validations");
const { PharmacyControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
      "/create-Pharmacy",
      validate(PharmacyValidaton.createPharmacy),
      PharmacyControler.createPharmacy
);

// get bus list
router.get(
      "/Pharmacy-list",
      // validate(PharmacyValidaton.getPharmacyList),
      PharmacyControler.getPharmacyList
);

// bus list delete
router.delete(
      "/delete-Pharmacy/:PharmacyId",
      // validate(PharmacyValidaton.deleteRecord),
      PharmacyControler.deleteRecord
);

module.exports = router;
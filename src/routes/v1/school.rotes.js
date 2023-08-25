const express = require("express");
const { schoolValidaton } = require("../../validations");
const { schoolControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
      "/create-school",
      validate(schoolValidaton.createSchool),
      schoolControler.createSchool
);

// get bus list
router.get(
      "/school-list",
      // validate(schoolValidaton.getBusList),
      schoolControler.getBusList
);

// bus list delete
router.delete(
      "/delete-school/:schoolId",
      // validate(schoolValidaton.deleteRecord),
      schoolControler.deleteRecord
);

module.exports = router;
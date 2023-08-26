const express = require("express");
const { schoolControler } = require("../../controllers");
const { schoolValidaton } = require("../../validations");
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
      schoolControler.getschoolList
);

// bus list delete
router.delete(
      "/delete-school/:schoolId",
      // validate(schoolValidaton.deleteRecord),
      schoolControler.deleteRecord
);

module.exports = router;
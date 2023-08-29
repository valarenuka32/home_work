const express = require("express");
const { schoolControler } = require("../../controllers");
const { schoolValidaton } = require("../../validations");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create school
router.post(
      "/create-school",
      validate(schoolValidaton.createSchool),
      schoolControler.createSchool
);

// get school list
router.get(
      "/school-list",
      // validate(schoolValidaton.getBusList),
      schoolControler.getschoolList
);

// school list delete
router.delete(
      "/delete-school/:schoolId",
      // validate(schoolValidaton.deleteRecord),
      schoolControler.deleteRecord
);
// update
router.put(
      "/update/:schoolId",
      schoolControler.updateSchool
  );


module.exports = router;
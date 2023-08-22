const express = require("express");
const { hotelValidaton } = require("../../validations");
const { hotelControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// hotel detiles create
router.post(
      "/create-category",
      validate(categoryValidaton.createcategory),
      categoryControler.createcategory
);

// get hotel list
router.get(
      "/category-list",
      validate(categoryValidaton.getCategoryList),
      categoryControler.getCategoryList
);

module.exports = router;
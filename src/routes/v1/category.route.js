const express = require("express");
const { categoryValidaton } = require("../../validations");
const { categoryControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
      "/create-category",
      validate(categoryValidaton.createcategory),
      categoryControler.createcategory
);

// get category list
router.get(
      "/category-list",
      // validate(categoryValidaton.getCategoryList),
      categoryControler.getCategoryList
);

//deleteRecord
router.delete(
      "/delete-category/:categoryId",
      // validate(categoryValidaton.deleteRecord),
      categoryControler.deleteRecord
);
// update
router.put(
      "/update/:categoryId",
      categoryControler.updateCategory
);

module.exports = router;
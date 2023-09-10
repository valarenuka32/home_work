const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryCantroller } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

// create category
router.post(
    "/create-category",
    validate(categoryValidation.createcategory),
    categoryCantroller.createcategory
);

// // get category
router.get(
    "/list",
    categoryCantroller.categoryList
);

 // dalete
router.delete(
    "/delete-category/:categoryId",
    categoryCantroller.deleteRecord
);

// update
router.put(
    "/update/:categoryId",
    categoryCantroller.updateDetiles
);

module.exports = router;
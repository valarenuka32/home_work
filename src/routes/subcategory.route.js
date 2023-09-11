const express = require("express");
const { subCategoryValidation } = require("../validations");
const { subCategoryCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create subCategory
router.post(
    "/create-subCategory",
    validate(subCategoryValidation.createsubCategory),
    subCategoryCantroller.createsubCategory
);

// // get subCategory
router.get(
    "/list",
    subCategoryCantroller.subCategoryList
);

 // dalete
router.delete(
    "/delete-subCategory/:subCategoryId",
    subCategoryCantroller.deleteRecord
);

// update
router.put(
    "/update/:subCategoryId",
    subCategoryCantroller.updateDetiles
);

module.exports = router;
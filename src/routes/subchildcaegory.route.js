const express = require("express");
const { SubchildCategoryValidation } = require("../validations");
const { SubchildCategoryCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create SubchildCategory
router.post(
    "/create-SubchildCategory",
    validate(SubchildCategoryValidation.createSubchildCategory),
    SubchildCategoryCantroller.createSubchildCategory
);

// // get SubchildCategory
router.get(
    "/list",
    SubchildCategoryCantroller.SubchildCategoryList
);

 // dalete
router.delete(
    "/delete-SubchildCategory/:SubchildCategoryId",
    SubchildCategoryCantroller.deleteRecord
);

// update
router.put(
    "/update/:SubchildCategoryId",
    SubchildCategoryCantroller.updateDetiles
);

module.exports = router;
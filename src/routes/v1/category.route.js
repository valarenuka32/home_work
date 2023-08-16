const express=require("express");
const { categoryValidaton }=require("../../validations");
const { categoryControler }=require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
      "/create-category",
      validate(categoryValidaton.createcategory),
      categoryControler.createcategory
);

module.exports=router;
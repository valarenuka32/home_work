const express = require("express");
const { productValidaton } = require("../../validations");
const { productControler } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create product
router.post(
    "/create-product",
    validate(productValidaton.createproduct),
    productControler.createproduct
);

// get product list
router.get(
    "/product-list",
    // validate(productValidaton.getproductList),
    productControler.getproductList
);

//deleteRecord
router.delete(
    "/delete-product/:productId",
    // validate(productValidaton.deleteRecord),
    productControler.deleteRecord
);

module.exports = router;
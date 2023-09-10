const express = require("express");
const { productValidation }=require("../validations");
const { productCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create product
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productCantroller.createProduct
);

// // get product
router.get(
    "/product-list",
    productCantroller.productList
);

// // dalete
router.delete(
    "/delete-product/:productId",
    productCantroller.deleteRecord
);

// update
router.put(
    "/update/:productId",
    productCantroller.updateDetiles
);

module.exports = router;
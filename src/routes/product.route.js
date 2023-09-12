const express = require("express");
const { upload } = require("../middlewares/upload");
const { productValidation } = require("../validations");
const { productCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create product
router.post(
    "/create-product",
    upload.single("product_image"),
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
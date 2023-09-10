const express = require("express");
const { cartValidation } = require("../validations");
const { cartCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create cart
router.post(
    "/create-cart",
    validate(cartValidation.createcart),
    cartCantroller.createcart
);

// // get cart
router.get(
    "/list",
    cartCantroller.cartList
);

 // dalete
router.delete(
    "/delete-cart/:cartId",
    cartCantroller.deleteRecord
);

// update
router.put(
    "/update/:cartId",
    cartCantroller.updateDetiles
);

module.exports = router;
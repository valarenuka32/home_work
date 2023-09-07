const express = require("express");
const { cartValidation } = require("../validations");
const { cartCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create user
router.post(
    "/create-cart",
    validate(cartValidation.createcart),
    cartCantroller.createcart
);

// // get user
// router.get(
//     "/list",
//     cartCantroller.cartList
// );

// // // dalete
// router.delete(
//     "/delete-user/:cartId",
//     cartCantroller.deleteRecord
// );

// // // update
// router.put(
//     "/update/:cartId",
//     cartCantroller.updateDetiles
// );

module.exports = router;
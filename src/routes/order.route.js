const express = require("express");
const { orderValidation } = require("../validations");
const { orderCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create order
router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderCantroller.createOrder
);

// // get order
router.get(
    "/list",
    orderCantroller.orderList
);

 // dalete
router.delete(
    "/delete-order/:orderId",
    orderCantroller.deleteRecord
);

// update
router.put(
    "/update/:orderId",
    orderCantroller.updateDetiles
);

module.exports = router;
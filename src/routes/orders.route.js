const express = require("express");
const { ordersValidation } = require("../validations");
const { ordersCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create orders
router.post(
    "/create-orders",
    validate(ordersValidation.createorders),
    ordersCantroller.createorders
);

// // get orders
router.get(
    "/list",
    ordersCantroller.ordersList
);

 // dalete
router.delete(
    "/delete-orders/:ordersId",
    ordersCantroller.deleteRecord
);

// update
router.put(
    "/update/:ordersId",
    ordersCantroller.updateDetiles
);

module.exports = router;
const express = require("express");
const { orderitemValidation } = require("../validations");
const { orderitemCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create order
router.post(
    "/create-orderitem",
    validate(orderitemValidation.createOrderitem),
    orderitemCantroller.createOrderitem
);

// // get order
router.get(
    "/list",
    orderitemCantroller.orderitemList
);

 // dalete
router.delete(
    "/delete-orderitem/:orderitemId",
    orderitemCantroller.deleteRecord
);

// update
router.put(
    "/update/:orderitemId",
    orderitemCantroller.updateDetiles
);

module.exports = router;
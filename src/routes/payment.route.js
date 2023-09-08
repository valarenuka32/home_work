const express = require("express");
const { paymentValidation } = require("../validations");
const { paymentCantroller } = require("../controllers");
const validate = require("../middlewares/validate");


const router = express.Router();

// create payment
router.post(
    "/create-payment",
    validate(paymentValidation.createPayment),
    paymentCantroller.createPayment
);

// get payment
router.get(
    "/list",
    paymentCantroller.paymentList
);

// dalete
router.delete(
    "/delete-payment/:paymentId",
    paymentCantroller.deleteRecord
);

// update
router.put(
    "/update/:paymentId",
    paymentCantroller.updateDetiles
);

module.exports = router;
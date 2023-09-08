const express = require("express");
const userRoutes = require("./user.route");
const cartRoutes = require("./cart.route");
const orderRoutes = require("./order.route");
const orderitemRoutes = require("./orderitem.route");
const paymentRoutes = require("./payment.route");


const router = express.Router();

router.use("/user", userRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);
router.use("/orderitem", orderitemRoutes);
router.use("/payment", paymentRoutes);


module.exports = router;
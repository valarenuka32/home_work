const express = require("express");
const userRoutes = require("./user.route");
const cartRoutes = require("./cart.route");
const orderRoutes = require("./order.route");


const router = express.Router();

router.use("/user", userRoutes);
router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);


module.exports = router;
const express = require("express");
const userRoutes = require("./user.route");
const productRoutes = require("./product.route");
const cartRoutes = require("./cart.route");



const router = express.Router();

router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);


module.exports = router;
const express = require("express");
const userRoutes = require("./user.route");
const productRoutes = require("./product.route");



const router = express.Router();

router.use("/user", userRoutes);
router.use("/product", productRoutes);


module.exports = router;
const express = require("express");
const userRoutes = require("./user.route");
const cartRoutes = require("./cart.route");


const router = express.Router();

router.use("/user", userRoutes);
router.use("/cart", cartRoutes);


module.exports = router;
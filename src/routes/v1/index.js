const express = require("express");
const categoryRoutes = require("./category.route");
const userRoutes = require("./user.route");
const hotelRoutes = require("./hotel.route");

const router = express.Router();

router.use("/category", categoryRoutes);
router.use("/user", userRoutes);
router.use("/hotel", hotelRoutes);

module.exports = router;
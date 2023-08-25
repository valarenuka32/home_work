const express = require("express");
const categoryRoutes = require("./category.route");
const userRoutes = require("./user.route");
const hotelRoutes = require("./hotel.route");
const busRoutes = require("./bus.route");
const schoolRoutes = require("./school.rotes");

const router = express.Router();

router.use("/category", categoryRoutes);
router.use("/user", userRoutes);
router.use("/hotel", hotelRoutes);
router.use("/bus", busRoutes);
router.use("/school", schoolRoutes);

module.exports = router;
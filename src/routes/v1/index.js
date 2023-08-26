const express = require("express");
const categoryRoutes = require("./category.route");
const userRoutes = require("./user.route");
const hotelRoutes = require("./hotel.route");
const busRoutes = require("./bus.route");
const schoolRoutes = require("./school.rotes");
const stationaryRoutes = require("./stationary.route");
const travelyRoutes = require("./travel.route");
const PharmacyRoutes = require("./Pharmacy.route");
const jewelleryRoutes = require("./jewellery.route");
const movieRoutes = require("./movie.route");
const musicRoutes = require("./music.route");
const groceryRoutes = require("./grocery.route");

const router = express.Router();

router.use("/category", categoryRoutes);
router.use("/user", userRoutes);
router.use("/hotel", hotelRoutes);
router.use("/bus", busRoutes);
router.use("/stationary", stationaryRoutes);
router.use("/school", schoolRoutes);
router.use("/travel", travelyRoutes);
router.use("/Pharmacy", PharmacyRoutes);
router.use("/jewellery", jewelleryRoutes);
router.use("/movie", movieRoutes);
router.use("/music", musicRoutes);
router.use("/grocery", groceryRoutes);

module.exports = router;
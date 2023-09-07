const express = require("express");
const userRoutes = require("./user.route")
const appliancesRoutes = require("./appliances.route")

const router = express.Router();

router.use("/user", userRoutes);
router.use("/appliances", appliancesRoutes);

module.exports = router;
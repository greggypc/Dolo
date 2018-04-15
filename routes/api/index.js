const router = require("express").Router();
const donationRoutes = require("./donations");

// Donation routes
router.use("/donations", donationRoutes);

module.exports = router;
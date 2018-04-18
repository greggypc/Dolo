const router = require("express").Router();
const donationRoutes = require("./donations");
const needRoutes = require("./needs");
// Donation routes
router.use("/donations", donationRoutes);
router.use("/needs", needRoutes);

module.exports = router;
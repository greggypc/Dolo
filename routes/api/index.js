const router = require("express").Router();
const donationRoutes = require("./donations");
const needRoutes = require("./needs");
const searchDonationsRoutes = require("./searchDonations");
const searchNeedsRoutes = require("./searchNeeds");

// routes
router.use("/donations", donationRoutes);
router.use("/needs", needRoutes);
router.use("/searchDonations", searchDonationsRoutes);
router.use("/searchNeeds", searchNeedsRoutes);

module.exports = router;
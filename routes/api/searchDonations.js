const router = require("express").Router();
const searchDonationsController = require("../../controllers/searchDonationsController");

// Matches with "/api/donations/"
router
  .route("/")
  .get(searchDonationsController.findAll);


module.exports = router;
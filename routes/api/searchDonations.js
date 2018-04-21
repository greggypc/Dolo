const router = require("express").Router();
const searchDonationsController = require("../../controllers/searchDonationsController");

// Matches with "/api/searchDonations/"
router
  .route("/item_categoryID/:item_categoryID")
  .get(searchDonationsController.findAll);


module.exports = router;
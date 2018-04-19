const router = require("express").Router();
const searchNeedsController = require("../../controllers/searchNeedsController");

// Matches with "/api/donations/"
router
  .route("/")
  .get(searchNeedsController.findAll);


module.exports = router;
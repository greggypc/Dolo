const router = require("express").Router();
const donationsController = require("../../controllers/donationsController");

// Matches with "/api/donations/"
router
  .route("/uid/:uid")
  .get(donationsController.findAll) 
  .post(donationsController.create); 

// Matches with "/api/donations/:id"
 router
   .route("/id/:id")
   .get(donationsController.findOne)
   .put(donationsController.update)
   .delete(donationsController.destroy);


module.exports = router;
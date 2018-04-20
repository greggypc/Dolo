const router = require("express").Router();
const donationsController = require("../../controllers/donationsController");

// Matches with "/api/donations/"
router
  .route("/uid/:uid")
  .get(donationsController.findAll) 

router
  .route("/")
  .post(donationsController.create)
  .put(donationsController.update); 

// Matches with "/api/donations/:id"
 router
   .route("/id/:id")
   .get(donationsController.findOne)
   .delete(donationsController.destroy);


module.exports = router;
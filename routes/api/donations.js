const router = require("express").Router();
const donationsController = require("../../controllers/donationsController");

// Matches with "/api/donations/"
router
  .route("/:uid")
  .get(donationsController.findAll) 
  .post(donationsController.create); 

// Matches with "/api/donations/:id"
 router
   .route("/:id")
   .get(donationsController.findOne)
   .put(donationsController.update)
   .delete(donationsController.destroy);

// Matches with "/api/donations/id/:id"
// 'put' for updating a donation
// router
//   .route("id/:id")
//   .put(donationsController.update)

module.exports = router;
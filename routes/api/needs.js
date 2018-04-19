const router = require("express").Router();
const needsController = require("../../controllers/needsController");

// Matches with "/api/needs/"
router
  .route("/")
  .get(needsController.findAll)
  .post(needsController.create);

// Matches with "/api/needs/:id"
 router
   .route("/:id")
   .get(needsController.findOne)
   .put(needsController.update)
   .delete(needsController.destroy);

// Matches with "/api/needs/id/:id"
// 'put' for updating a need
// router
//   .route("id/:id")
//   .put(needsController.update)

module.exports = router;
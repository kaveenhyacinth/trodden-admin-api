const router = require("express").Router();
const {
  getAllTripsController,
  deleteTripByIdController,
} = require("../controllers/trips.controller");

router.get("/all", getAllTripsController);
router.delete("/:id", deleteTripByIdController);

module.exports = router;

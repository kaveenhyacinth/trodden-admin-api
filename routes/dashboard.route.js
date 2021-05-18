const router = require("express").Router();
const {
  getTotalsController,
  deleteCaravanByIdController,
} = require("../controllers/dashboard.controller");

router.get("/all", getTotalsController);
router.delete("/:id", deleteCaravanByIdController);

module.exports = router;

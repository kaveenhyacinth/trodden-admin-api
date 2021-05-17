const router = require("express").Router();
const {
  getAllCaravansController,
  deleteCaravanByIdController,
} = require("../controllers/caravans.controller");

router.get("/all", getAllCaravansController);
router.delete("/:id", deleteCaravanByIdController);

module.exports = router;

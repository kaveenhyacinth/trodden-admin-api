const router = require("express").Router();
const {
  getAllBlazesController,
  deleteBlazeByIdController,
} = require("../controllers/blazes.controller");

router.get("/all", getAllBlazesController);
router.delete("/:id", deleteBlazeByIdController);

module.exports = router;
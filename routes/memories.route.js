const router = require("express").Router();
const {
  getAllMemoriesController,
  deleteMemoryByIdController,
} = require("../controllers/memories.controller");

router.get("/all", getAllMemoriesController);
router.delete("/:id", deleteMemoryByIdController);

module.exports = router;

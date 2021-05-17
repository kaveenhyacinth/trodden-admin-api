const Memory = require("../models/Memory");

exports.getAllMemoriesController = async (req, res) => {
  try {
    const result = await Memory.find();
    if (!result)
      return res
        .status(400)
        .json({ result: null, success: false, msg: "Couldn't find Memories" });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while getting all Memories",
    });
  }
};

exports.deleteMemoryByIdController = async (req, res) => {
  try {
    const result = await Memory.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(400).json({
        result: null,
        success: false,
        msg: "Couldn't delete the Memory",
      });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while deleting the Memory",
    });
  }
};

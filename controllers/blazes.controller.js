const Blaze = require("../models/Blaze");

exports.getAllBlazesController = async (req, res) => {
  try {
    const result = await Blaze.find();
    if (!result)
      return res
        .status(400)
        .json({ result: null, success: false, msg: "Couldn't find Blazes" });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while getting all Blazes",
    });
  }
};

exports.deleteBlazeByIdController = async (req, res) => {
  try {
    const result = await Blaze.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(400).json({
        result: null,
        success: false,
        msg: "Couldn't delete the Blaze",
      });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while deleting the Blaze",
    });
  }
};

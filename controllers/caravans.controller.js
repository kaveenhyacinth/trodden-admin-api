const Caravan = require("../models/Caravan");

exports.getAllCaravansController = async (req, res) => {
  try {
    const result = await Caravan.find();
    if (!result)
      return res
        .status(400)
        .json({ result: null, success: false, msg: "Couldn't find Caravans" });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while getting all Caravans",
    });
  }
};

exports.deleteCaravanByIdController = async (req, res) => {
  try {
    const result = await Caravan.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(400).json({
        result: null,
        success: false,
        msg: "Couldn't delete the Caravan",
      });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while deleting the Caravan",
    });
  }
};

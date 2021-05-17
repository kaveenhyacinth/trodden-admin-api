const Nomad = require("../models/Nomad");

exports.getAllNomadsController = async (req, res) => {
  try {
    const result = await Nomad.find();
    if (!result)
      return res
        .status(400)
        .json({ result: null, success: false, msg: "Couldn't find Nomads" });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while getting all Nomads",
    });
  }
};

exports.deleteNomadByIdController = async (req, res) => {
  try {
    const result = await Nomad.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(400).json({
        result: null,
        success: false,
        msg: "Couldn't delete the Nomad",
      });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while deleting the Nomad",
    });
  }
};

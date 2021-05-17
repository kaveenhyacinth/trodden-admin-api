const Trip = require("../models/Trip");

exports.getAllTripsController = async (req, res) => {
  try {
    const result = await Trip.find();
    if (!result)
      return res
        .status(400)
        .json({ result: null, success: false, msg: "Couldn't find Trips" });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while getting all Trips",
    });
  }
};

exports.deleteTripByIdController = async (req, res) => {
  try {
    const result = await Trip.findByIdAndDelete(req.params.id);
    if (!result)
      return res.status(400).json({
        result: null,
        success: false,
        msg: "Couldn't delete the Trip",
      });
    return res.status(200).json({ result, success: true, msg: "" });
  } catch (error) {
    res.status(500).json({
      result: error,
      success: false,
      msg: "Internal Server Error while deleting the Trip",
    });
  }
};

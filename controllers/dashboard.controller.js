const Caravan = require("../models/Caravan");
const Nomad = require("../models/Nomad");
const Destination = require("../models/Destination");
const Trip = require("../models/Trip");

exports.getTotalsController = async (req, res) => {
  try {
    const caravanCount = await Caravan.countDocuments();
    const nomadCount = await Nomad.countDocuments();
    const destinationCount = await Destination.countDocuments();
    const tripCount = await Trip.countDocuments();

    const result = {
      caravanCount,
      nomadCount,
      destinationCount,
      tripCount,
    };

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

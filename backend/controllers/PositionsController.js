const { PositionModel } = require("../model/PositionModel");

const getAllPositions = async (req, res) => {
  try {
    const allPositions = await PositionModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error fetching positions",
    });
  }
};

module.exports = {
  getAllPositions,
};
const { HoldingsModel } = require("../model/HoldingsModel");

const getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error fetching holdings",
    });
  }
};

module.exports = {
  getAllHoldings,
};
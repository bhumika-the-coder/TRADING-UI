const express = require("express");

const {
  getAllHoldings,
} = require("../controllers/HoldingsController");

const router = express.Router();

router.get("/allHoldings", getAllHoldings);

module.exports = router;
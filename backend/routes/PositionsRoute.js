const express = require("express");

const {
  getAllPositions,
} = require("../controllers/PositionsController");

const router = express.Router();

router.get("/allPositions", getAllPositions);

module.exports = router;
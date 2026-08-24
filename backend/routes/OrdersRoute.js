const express = require("express");

const {
  createOrder,
  getAllOrders,
} = require("../controllers/OrdersController");

const router = express.Router();

router.post("/newOrder", createOrder);

router.get("/allOrders", getAllOrders);

module.exports = router;
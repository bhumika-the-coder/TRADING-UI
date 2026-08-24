const { OrdersModel } = require("../model/OrdersModel");

const createOrder = async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order Saved!",
      order: newOrder,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Error saving order",
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});

    res.json(allOrders);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Error fetching orders",
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
};
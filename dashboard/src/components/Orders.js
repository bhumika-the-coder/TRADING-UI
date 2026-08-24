import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./orders.css";
const Orders = () => {
  const [allOrders,setAllOrders] = useState([]);
    useEffect(() => {
  axios.get("http://localhost:3002/allOrders")
    .then((res) => {
      setAllOrders(res.data);
    });
}, []);
  return (
    <>
    {allOrders.length === 0 ? (
  <div className="no-orders">
    <p>You haven't placed any orders today</p>
    <Link to="/" className="btn">
      Get started
    </Link>
  </div>
) : (
  <div className="orders">
  {allOrders.map((order, index) => (
    <div className="order" key={index}>
      <div className="order-info">
        <h3>{order.name}</h3>

        <p>Quantity: {order.qty}</p>
        <p>Price: ₹{order.price}</p>
      </div>

      <div className="order-type">
        {order.mode}
      </div>
    </div>
  ))}
</div>
)}
</>
  );
};

export default Orders;
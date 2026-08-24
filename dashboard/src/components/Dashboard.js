import  { useEffect, useState } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";

import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://zerodha-ui-clone.onrender.com/me", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("USER:", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log("USER ERROR:", err);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Summary user={user} />}
          />

          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
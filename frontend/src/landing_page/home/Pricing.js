import React from "react";
function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 p-3 p-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing
            <i
              class="fa-solid fa-arrow-right-long"
              style={{ color: " rgb(65, 141, 219)" }}
            ></i>
          </a>
        </div>
        <div className="col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <div className="row text-center mb-5 ">
            <div className="col-12 col-sm-6 border p-4 p-md-5">
              <h1 className="mb-4">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-12 col-sm-6 border p-4 p-md-5">
              <h1 className="mb-4">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

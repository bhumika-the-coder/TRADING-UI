import React from "react";
function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5">
          <img src="media/images/largestBroker.svg" alt="largest-broker" />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 mt-0 mt-md-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4 mb-md-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti hic minima quaerat aperiam recusandae quia. Distinctio id numquam enim porro ut fugiat corporis nobis reiciendis sint excepturi, eligendi quasi.
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{width:"95%"}} alt="press Logo" />
      </div>
    </div>
    </div>
  );
}

export default Awards;

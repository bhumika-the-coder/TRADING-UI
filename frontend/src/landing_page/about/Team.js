import React from "react";

function Team() {
  return (
    <div className="container ">
      <div className="row p-3 mt-5 border-top">
        <h2 className="text-center ">People</h2>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media\images\nithinKamath.jpg"
            alt="Nitin Kamnath"
            style={{ borderRadius: "50%", width: "20rem", height: "20rem" ,aspectRatio:"1 / 1",objectFit:"cover"}}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-12 col-md-6 p-3 ">
          <p className="fs-6">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />
          <p className="fs-6">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              HomePage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

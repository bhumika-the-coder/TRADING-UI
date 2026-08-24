function Hero() {
  return (
    <div className="container">

      
      <div className="row text-center mt-4 mt-md-5 mb-4 mb-md-5 p-3 p-md-5">
        <h2>Charges</h2>
        <h4 className="fs-5 text-muted">
          List of all charges and taxes
        </h4>
      </div>

      
      <div className="row text-center">

        <div className="col-12 col-md-4 mb-5">
          <img
            src="media/images/pricing0.svg"
            alt="Free equity delivery"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />

          <h2 className="fs-4">Free equity delivery</h2>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free —
            ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />

          <h2 className="fs-4">Intraday and F&O trades</h2>

          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
            Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 mb-5">
          <img
            src="media/images/pricing0.svg"
            alt="Free direct MF"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
          />

          <h2 className="fs-4">Free direct MF</h2>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;
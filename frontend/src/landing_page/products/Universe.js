function Universe() {
  const products = [
    {
      image: "media/images/zerodhaFundhouse.png",
      alt: "Zerodha Fundhouse",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      image: "media/images/sensibullLogo.svg",
      alt: "Sensibull",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      image: "media/images/tijori.svg",
      alt: "Tijori",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      image: "media/images/StreakLogo.png",
      alt: "Streak",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      image: "media/images/smallcaseLogo.png",
      alt: "Smallcase",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      image: "media/images/dittoLogo.png",
      alt: "Ditto",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container mt-5">

      {/* Technology Stack */}
      <div className="mt-5 mb-5 text-center text-muted">
        <h4 className="fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech blog.
          </a>
        </h4>
      </div>

      {/* Heading */}
      <div className="row text-center my-5">
        <h2>The Zerodha Universe</h2>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Products */}
      <div className="row text-center mt-5">
        {products.map((product, index) => (
          <div
            className="col-12 col-md-4 mb-5"
            key={index}
          >
            <img
              src={product.image}
              alt={product.alt}
              style={{
                width: "10rem",
                height: "3rem",
                objectFit: "contain",
              }}
            />

            <p className="mt-3">
              {product.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Universe;
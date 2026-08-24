function Universe() {
  const products = [
    {
      title: "Sample 1",
      image: "media/images/logo.png",
      alt: "TradeUI logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo vel erat facilisis tincidunt, sed posuere lorem volutpat.",
    },
    {
      title: "Sample 2",
      image: "media/images/logo.png",
      alt: "TradeUI logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo, libero at tincidunt cursus, justo neque volutpat lacus.",
    },
    {
      title: "Sample 3",
      image: "media/images/logo.png",
      alt: "TradeUI logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae massa vel augue tincidunt consequat. Donec euismod lacus.",
    },
    {
      title: "Sample 4",
      image: "media/images/logo.png",
      alt: "TradeUI logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Mauris tincidunt neque vitae consequat interdum.",
    },
    {
      title: "Sample 5",
      image: "media/images/logo.png",
      alt: "TradeUI logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.",
    },
    {
      title: "Sample 6",
      image: "media/images/logo.png",
      alt: "TradeUI logo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae massa vel augue tincidunt consequat, facilisis lorem volutpat.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center my-5">
        <h2>The TRADE-UI Universe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore
          various tools and features through a simple interface.
        </p>
      </div>

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

            <h5 className="mt-3">{product.title}</h5>

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
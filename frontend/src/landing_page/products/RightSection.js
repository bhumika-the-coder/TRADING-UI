function RightSection({
    imageURL,
  productName,
  productDescription,
  learnMore}
) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5 order-2 order-md-1">
          <h1 className="fs-2">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6 p-0 text-center order-1 order-md-2">
          <img src={imageURL} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

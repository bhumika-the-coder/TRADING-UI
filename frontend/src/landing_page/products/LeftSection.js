function LeftSection({
  imageURL,
  productName,
  productDescription
}) {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 align-items-center">

        <div className="col-12 col-md-8 p-2 p-md-3 text-center">
          <img
            src={imageURL}
            alt="product"
            className="img-fluid"
            style={{
              maxWidth: "40rem",
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Content */}
        <div className="col-12 col-md-4 p-3 p-md-5">
          <h1 className="fs-3 mb-4 mt-3">{productName}</h1>

          <p>{productDescription}</p>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
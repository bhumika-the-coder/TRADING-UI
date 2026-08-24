/* import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return <div className="container">
    <div className="row p-3 p-md-5 align-items-center">
        <div className="col-8 p-3">
            <img src={imageURL} alt="image"  style={{maxWidth: "40rem",
              width: "100%",
              height: "auto",}} />
        </div>
        <div className="col-12 col-md-4 p-3 p-md-5">
            <h1 className="fs-3 mb-4 mt-3">{productName}</h1>
            <p>{productDescription}</p>
            <div className="mb-3">
            <h3 className="fs-5  d-inline"><a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a></h3>
            <h3 className="fs-5  d-inline"><a href={learnMore} style={{marginLeft:"10px",textDecoration:"none"}}>Learn More →</a></h3>
            </div>
            <div className="mt-3">
            <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="playstore" /></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="media\images\appstoreBadge.svg" alt="appStore" /></a>
            </div>
        </div>
    </div>
  </div>
}

export default LeftSection;
 */

import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 align-items-center">

        {/* Image */}
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

          <div className="mb-3">
            <a
              href={tryDemo}
              className="fs-5 me-3"
              style={{ textDecoration: "none" }}
            >
              Try Demo →
            </a>

            <a
              href={learnMore}
              className="fs-5"
              style={{ textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>

          <div className="mt-3 d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ maxWidth: "150px" }}
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
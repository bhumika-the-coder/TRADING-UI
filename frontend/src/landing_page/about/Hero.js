import React from "react";

function Hero() {
  return (
    <div className="container mb-5 pb-5">

      {/* Heading */}
      <div className="row justify-content-center py-5">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h2 className="fs-4 lh-base">
            We pioneered the discount broking model in India.
            <br className="d-none d-md-block" />
            Now, we are breaking ground with our technology.
          </h2>
        </div>
      </div>

      <hr className="my-4" />

      {/* Content */}
      <div className="row justify-content-center g-4 g-md-5 mt-4">

        <div className="col-12 col-md-5">
          <div className="lh-lg">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum, fuga rem? Totam et in veniam illum eligendi.
              Deserunt eaque modi quisquam maiores dignissimos provident
              incidunt, expedita, nulla deleniti vel soluta!
            </p>

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Unde, esse! Ducimus ab ullam deserunt quaerat saepe cum a
              quisquam? Adipisci, sint laborum unde rem dolorem impedit
              deserunt veniam voluptas repellendus.
            </p>

            <p className="mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quas optio, velit voluptates placeat, hic harum numquam
              nemo temporibus suscipit ratione minima voluptatem minus
              nihil debitis itaque, ab cum odit! Quisquam?
            </p>
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className="lh-lg">
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iste impedit repellat tempore voluptatibus quod. Earum quod
              sapiente aperiam vitae molestiae dolorum tempora omnis corporis?
              Facere asperiores id recusandae veritatis magni.
            </p>

            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, veritatis? Ipsum nulla voluptatibus atque quasi
              voluptas, reiciendis quibusdam. Nobis nam debitis libero?
              Perferendis, neque inventore sunt magnam iure nihil nobis.
            </p>

            <p className="mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur asperiores maiores assumenda voluptas? Repudiandae
              eius unde praesentium exercitationem, ad, tenetur incidunt
              delectus eaque, non ex numquam est aliquid rem dolorum.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
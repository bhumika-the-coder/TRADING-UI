import React from "react";
function Hero() {
  return (
    <div className="container-fluid border mb-5 p-5" style={{backgroundColor:"#F6F6F6"}}>
      <div className="row mb-4">
        <div className="col-9">
          <h1 className="fs-1">Support Portal</h1>
        </div>
        <div className="col-3">
          <button className="btn btn-primary btn-lg">My Ticket</button>
        </div>
      </div>
      <div className="row">
        <form class="d-flex" role="search">
          <input
            className="form-control me-2 text-mute pt-3 pb-3"
            type="search"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </form>
      </div>
    </div>
  );
}

export default Hero;

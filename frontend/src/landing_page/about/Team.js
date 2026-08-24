function Team() {
  return (
    <div className="container ">
      <div className="row p-3 mt-5 border-top">
        <h2 className="text-center ">People</h2>
      </div>
      <div className="row mt-5 align-items-center">
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media\images\owner.png"
            alt="owner"
            style={{ borderRadius: "50%", width: "20rem", height: "20rem" ,aspectRatio:"1 / 1",objectFit:"cover"}}
          />
          <h4 className="mt-4">Founder</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-12 col-md-6">
          <p className="fs-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quaerat corrupti, reiciendis commodi sint incidunt iusto, a qui ipsam tempore iste quod autem! Cupiditate aliquid esse quisquam optio maxime quidem!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque, minus iste natus facilis tempora laboriosam! Porro cupiditate cum tempore provident aut facilis, hic modi sunt veniam asperiores quisquam nihil
          </p>
          <br />
          <p className="fs-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita doloremque tenetur repellendus molestiae neque asperiores adipisci praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quam exercitationem sapiente suscipit officiis harum accusantium inventore perferendis voluptatibus nobis. Qui vitae veniam ab ex quas voluptates ea similique sit?
          </p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;

function Stats() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5">
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1 className="fs-1 mb-5">Trust with confidence</h1>
          <h2 className="fs-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-3 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-3 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-3 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5 text-center order-1 order-md-2 mt-5 mb-5">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            style={{ width: "95%" }}
          />
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-3">
            <a href="" style={{textDecoration:"none"}} className="mx-5">Explore Our Products <i class="fa-solid fa-arrow-right-long" style={{color:" rgb(65, 141, 219)"}}></i></a>
            <a href="" style={{textDecoration:"none"}} >Try Kite Demo <i class="fa-solid fa-arrow-right-long" style={{color:" rgb(65, 141, 219)"}}></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

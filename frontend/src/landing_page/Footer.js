function Footer() {
  return (
    <footer className="bg-light">
      <div className="container border-top pt-5 mt-5">

        <div className="row g-5">

          {/* Logo & Social */}
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src="media/images/logo.png"
              className="img-fluid w-50 mb-3"
              alt="TRADE-UI logo"
            />

            <p className="text-muted mb-4">
              &copy; 2010 - 2024, Not TRADE-UI Broking Ltd.
              All rights reserved.
            </p>

            <div className="d-flex gap-2 text-muted mb-4">
              <i className="fa-brands fa-x-twitter fs-5"></i>
              <i className="fa-brands fa-square-facebook fs-5"></i>
              <i className="fa-brands fa-square-instagram fs-5"></i>
              <i className="fa-brands fa-square-linkedin fs-5"></i>
            </div>

            <hr />

            <div className="d-flex gap-2 text-muted mb-4">
              <i className="fa-brands fa-youtube fs-5"></i>
              <i className="fa-brands fa-whatsapp fs-5"></i>
              <i className="fa-brands fa-telegram fs-5"></i>
            </div>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="mb-4">Company</h6>

            <p className="text-muted mb-3">About</p>
            <p className="text-muted mb-3">Products</p>
            <p className="text-muted mb-3">Pricing</p>
            <p className="text-muted mb-3">Referral programme</p>
            <p className="text-muted mb-3">Careers</p>
            <p className="text-muted mb-3">TRADE-UI.tech</p>
            <p className="text-muted mb-3">Press & media</p>
            <p className="text-muted mb-3">TRADE-UI cares (CSR)</p>
          </div>

          {/* Support */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="mb-4">Support</h6>

            <p className="text-muted mb-3">Contact</p>
            <p className="text-muted mb-3">Support portal</p>
            <p className="text-muted mb-3">Z-Connect blog</p>
            <p className="text-muted mb-3">List of charges</p>
            <p className="text-muted mb-3">Downloads & resources</p>
          </div>

          {/* Account */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="mb-4">Account</h6>

            <p className="text-muted mb-3">Open an account</p>
            <p className="text-muted mb-3">Fund transfer</p>
            <p className="text-muted mb-3">60 day challenge</p>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-5 pt-4 text-muted small">

          <p>
            TRADE-UI Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through TRADE-UI Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through TRADE-UI Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: TRADE-UI Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@TRADE-UI.com, for DP related to dp@TRADE-UI.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name, PAN,
            Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
            Speedy redressal of the grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive information
            of your transactions directly from Exchange on your mobile/email at
            the end of the day. Issued in the interest of investors. KYC is one
            time exercise while dealing in securities markets - once KYC is done
            through a SEBI registered intermediary, you need not undergo the same
            process again when you approach another intermediary.
          </p>

        </div>

        {/* Bottom Links */}
        <ul className="list-unstyled d-flex flex-wrap gap-2 gap-md-4 mt-4 mb-5">
          <li className="text-muted">NSE</li>
          <li className="text-muted">BSE</li>
          <li className="text-muted">MCX</li>
          <li className="text-muted">MSEI</li>
          <li className="text-muted">Terms & conditions</li>
          <li className="text-muted">Privacy policy</li>
          <li className="text-muted">Disclosure</li>
          <li className="text-muted">For investor's attention</li>
          <li className="text-muted">Investor charter</li>
        </ul>

      </div>
    </footer>
  );
}

export default Footer;
import  { useState } from "react";

function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);
  return (
    <div className="container-fluid px-5" >
      <div className="row gx-4">
        <div className="col-lg-8 col-sm-7">
          <div
            className="row border mb-3"
            onClick={() =>
              setOpenSection(
                openSection === "accountopen" ? null : "accountopen",
              )
            }
          >
            <div
              className="col-auto p-3 text-center border-bottom"
              style={{ backgroundColor: "#F7FBFE" }}
            >
              <i
                class="fa-solid fa-plus"
                style={{ color: "rgb(65, 141, 219)", fontSize: "1.5rem" }}
              ></i>
            </div>
            <div className="col p-3 border-bottom ">
              <h3 className="fs-5">Account Opening </h3>
            </div>
            <div className="col-auto p-3 text-center border-bottom">
              <i
                class="fa-solid fa-angle-down"
                style={{ color: "rgb(65, 141, 219)" }}
              ></i>
            </div>
            {openSection === "accountopen" && (
              <div className="p-3 mb-3">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Resident individual
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Minor
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Non Resident Indian (NRI)
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Company, Patnership, HUF and LLP
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Glossary
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="row border mb-3"
            onClick={() =>
              setOpenSection(
                openSection === "Youraccount" ? null : "Youraccount",
              )
            }
          >
            <div
              className="col-auto p-3 text-center border-bottom"
              style={{ backgroundColor: "#F7FBFE" }}
            >
              <i
                class="fa-regular fa-user"
                style={{ color: "rgb(65, 141, 219)", fontSize: "1.5rem" }}
              ></i>
            </div>
            <div className="col p-3 border-bottom ">
              <h3 className="fs-5">Your Zerodha Account</h3>
            </div>
            <div className="col-auto p-3 text-center border-bottom">
              <i
                class="fa-solid fa-angle-down"
                style={{ color: "rgb(65, 141, 219)" }}
              ></i>
            </div>
            {openSection === "Youraccount" && (
              <div className="p-3 mb-3">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Your Profile
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Account modification
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Client MAster Report (CMR) and Depository Participant(DP)
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Nomination
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Transfer and conversion of securities
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="row border mb-3"
            onClick={() =>
              setOpenSection(openSection === "kite" ? null : "kite")
            }
          >
            <div
              className="col-auto p-3 text-center border-bottom"
              style={{ backgroundColor: "#F7FBFE" }}
            >
              <i
                class="fa-solid fa-circle-chevron-left"
                style={{ color: "rgb(65, 141, 219)", fontSize: "1.5rem" }}
              ></i>
            </div>
            <div className="col p-3 border-bottom ">
              <h3 className="fs-5">Kite </h3>
            </div>
            <div className="col-auto p-3 text-center border-bottom">
              <i
                class="fa-solid fa-angle-down"
                style={{ color: "rgb(65, 141, 219)" }}
              ></i>
            </div>
            {openSection === "kite" && (
              <div className="p-3 mb-3">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      IPO
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Trading FAQs
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Margin Trading Facility (MTF) and Margins
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Charts and Orders
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Alerts and Nudges
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="row border mb-3"
            onClick={() =>
              setOpenSection(openSection === "funds" ? null : "funds")
            }
          >
            <div
              className="col-auto p-3 text-center border-bottom"
              style={{ backgroundColor: "#F7FBFE" }}
            >
              <i
                class="fa-solid fa-indian-rupee-sign"
                style={{ color: "rgb(65, 141, 219)", fontSize: "1.5rem" }}
              ></i>
            </div>
            <div className="col p-3 border-bottom ">
              <h3 className="fs-5">Funds </h3>
            </div>
            <div className="col-auto p-3 text-center border-bottom">
              <i
                class="fa-solid fa-angle-down"
                style={{ color: "rgb(65, 141, 219)" }}
              ></i>
            </div>
            {openSection === "funds" && (
              <div className="p-3 mb-3">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Add Money
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Withdraw Money
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Add bank accounts
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      eMandates
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="row border mb-3"
            onClick={() =>
              setOpenSection(openSection === "console" ? null : "console")
            }
          >
            <div
              className="col-auto p-3 text-center border-bottom"
              style={{ backgroundColor: "#F7FBFE" }}
            >
              <i
                class="fa-solid fa-circle-notch"
                style={{ color: "rgb(65, 141, 219)", fontSize: "1.5rem" }}
              ></i>
            </div>
            <div className="col p-3 border-bottom ">
              <h3 className="fs-5">Console </h3>
            </div>
            <div className="col-auto p-3 text-center border-bottom">
              <i
                class="fa-solid fa-angle-down"
                style={{ color: "rgb(65, 141, 219)" }}
              ></i>
            </div>
            {openSection === "console" && (
              <div className="p-3 mb-3">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Portfolio
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Fund Statements
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Reports
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Profile
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Segments
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="row border mb-3"
            onClick={() =>
              setOpenSection(openSection === "coin" ? null : "coin")
            }
          >
            <div
              className="col-auto p-3 text-center border-bottom"
              style={{ backgroundColor: "#F7FBFE" }}
            >
              <i
                class="fa-solid fa-coins"
                style={{ color: "rgb(65, 141, 219)", fontSize: "1.5rem" }}
              ></i>
            </div>
            <div className="col p-3 border-bottom ">
              <h3 className="fs-5">Coin </h3>
            </div>
            <div className="col-auto p-3 text-center border-bottom">
              <i
                class="fa-solid fa-angle-down"
                style={{ color: "rgb(65, 141, 219)" }}
              ></i>
            </div>
            {openSection === "coin" && (
              <div className="p-3 mb-3">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Mutual Funds
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      National Pension Scheme (NPS)
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Fixed Deposit (FD)
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      Features on Coin
                    </a>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <a href="#" style={{ textDecoration: "none" }}>
                      {" "}
                      General
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-1"></div>
        {/* side links */}

        <div className="col-lg-3 col-sm-4">
          <div
            className="p-4"
            style={{
              backgroundColor: "#FFF4E5",
              borderLeft: "4px solid orange",
            }}
          >
            <ul className="mb-0">
              <li>Scheduled maintenance downtime for Coin</li>
              <li>Surveillance measure on scrips - June 2026</li>
            </ul>
          </div>
          <div className="pr-4 mt-5 ml-4">
            <h1 className="fs-5 p-3 mb-0" style={{backgroundColor:"#F6F6F6"}}>Quick links</h1>
            <ul className="list-group list-group-flush">
              <li class="list-group-item border  p-3 fs-6">
                <a href="#" class="text-decoration-none">
                  1. Track account opening
                </a>
              </li>
              <li class="list-group-item border p-3 fs-6">
                <a href="#" class="text-decoration-none">
                    2.Track segment activation
                </a>
            </li>
            <li class="list-group-item border p-3 fs-6">
                <a href="#" class="text-decoration-none">
                    3. Intraday margins
                </a>
            </li>
            <li class="list-group-item border p-3 fs-6">
                <a href="#" class="text-decoration-none">
                    4.Kite user manual
                </a>
            </li>
            <li class="list-group-item border p-3 fs-6">
                <a href="#" class="text-decoration-none">
                    5. Learn hot to create a ticket
                </a>
            </li>

            </ul>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
}

export default CreateTicket;

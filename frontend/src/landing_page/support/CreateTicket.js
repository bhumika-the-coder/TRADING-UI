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
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Resident individual
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Minor
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Non Resident Indian (NRI)
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Company, Patnership, HUF and LLP
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Glossary
                    </p>
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
              <h3 className="fs-5">Your TRADE-UI Account</h3>
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
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Your Profile
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Account modification
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Client MAster Report (CMR) and Depository Participant(DP)
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Nomination
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Transfer and conversion of securities
                    </p>
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
              <h3 className="fs-5">Kitty </h3>
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
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      IPO
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Trading FAQs
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Margin Trading Facility (MTF) and Margins
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Charts and Orders
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Alerts and Nudges
                    </p>
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
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Add Money
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Withdraw Money
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Add bank accounts
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      eMandates
                    </p>
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
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Portfolio
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Fund Statements
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Reports
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Profile
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Segments
                    </p>
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
              <h3 className="fs-5">Coil </h3>
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
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Mutual Funds
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      National Pension Scheme (NPS)
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Fixed Deposit (FD)
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      Features on Coil
                    </p>
                  </li>
                  <li style={{ paddingTop: ".9rem" }}>
                    <p style={{ textDecoration: "none" }}>
                      {" "}
                      General
                    </p>
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
              <li>Scheduled maintenance downtime for Coil</li>
              <li>Surveillance measure on scrips - June 2026</li>
            </ul>
          </div>
          <div className="pr-4 mt-5 ml-4">
            <h1 className="fs-5 p-3 mb-0" style={{backgroundColor:"#F6F6F6"}}>Quick links</h1>
            <ul className="list-group list-group-flush">
              <li class="list-group-item border  p-3 fs-6">
                <p class="text-decoration-none">
                  1. Track account opening
                </p>
              </li>
              <li class="list-group-item border p-3 fs-6">
                <p  class="text-decoration-none">
                    2.Track segment activation
                </p>
            </li>
            <li class="list-group-item border p-3 fs-6">
                <p class="text-decoration-none">
                    3. pintraday margins
                </p>
            </li>
            <li class="list-group-item border p-3 fs-6">
                <p class="text-decoration-none">
                    4.Kitty user manual
                </p>
            </li>
            <li class="list-group-item border p-3 fs-6">
                <p class="text-decoration-none">
                    5. Learn how to create a ticket
                </p>
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

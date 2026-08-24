import React from "react";
function Tables() {
  return (
    <div className="container mt-5 ">
      <div className="t-1">
        <h3 className="mb-4">Charges for account opening</h3>
        <div className="border">
        <table class="table table-borderless">
          <thead style={{backgroundColor:"#FBFBFB"}}>
            <tr className="border">
              <th scope="col">Type of account</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Individual account</td>
              <td >
                <span
                  style={{
                    backgroundColor: "#54ba32",
                    borderRadius: "2px",
                    color: "white",
                    padding: "3px 15px",
                    fontSize: "14px",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td style={{backgroundColor:"#FBFBFB"}}>Minor account</td>
              <td  style={{backgroundColor:"#FBFBFB"}}>
                <span 
                  style={{
                    backgroundColor: "#54ba32",
                    borderRadius: "2px",
                    color: "white",
                    padding: "3px 15px",
                    fontSize: "14px",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td>NRI account</td>
              <td>₹500</td>
            </tr>
            <tr>
              <td  style={{backgroundColor:"#FBFBFB"}}>HUF account</td>
              <td style={{backgroundColor:"#FBFBFB"}}>
                <span
                  style={{
                    backgroundColor: "#54ba32",
                    borderRadius: "2px",
                    color: "white",
                    padding: "3px 15px",
                    fontSize: "14px",
                  }}
                >
                  FREE
                </span>{" "}
                (online) / ₹ 500 (offline)
              </td>
            </tr>
            <tr>
              <td>Partnership, LLP, and Corporate accounts (offline only)</td>
              <td>₹500</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>



      <div className="t-2 mt-5">
        <h3 className="mb-4">Demat AMC (Annual Maintenance Charge)</h3>
        <div className="border">
        <table class="table table-borderless">
          <thead style={{backgroundColor:"#FBFBFB"}}>
            <tr className="border">
              <th scope="col">Value of holdings</th>
              <th scope="col">AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>IUp to ₹4 lakh</td>
              <td >
                <span
                  style={{
                    backgroundColor: "#54ba32",
                    borderRadius: "2px",
                    color: "white",
                    padding: "3px 15px",
                    fontSize: "14px",
                  }}
                >
                  FREE
                </span>
              </td>
            </tr>
            <tr>
              <td style={{backgroundColor:"#FBFBFB"}}>₹4 lakh - ₹10 lakh</td>
              <td  style={{backgroundColor:"#FBFBFB"}}>
                ₹ 100 per year, charged quarterly*
              </td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹ 300 per year, charged quarterly</td>
            </tr>
            
          </tbody>
        </table>
        </div>
      </div>


      <div className="t-2 mt-5">
        <h3 className="mb-4">Demat AMC (Annual Maintenance Charge)</h3>
        <div className="border">
        <table class="table table-borderless mb-5">
          <thead style={{backgroundColor:"#FBFBFB"}}>
            <tr className="border">
              <th scope="col">Service</th>
              <th scope="col">Billing Frequency</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td >
                Monthly / Quarterly / Annual
              </td>
              <td>Free: 0 | Pro: 249/699/2399</td>
            </tr>
            <tr>
              <td style={{backgroundColor:"#FBFBFB"}}>Smallcase</td>
              <td  style={{backgroundColor:"#FBFBFB"}}>
                Per transaction
              </td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
            
          </tbody>
        </table>
        </div>
      </div>
 
    </div>
  );
}

export default Tables;

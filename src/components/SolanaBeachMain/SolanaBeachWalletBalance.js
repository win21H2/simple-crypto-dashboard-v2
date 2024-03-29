import { Offline, Online } from "react-detect-offline";
import React, { useState, useEffect } from "react";
import "../style/solanabeach/solanabeach.css";
import axios from "axios";

const SolanaBeachWalletBalance = () => {
  const [sol, setSol] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      axios
        .get("https://cosimo-api.herokuapp.com/api/v1/satoshi_sol_balance?limit=1&filter_by=address&filter_by_value=CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu&api_key=aSmBpNbftAU0RZAkzXthU5lCIJHHNqGd")
        .then((res) => {
          setSol(res.data);
          setLoading(false);
        })
        .catch((err) => { console.log(err); });
    }, []);

    return (
      <>
        <div className="solanabeach-align">
          <Online>
            <h5 className="solanabeach-walletstyle centered">CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu</h5>
            <h3 className="centered">Solana Balance</h3>
            <div className="solanabeach-wallet">
              <table className="solanabeach-card">
                <thead>
                  <tr>
                    <th><h4 className="table-title">CURRENT BALANCE</h4></th>
                    <th><h4 className="table-title">TOTAL EARNED</h4></th>
                    <th><h4 className="table-title">ANNUALIZED</h4></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{display: "none"}}><td colSpan={3}>&nbsp;</td></tr>
                  {loading ? (
                    <div className="loader-container"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                  ) : (
                    <>
                      {sol.map((sol) => {
                        const new_totalearned = sol.balance.toLocaleString("en-US", {maximumFractionDigits: 2,});
                        const new_balance = sol.total_earned.toLocaleString("en-US", {maximumFractionDigits: 2,});
                        return (
                          <tr>
                            <td className="table-balanceformat"><p className="table-maincolor">{new_totalearned}</p></td>
                            <td className="table-balanceformat"><p className="table-maincolor">{new_balance}</p></td>
                            <td className="table-balanceformat"><p className="table-maincolor">{sol.apr}%</p></td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
                <tfoot><tr><td colSpan={3}>&nbsp;</td></tr></tfoot>
              </table>
            </div>
          </Online>
          <Offline><h1>Oh no! looks like you are offline!</h1></Offline>
        </div>
      </>
    ); 
}

export default SolanaBeachWalletBalance;
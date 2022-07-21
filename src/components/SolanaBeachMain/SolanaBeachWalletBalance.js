import "../style/solanabeach/solanabeach.css";
import React, { useState, useEffect } from "react";
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

    const filteredSOL = sol.filter((sol) => {return sol;});
    const filteredList = filteredSOL.length > 5 ? filteredSOL.slice(filteredSOL.length - 5) : filteredSOL;

    if (filteredList.length === 0) {
        return <h1 className="solanabeach-align solanabeach-notavailable">Loading data, please wait.....</h1>;
    };

    return (
      <>
        <div className="solanabeach-align">
          <h5 className="solanabeach-walletstyle centered">CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu</h5>
          <h3 className="centered">Balance</h3>
          <div className="solanabeach-wallet">
            <table className="solanabeach-card">
              <thead>
                <tr>
                  <th>
                    <h4 className="table-title">CURRENT BALANCE</h4>
                  </th>
                  <th>
                    <h4 className="table-title">TOTAL EARNED</h4>
                  </th>
                  <th>
                    <h4 className="table-title">ANNUALIZED</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ display: "none" }}>
                  <td colSpan={3}>&nbsp;</td>
                </tr>
                {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
                ) : (
                    <>
                    {filteredList.map((sol) => {
                    const new_totalearned = sol.balance.toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                    });
                    const new_balance = sol.total_earned.toLocaleString("en-US", {
                        maximumFractionDigits: 2,
                    });
                    return (
                        <tr>
                            <td className="table-balanceformat">
                                <p className="table-maincolor">{new_totalearned} SOL</p>
                            </td>
                            <td className="table-balanceformat">
                                <p className="table-maincolor"> {new_balance} SOL</p>
                            </td>
                            <td className="table-balanceformat">
                                <p className="table-maincolor"> {sol.apr}%</p>
                            </td>
                        </tr>
                    );
                    })}
                    </>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>&nbsp;</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </>
    ); 
}

export default SolanaBeachWalletBalance;
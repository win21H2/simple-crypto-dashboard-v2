import "../style/solanabeach/solanabeach.css";
import React, { useState, useEffect } from "react";

const SolanaBeachWalletBalance = ({ filteredList }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

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
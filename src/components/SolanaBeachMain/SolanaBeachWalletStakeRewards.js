import React, { useState, useEffect } from "react";
import "../style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ filteredList }) => {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
  
  // https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/

  return (
    <>
      <div className="solanabeach-align">
        <h3 align="center">Stake Rewards</h3>
        <div className="solanabeach-wallet">
          <table className="solanabeach-card" >
            <thead>
              <tr>
                <th>
                  <h4 className="table-title">EPOCH</h4>
                </th>
                <th>
                  <h4 className="table-title">AMOUNT</h4>
                </th>
                <th>
                  <h4 className="table-title">NEW BALANCE</h4>
                </th>
                <th>
                  <h4 className="table-title">APR</h4>
                </th>
              </tr>
            </thead>
            <tbody> 
              <tr style={{display: "none"}}>
                <td colSpan={4}>
                  &nbsp;
                </td>
              </tr>
              {loading ? (
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
                ) : (
                  <>
                    {filteredList.map((sol) => {
                    const newnew_balance = sol.new_balance.toLocaleString('en-US', {maximumFractionDigits: 2});
                    const newnew_amount = sol.amount.toLocaleString('en-US', {maximumFractionDigits: 2});
                    return (
                        <tr>
                          <td className="table-stakerewardsformat">
                            <p className="table-maincolor"> {sol.epoch}</p>
                          </td>
                          <td className="table-stakerewardsformat">
                            <p className="table-maincolor"> {newnew_amount} SOL</p>
                          </td>
                          <td className="table-stakerewardsformat">
                            <p className="table-maincolor"> {newnew_balance} SOL</p>
                          </td>
                          <td className="table-stakerewardsformat">
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
                <td colSpan={4}>
                  &nbsp;
                </td>
                </tr>
            </tfoot>    
          </table>
        </div>
      </div>
    </>
  );
};

export default SolanaBeachWallet;
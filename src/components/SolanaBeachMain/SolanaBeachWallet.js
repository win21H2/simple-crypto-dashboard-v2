import React from "react";
import "../style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ filteredList }) => {
  return (
    <>
      <div className="solanabeach-align">
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
                {/* yes i really did this */}
                </tr>
              {filteredList.map((sol) => {
                const newnew_balance = sol.new_balance.toLocaleString('en-US', {maximumFractionDigits: 2});
                const newnew_amount = sol.amount.toLocaleString('en-US', {maximumFractionDigits: 2});
                return (
                    <tr>
                      <td>
                        <p className="table-maincolor"> {sol.epoch}</p>
                      </td>
                      <td>
                        <p className="table-maincolor"> {newnew_amount} SOL</p>
                      </td>
                      <td>
                        <p className="table-maincolor"> {newnew_balance} SOL</p>
                      </td>
                      <td>
                        <p className="table-maincolor"> {sol.apr}%</p>
                      </td>
                    </tr>
                  );
                })}
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
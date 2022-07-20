import React from "react";
import "../style/solanabeach/solanabeach.css";

const SolanaBeachWalletBalance = ({ filteredList }) => {
    return (
        <>
        <div className="solanabeach-align">
        <h3 align="center">Balance</h3>
        <div className="solanabeach-wallet">
          <table className="solanabeach-card" >
            <thead>
              <tr>
                <th>
                  <h4 className="table-title">TOTAL</h4>
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
              <tr style={{display: "none"}}>
                <td colSpan={3}>
                  &nbsp;
                </td>
                </tr>
              {filteredList.map((sol) => {
                const new_totalearned = sol.balance.toLocaleString('en-US', {maximumFractionDigits: 2});
                const new_balance = sol.total_earned.toLocaleString('en-US', {maximumFractionDigits: 2});
                return (
                    <tr>
                      <td>
                        <p className="table-maincolor"> {new_balance} SOL</p>
                      </td>
                      <td>
                        <p className="table-maincolor"> {new_totalearned} SOL</p>
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
                <td colSpan={3}>
                  &nbsp;
                </td>
                </tr>
            </tfoot>    
          </table>
        </div>
      </div>
        </>
    ) 
}

export default SolanaBeachWalletBalance;
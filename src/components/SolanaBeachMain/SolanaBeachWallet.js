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
              {filteredList.map((sol) => {

                const newnew_balance = sol.new_balance.toLocaleString('en-US', {maximumFractionDigits: 2});
                const newnew_amount = sol.amount.toLocaleString('en-US', {maximumFractionDigits: 2});
                
                return (
                    <tr>
                      <td>
                        <pre className="table-maincolor"> {sol.epoch}</pre>
                      </td>
                      <td>
                        <pre className="table-maincolor"> {newnew_amount}<sub>SOL</sub></pre>
                      </td>
                      <td>
                        <pre className="table-maincolor"> {newnew_balance}<sub>SOL</sub></pre>
                      </td>
                      <td>
                        <pre className="table-maincolor"> {sol.apr}<sub>%</sub></pre>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={1}>
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
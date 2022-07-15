import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ filteredList }) => {

  return (
    <>
      <div className="solanabeach-align">
        <div className="solanabeach-wallet">
          <table className="solanabeach-card">
            <thead>
              <tr>
                <th>
                  <h5>EPOCH</h5>
                </th>
                <th>
                  <h5>AMOUNT</h5>
                </th>
                <th>
                  <h5>BALANCE</h5>
                </th>
                <th>
                  <h5>APR</h5>
                </th>
              </tr>
            </thead>
            <tbody>  
              {filteredList.map((sol) => {
                return (
                    <tr>
                      <td>
                        <pre className="style-color"> {sol.epoch}</pre>
                      </td>
                      <td>
                        <pre className="style-color"> {sol.amount} </pre>
                      </td>
                      <td>
                        <pre className="style-color"> {sol.new_balance}</pre>
                      </td>
                      <td>
                        <pre className="style-color"> {sol.apr}%</pre>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SolanaBeachWallet;
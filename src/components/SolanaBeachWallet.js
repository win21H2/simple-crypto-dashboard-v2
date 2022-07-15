import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ filteredList }) => {

  return (
    <>
      <div className="solanabeach-align" style={{borderRadius: "20px"}}>
        <div className="solanabeach-wallet" style={{borderRadius: "20px"}}>
          <table className="solanabeach-card" style={{borderRadius: "20px"}}>
            <thead style={{borderRadius: "20px"}}>
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
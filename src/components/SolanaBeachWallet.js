import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ apr, epoch, amount, new_balance }) => {

  const amountnew = amount.toFixed(2);
  const balancenew = new_balance.toLocaleString('en-US', {maximumFractionDigits: 2});

  return (
    <>
    <div className="solanabeach-wallet">
      <table className="solanabeach-card">
        <thead>
          <th>
            <td>
              <h5>EPOCH</h5>
            </td>
            <td>
              <h5>AMOUNT</h5>
            </td>
            <td>
              <h5>BALANCE</h5>
            </td>
            <td>
              <h5>APR</h5>
            </td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <pre className="style-color"> {epoch}</pre>
            </td>
            <td>
              <pre className="style-color"> {amountnew} </pre>
            </td>
            <td>
              <pre className="style-color"> {balancenew}</pre>
            </td>
            <td>
              <pre className="style-color"> {apr}%</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default SolanaBeachWallet;
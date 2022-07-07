import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ apr, epoch, amount }) => {

  return (
    <>
    <div className="solanabeach-wallet">
            <pre>
            <table>
              <tr>
                <th>EPOCH</th>
                <th>APR</th>
                <th>AMOUNT</th>
              </tr>
              <tr>
                <td className="centered">{epoch}</td>
                <td className="centered">{apr}</td>
                <td className="centered">{amount}</td>
              </tr>
            </table>
            </pre>
    </div>
    </>
  );
};

export default SolanaBeachWallet;
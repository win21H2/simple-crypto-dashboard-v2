import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ apr, epoch, amount, effectiveSlot, postBalance }) => {

  const aprnew = apr.toFixed(2);
  const amountnew = amount/1000000000;
  const amountnewnew = amountnew.toFixed(2);
  const postBalancenew = postBalance/1000000000;
  const postBalancenewnew = postBalancenew.toLocaleString('en-US', {maximumFractionDigits: 2});
  const effectiveSlotnew = effectiveSlot.toLocaleString('en-US', {maximumFractionDigits: 2});

  return (
    <>
    <div className="solanabeach-wallet">
      <pre className="solanabeach-align">
          <th> epoch: {epoch} </th><br/>
          <th> amount: {amountnewnew} SOL </th><br/>
          <th> new balance: {postBalancenewnew} SOL </th><br/>
          <th> apr: {aprnew}% </th><br/>
          <th> reward slot: {effectiveSlotnew} </th>
      </pre>
    </div>
    <br/>
    <br/>
    </>
  );
};

export default SolanaBeachWallet;
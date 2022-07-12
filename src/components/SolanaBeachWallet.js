import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ apr, epoch, amount, new_balance }) => {

  const amountnew = amount.toFixed(2);
  const balancenew = new_balance.toLocaleString('en-US', {maximumFractionDigits: 2});

  return (
    <>
    <div className="solanabeach-wallet">
        <p className="solanabeach-border"> epoch: {epoch}</p>
        <p className="solanabeach-border"> amount: {amountnew}<sub>sol</sub></p>
        <p className="solanabeach-border"> new balance: {balancenew}<sub>sol</sub></p>
        <p className="solanabeach-border"> apr: {apr}%</p><br/>
    </div>
    </>
  );
};

export default SolanaBeachWallet;
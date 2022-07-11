import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ apr, epoch, amount, postBalance }) => {

  const aprnew = apr.toFixed(2);
  const amountnew = (amount/11000000000).toFixed(2);
  const balancenew = (postBalance/1000000000).toLocaleString('en-US', {maximumFractionDigits: 2});

  return (
    <>
    <div className="solanabeach-wallet">
        <p className="solanabeach-border"> epoch: {epoch}</p>
        <p className="solanabeach-border"> amount: {amountnew}<sub>sol</sub></p>
        <p className="solanabeach-border"> new balance: {balancenew}<sub>sol</sub></p>
        <p className="solanabeach-border"> apr: {aprnew}%</p><br/>
    </div>
    </>
  );
};

export default SolanaBeachWallet;
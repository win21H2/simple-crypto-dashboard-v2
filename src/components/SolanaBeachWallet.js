import React from "react";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWallet = ({ apr, epoch, amount }) => {

  return (
    <>
    <div className="solanabeach-wallet">
            <pre>
            <a className="cursor-crosshair" href="https://solanabeach.io/address/CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu"><h5>Wallet: CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu</h5></a>
            <div className="sol-epoch">EPOCH: {epoch}</div>
            <div className="sol-apr">APR: {apr}</div>
            <div className="sol-amount">AMOUNT: {amount}</div>
            <br/>
            </pre>
    </div>
    </>
  );
};

export default SolanaBeachWallet;
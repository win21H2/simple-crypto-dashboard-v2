import React, { useState, useEffect } from "react";
import SolanaBeachWallet from "./SolanaBeachWallet";
import axios from "axios";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWalletFormat = () => {
    const [sol, setSol] = useState([]);

    useEffect(() => {
        axios
            .get( "https://public-api.solanabeach.io/v1/account/CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu/stake-rewards?" )
            .then((res) => {
                setSol(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const filteredSOL = sol.filter((sol) => { return sol; });

    return (
        <div>
            <div className="solanabeach-centeralign">
                <h1>Solana wallet</h1>
                <a className="cursor-crosshair" href="https://solanabeach.io/address/CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu"><h4>Wallet: CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu</h4></a>
                <div className="solanabeach-tablealign">
                    {filteredSOL.map((sol) => {
                        return (
                            <>
                            <SolanaBeachWallet
                                apr={sol.apr}
                                epoch={sol.epoch}
                                amount={sol.amount}
                            />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
  };
  
  export default SolanaBeachWalletFormat;
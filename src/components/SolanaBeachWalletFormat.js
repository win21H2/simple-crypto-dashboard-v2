import React, { useState, useEffect } from "react";
import SolanaBeachWallet from "./SolanaBeachWallet";
import axios from "axios";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWalletFormat = () => {
    const [sol, setSol] = useState([]);

    useEffect(() => {
        axios
            .get("https://public-api.solanabeach.io/v1/account/CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu/stake-rewards?")
            .then((res) => { setSol(res.data); })
            .catch((err) => { console.log(err); });
    }, []);

    const filteredSOL = sol.filter((sol) => {return sol;});

    if (filteredSOL.length === 0) {
        return <h1 className="solanabeach-align solanabeach-notavailable">No data available!</h1>;
    };

    return (
        <div>
            <div className="solanabeach-centeralign">
                <h5><a className="cursor-crosshair" href="https://solanabeach.io/address/CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu">CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu</a></h5>
                <div className="solanabeach-tablealign">
                    {filteredSOL.map((sol) => {
                        return (
                            <>
                            <SolanaBeachWallet
                                apr={sol.apr}
                                epoch={sol.epoch}
                                amount={sol.amount}
                                postBalance={sol.postBalance}
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
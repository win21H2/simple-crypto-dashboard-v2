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

        // eslint-disable-next-line
        const filteredSOL = sol.filter((sol) => {
            return sol;
        });

    return (
        <div>
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
    );
  };
  
  export default SolanaBeachWalletFormat;
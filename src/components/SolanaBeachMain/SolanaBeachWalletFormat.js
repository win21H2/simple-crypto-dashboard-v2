import React, { useState, useEffect } from "react";
import SolanaBeachWallet from "../SolanaBeachMain/SolanaBeachWallet";
import axios from "axios";
import "../style/solanabeach/solanabeach.css";

const SolanaBeachWalletFormat = () => {
    const [sol, setSol] = useState([]);

    useEffect(() => {
        axios
            .get("https://cosimo-api.herokuapp.com/api/v1/satoshi_sol_staking?api_key=aSmBpNbftAU0RZAkzXthU5lCIJHHNqGd&order_by=epoch&order=desc&filter_by=address&filter_by_value=CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu")
            .then((res) => { setSol(res.data); })
            .catch((err) => { console.log(err); });
    }, []);

    const filteredSOL = sol.filter((sol) => {return sol;});

    if (filteredSOL.length === 0) {
        return <h1 className="solanabeach-align solanabeach-notavailable">Loading data, please wait.....</h1>;
    };

    return (
        <>
            <h1>solana wallet</h1><br/>
            <SolanaBeachWallet filteredList={filteredSOL}/>
        </>
    );
  };
  
  export default SolanaBeachWalletFormat;
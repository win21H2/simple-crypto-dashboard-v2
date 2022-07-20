import React, { useState, useEffect } from "react";
import SolanaBeachWalletBalance from "./SolanaBeachWalletBalance";
import axios from "axios";
import "../style/solanabeach/solanabeach.css";

const SolanaBeachWalletFormatBalance = () => {
    const [sol, setSol] = useState([]);

    useEffect(() => {
        axios
            .get("https://cosimo-api.herokuapp.com/api/v1/satoshi_sol_balance?limit=1&filter_by=address&filter_by_value=CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu&api_key=aSmBpNbftAU0RZAkzXthU5lCIJHHNqGd")
            .then((res) => { setSol(res.data); })
            .catch((err) => { console.log(err); });
    }, []);

    const filteredSOL = sol.filter((sol) => {return sol;});
    const filteredList = filteredSOL.length > 5 ? filteredSOL.slice(filteredSOL.length - 5) : filteredSOL;

    if (filteredList.length === 0) {
        return <h1 className="solanabeach-align solanabeach-notavailable">Loading data, please wait.....</h1>;
    };

    return (
        <>
            <h1>solana wallet</h1><br/>
            <SolanaBeachWalletBalance filteredList={filteredList}/>
        </>
    ) 
}

export default SolanaBeachWalletFormatBalance;
import React, { useState, useEffect } from "react";
import SolanaBeachWallet from "./SolanaBeachWalletStakeRewards";
import axios from "axios";
import "../style/solanabeach/solanabeach.css";

const SolanaBeachWalletFormatStakeRewards = () => {
    const [sol, setSol] = useState([]);

    useEffect(() => {
        axios
            .get("https://cosimo-api.herokuapp.com/api/v1/satoshi_sol_staking?api_key=aSmBpNbftAU0RZAkzXthU5lCIJHHNqGd&order_by=epoch&order=desc&filter_by=address&filter_by_value=CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu")
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
            <SolanaBeachWallet filteredList={filteredList}/>
        </>
    );
  };
  
  export default SolanaBeachWalletFormatStakeRewards;
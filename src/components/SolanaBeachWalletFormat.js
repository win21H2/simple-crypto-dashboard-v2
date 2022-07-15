import React, { useState, useEffect } from "react";
import SolanaBeachWallet from "./SolanaBeachWallet";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/style/solanabeach/solanabeach.css";

const SolanaBeachWalletFormat = () => {
    const [sol, setSol] = useState([]);

    useEffect(() => {
        axios
            .get("https://cosimo-api.herokuapp.com/api/v1/satoshi_sol_staking?api_key=aSmBpNbftAU0RZAkzXthU5lCIJHHNqGd&order_by=epoch&order=desc&filter_by=address&filter_by_value=CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu")
            .then((res) => { setSol(res.data); })
            .catch((err) => { console.log(err); });
    }, []);

    const filteredSOL = sol.filter((sol) => {return sol;});
    if (filteredSOL.length === 0) {return <h1 className="solanabeach-align solanabeach-notavailable">Loading data.....</h1>;};

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar">Home</Link>
            </nav>
            
            <div className="solanabeach-align">
                {filteredSOL.map((sol) => {
                    return (
                        <>
                        <div classname="solanabeach-align">
                        <SolanaBeachWallet
                            apr={sol.apr}
                            epoch={sol.epoch}
                            amount={sol.amount}
                            new_balance={sol.new_balance}
                        />
                        </div>
                        </>
                    );
                })}
            </div>

        </>
    );
  };
  
  export default SolanaBeachWalletFormat;
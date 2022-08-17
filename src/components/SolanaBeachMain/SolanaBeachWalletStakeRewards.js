import { Offline, Online } from "react-detect-offline";
import React, { useState, useEffect } from "react";
import "../style/solanabeach/solanabeach.css";
import axios from "axios";

const SolanaBeachWalletStakeRewards = () => {
  const [sol, setSol] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://cosimo-api.herokuapp.com/api/v1/satoshi_sol_staking?api_key=aSmBpNbftAU0RZAkzXthU5lCIJHHNqGd&order_by=epoch&order=desc&filter_by=address&filter_by_value=CvCLZD6TVrVGWhwrPq8WJcfHHtziWCdmdcvMvvLLTLRu")
      .then((res) => {
        setSol(res.data);
        setLoading(false);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const filteredList = sol.length > 5 ? sol.slice(sol.length - 5) : sol;

  return (
    <>
      <div className="solanabeach-align">
        <Online>
          <h3 align="center">Stake Rewards</h3>
          <div className="solanabeach-wallet">
            <table className="solanabeach-card" >
              <thead>
                <tr>
                  <th><h1 className="table-title">EPOCH</h1></th>
                  <th><h1 className="table-title">AMOUNT</h1></th>
                  <th><h1 className="table-title">NEW BALANCE</h1></th>
                  <th><h1 className="table-title">APR</h1></th>
                </tr>
              </thead>
              <tbody> 
                <tr style={{display: "none"}}><td colSpan={4}>&nbsp;</td></tr>
                {loading ? (
                  <div className="loader-container"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                ) : (
                  <>
                    {filteredList.map((sol) => {
                      const newnew_balance = sol.new_balance.toLocaleString('en-US', {maximumFractionDigits: 2});
                      const newnew_amount = sol.amount.toLocaleString('en-US', {maximumFractionDigits: 2});
                      return (
                        <tr>
                          <td className="table-stakerewardsformat"><p className="table-maincolor">{sol.epoch}</p></td>
                          <td className="table-stakerewardsformat"><p className="table-maincolor">{newnew_amount}</p></td>
                          <td className="table-stakerewardsformat"><p className="table-maincolor">{newnew_balance}</p></td>
                          <td className="table-stakerewardsformat"><p className="table-maincolor">{sol.apr}%</p></td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
              <tfoot><tr><td colSpan={4}>&nbsp;</td></tr></tfoot>    
            </table>
          </div>
        </Online>
        <Offline><h1>Oh no! looks like you are offline!</h1></Offline>
      </div>
    </>
  );
};

export default SolanaBeachWalletStakeRewards;
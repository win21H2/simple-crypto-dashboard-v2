import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";
import SolanaBeachWalletFormat from "./SolanaBeachWalletFormat";

const CoinFormat = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" )
            .then((res) => { setCoins(res.data); })
            .catch((err) => { console.log(err); });
    }, []);
    const REFRESHdata = () => {
        axios
            .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" )
            .then((res) => { setCoins(res.data); })
            .catch((err) => { console.log(err); });
    };

    // eslint-disable-next-line
    const filteredCoins = coins.filter((coin) => {
        if (coin.symbol === "eth") return coin;
        if (coin.symbol ==="sol") return coin;
        if (coin.symbol ==="hnt") return coin;
        if (coin.symbol ==="ksm") return coin;
    });

    const HTLprice = () => {
        const sortedCoins = filteredCoins.sort((a, b) => { return b.current_price - a.current_price; });
        setCoins(sortedCoins);
    };
    const LTHprice = () => {
        const sortedCoins = filteredCoins.sort((a, b) => { return a.current_price - b.current_price; });
        setCoins(sortedCoins);
    };
    
    return (
        <div>
            <div className="coin-app">
                <div id="COIN--PRICES">
                <div className="coin-search">
                    <div className="coin-HTLLTH">
                        <h1>coin prices</h1>
                        <pre>
                            <button onClick={HTLprice} className="sortbutton">high to low (price $USD)</button><br/>
                            <button onClick={LTHprice} className="sortbutton">low to high (price $USD)</button><br/>
                            <button onClick={REFRESHdata} className="sortbutton">refresh data</button>
                        </pre>
                    </div>
                    <div className="coin-boundbox">
                        {filteredCoins.map((coin) => {
                            return (
                                <>
                                <Coin
                                    key={coin.id}
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    priceChange={coin.price_change_percentage_24h}
                                    high24h={coin.high_24h}
                                    low24h={coin.low_24h}
                                    totalsupply={coin.total_supply}
                                    circsupply={coin.circulating_supply}
                                />
                                </>
                            );
                        })}
                        </div>
                        <div id="SOLANA--WALLET">
                            <SolanaBeachWalletFormat />
                        </div>
                    </div>
                </div>
                <div id="MERIT-CIRCLE">
                    <center>
                        <h1 align="center">merit circle DAO treasury</h1>
                        <iframe src="https://treasury.meritcircle.io/" title="treasury" width="100%" height="1325px" scrolling="no" className="treasury--display"></iframe>
                    </center>
                </div>
            </div>
        </div>
    )
};

export default CoinFormat;
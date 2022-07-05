import React, { useState, useEffect } from "react";
// import "../App.css";
import Coin from "./Coin";
import axios from "axios";

const CoinFormat = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
    axios
        .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" )
        .then((res) => {
            setCoins(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [coins]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <div id="CRYPTO--DISPLAY">
                <div className="coin-app">
                    <div className="coin-search">
                        <form action="">
                            <input type="text" placeholder="search for a coin" className="coin-input" onChange={handleChange}/><br />
                        </form>
                    </div>
                    <pre align="center">coin | price | market cap | high (24h) | low (24h) | change (24h) | last updated</pre><br/ >
                    {filteredCoins.map((coin) => {
                        return (
                            <>
                            <Coin
                                key={coin.id}
                                image={coin.image}
                                symbol={coin.symbol}
                                marketcap={coin.market_cap}
                                price={coin.current_price}
                                priceChange={coin.price_change_percentage_24h}
                                volume={coin.total_volume}
                                high24h={coin.high_24h}
                                low24h={coin.low_24h}
                                lastupdated={coin.last_updated}
                            />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default CoinFormat;
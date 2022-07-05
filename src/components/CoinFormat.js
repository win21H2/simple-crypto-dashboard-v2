import React, { useState, useEffect } from "react";
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

    const HTL = () => {
        const sortedCoins = filteredCoins.sort((a, b) => {
            return b.current_price - a.current_price;
        });
        setCoins(sortedCoins);
    };

    // try to figure out how to keep it at the sorted coins (most likely using states for example setState)

    const LTH = () => {
        const sortedCoins = filteredCoins.sort((a, b) => {
            return a.current_price - b.current_price;
        });
        setCoins(sortedCoins);
    };

    return (
        <div>
            <div id="CRYPTO--DISPLAY">
                <div className="coin-app">
                    <div className="coin-search">
                        <form action="">
                            <input type="text" placeholder="search for a coin" className="coin-input" onChange={handleChange}/><br />
                        </form>
                        <div className="coin-HTLLTH">
                            <h4>Sort by</h4>
                            <button onClick={HTL} className="sortbutton">high to low</button>
                            <button onClick={LTH} className="sortbutton">low to high</button>
                        </div>
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
import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";

const CoinFormat = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
    axios
        .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" )
        .then((res) => {
            setCoins(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

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
    const HTLmarketcap = () => {
        const sortedCoins = filteredCoins.sort((a, b) => { return b.market_cap - a.market_cap; });
        setCoins(sortedCoins);
    };
    const LTHmarketcap = () => {
        const sortedCoins = filteredCoins.sort((a, b) => { return a.market_cap - b.market_cap; });
        setCoins(sortedCoins);
    };

    return (
        <div>
            <div id="CRYPTO--DISPLAY">
                <div className="coin-app">
                    <div id="PINNED--SORT">
                    <div className="coin-search">
                        <div className="coin-HTLLTH">
                            <h4>Sort by (price)</h4>
                            <button onClick={HTLprice} className="sortbutton">high to low</button>
                            <button onClick={LTHprice} className="sortbutton">low to high</button>
                            <h4>Sort by (market cap)</h4>
                            <button onClick={HTLmarketcap} className="sortbutton">high to low</button>
                            <button onClick={LTHmarketcap} className="sortbutton">low to high</button>
                        </div>
                    </div>
                        <h4 align="center">Pinned</h4>
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
                                    high24h={coin.high_24h}
                                    low24h={coin.low_24h}
                                    lastupdated={coin.last_updated}
                                />
                                </>
                            );
                        })}
                    </div>
                    {/* <div id="meritcircle">
                        <iframe src="https://treasury.meritcircle.io/" title="treasury" scrolling="no" className="treasury--display"></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default CoinFormat;
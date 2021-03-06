import React, { useState, useEffect } from "react";
import Coin from "./SortedCoin";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/coin/coin.css";

const CoinFormat = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .get( "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" )
                .then((res) => { setCoins(res.data); })
                .catch((err) => { console.log(err); });
        }, 1000);
        // try to make it so that the user can select reload times instead of nuclear
        // blasting the API w/ requests (e.g. at different times) but we have to make
        // sure that the page already loads the data the first time that the window
        // loads and then set the interval time based on what input the user gives.
        return () => clearInterval(interval);
    }, []);

    const RETURNprice = () => {
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
        const sortedCoins = filteredCoins.sort((a, b) => {return b.current_price - a.current_price;});
        setCoins(sortedCoins);
    };
    const LTHprice = () => {
        const sortedCoins = filteredCoins.sort((a, b) => {return a.current_price - b.current_price;});
        setCoins(sortedCoins);
    };
    
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar"><img src="https://www.bancassurances.ch/data/images/accroches/accrocheImmo.png" className="homebutton" alt=""/></Link>
            </nav>
            <div className="coin-app">
                <div id="COIN--PRICES">
                <div className="coin-search">
                    <div className="coin-HTLLTH">
                        <pre>
                            <h5>filter</h5>
                            <button onClick={HTLprice} className="sortbutton">-- high to low (price $USD) --</button><br/>
                            <button onClick={LTHprice} className="sortbutton">-- low to high (price $USD) --</button><br/>
                            <button onClick={RETURNprice} className="sortbutton">-- return to original --</button><br/>
                        </pre>
                        <h5>data is refreshed every second</h5>
                    </div>
                    <div className="coin-boundbox">
                        {filteredCoins.map((coin) => {
                            return (
                                <>
                                <Coin
                                    name={coin.name}
                                    image={coin.image}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    priceChange={coin.price_change_percentage_24h}
                                    high24h={coin.high_24h}
                                    low24h={coin.low_24h}
                                />
                                </>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CoinFormat;
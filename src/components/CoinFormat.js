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
    const HTLchange = () => {
        const sortedCoins = filteredCoins.sort((a, b) => { return b.price_change_percentage_24h - a.price_change_percentage_24h; });
        setCoins(sortedCoins);
    };
    const LTHchange = () => {
        const sortedCoins = filteredCoins.sort((a, b) => { return a.price_change_percentage_24h - b.price_change_percentage_24h; });
        setCoins(sortedCoins);
    };

    return (
        <div>
                <div className="coin-app">
                    <div className="coin-search">
                        <div className="coin-HTLLTH">
                            <h4>Filter</h4>
                            <pre>
                                <button onClick={HTLprice} className="sortbutton">high to low (price $USD)</button><br/><br/>
                                <button onClick={LTHprice} className="sortbutton">low to high (price $USD)</button>
                                <br/><br/><br/>
                                <button onClick={HTLchange} className="sortbutton">high to low (change %)</button><br/><br/>
                                <button onClick={LTHchange} className="sortbutton">low to high (change %)</button>
                            </pre>
                        </div>
                        <br/>
                        <br/>
                        <div className="coin-boundbox">
                            {filteredCoins.map((coin) => {
                                return (
                                    <>
                                    <Coin
                                        key={coin.id}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        price={coin.current_price}
                                        priceChange={coin.price_change_percentage_24h}
                                        high24h={coin.high_24h}
                                        low24h={coin.low_24h}
                                        lastupdated={coin.last_updated}
                                    />
                                    </>
                                );
                            })}
                            {/* COPY AND PASTE THE COIN DATA AND TRANSFORM IT SO THAT */}
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div id="meritcircle">
                        <center>
                        <iframe src="https://treasury.meritcircle.io/" title="treasury" width="100%" height="1325px" scrolling="no" className="treasury--display"></iframe>
                        </center>
                    </div>
                </div>
        </div>
    )
};

export default CoinFormat;
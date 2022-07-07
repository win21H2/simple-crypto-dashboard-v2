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
    // const checkMaxSupply = () => {
    //     filteredCoins.forEach((coin) => {
    //         if (coin.max_supply === null) {
    //             console.log(coin.name + " has no max supply!");
    //         }
    //     }
    // )};
    const checkPrice = () => {
        filteredCoins.forEach((coin) => {
            if (coin.symbol === "eth") {
                if (coin.current_price > 1000) {
                    console.log(coin.name + " is over 1000!");
                    // check if the price is getting close to the low_24h price if so, change the color to red
                }
                // check if the price is inbetween high_24h and low_24h if so, change the color to orange/yellow
                // try to figure out how to make it change color based on how close it is to the high or low values
                if (coin.current_price === coin.low_24h) {
                    console.log(coin.name + " is under 1000!");
                    // check if the price is getting close to the high_24h price if so, change the color to green
                }
            }
        }
    )};
    checkPrice();
    // checkMaxSupply();
    return (
        <div>
            <div className="coin-app">
                <div className="coin-search">
                    <div className="coin-HTLLTH">
                        <h4>Filter</h4>
                        <pre>
                            <button onClick={HTLprice} className="sortbutton">high to low (price $USD)</button><br/>
                            <button onClick={LTHprice} className="sortbutton">low to high (price $USD)</button>
                            <br/><br/>
                            <button onClick={HTLchange} className="sortbutton">high to low (change %)</button><br/>
                            <button onClick={LTHchange} className="sortbutton">low to high (change %)</button>
                        </pre>
                    </div>
                    <br/><br/>
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
                                    maxsupply={coin.max_supply}
                                    totalsupply={coin.total_supply}
                                    circsupply={coin.circulating_supply}
                                    lastupdated={coin.last_updated}
                                />
                                </>
                            );
                        })}
                    </div>
                    <br/><br/>
                </div>
                <center><iframe src="https://treasury.meritcircle.io/" title="treasury" width="100%" height="1325px" scrolling="no" className="treasury--display"></iframe></center>
            </div>
        </div>
    )
};

export default CoinFormat;
import React, { useState } from "react";
import "../components/style/pricecolor/pricecolor.css";

const PriceColorGradient = ({ price, high24h, low24h }) => {
    const [style, setStyle] = useState("cont");

    const changeStyle = () => {
        if (price < high24h) {
            setStyle("cont");
        };
        if (price === high24h) {
            setStyle("contnew")
        }
    };

    // make the function run every time the price changes (MOST LIKELY USING onChange) 
    // but for now use a onClick function for testing

    return (
        <div>
            <button onClick={changeStyle}>CHECK PRICE COLOR</button>
            <p className={style}>current price: ${price}</p>
            <p className="coin-high24h">high (24h): ${high24h}</p>
            <p className="coin-low24h">low (24h): ${low24h}</p>
        </div>
    );
};


export default PriceColorGradient;
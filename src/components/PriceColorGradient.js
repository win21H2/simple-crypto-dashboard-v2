import React, { useState } from "react";
import "../components/style/pricecolor/pricecolor.css";

const PriceColorGradient = ({ price, high24h, low24h }) => {
    const [style, setStyle] = useState("contgreen");

    const changeStyle = () => {
        if (price < high24h) {
            setStyle("contgreen");
        };
        if (price === high24h) {
            setStyle("contred")
        }
        if (price === ((low24h + high24h) / 2)+-10) {
            setStyle("contyellow")
        }
    };

    /*
    NOTES:
     - Try to use the +- operator to compare it the price is within a range to the midpoint of +10 or -10 USD
     - Make the price color a onChange function so that when the price updates, so does the color
    */

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
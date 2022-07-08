import React, { useState } from "react";
import "../components/style/pricecolor/pricecolor.css";

const PriceColorGradient = ({ price, high24hnew, low24hnew }) => {
    const [style] = useState("contgreen");

    return (
        <div>
            <p className={style}>current price: ${price}</p>
            <p className="coin-high24h">high (24h): ${high24hnew}</p>
            <p className="coin-low24h">low (24h): ${low24hnew}</p>
        </div>
    );
};

export default PriceColorGradient;
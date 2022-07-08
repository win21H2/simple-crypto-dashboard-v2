import React, { useState } from "react";
import "../components/style/pricecolor/pricecolor.css";

const PriceColorGradient = ({ price, high24h, low24h }) => {
    const [style, setStyle] = useState("cont");

    // function handleTEST() {
    //    setStyle("contnew");
    // }

    function COINPRICE() {
        if (price > low24h) {
            setStyle("contnew");
        }
    };

    COINPRICE();

    return (
        <div>
           
            <p className={style}>current price: ${price}</p>
            <p className={high24h}>high (24h): ${high24h}</p>
            <p className={low24h}>low (24h): ${low24h}</p>
        </div>
    );
};


export default PriceColorGradient;
import React from "react";
import '../App.css'

const Coin = ({ image, symbol, price, volume, priceChange, high24h, low24h, lastupdated }) => {
  return (
    <>
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" />
          <div className="coin-symbol">{symbol}</div>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className="coin-high24h">${high24h}</p>
          <p className="coin-low24h">${low24h}</p>
          {priceChange < 0 ? (<p className="coin-percent red">{priceChange.toFixed(1)}%</p>) : (<p className="coin-percent green">{priceChange.toFixed(1)}%</p>)}
          <p className="coin-lastupdated">Last updated  {lastupdated}</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Coin;
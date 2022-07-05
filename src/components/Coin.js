import React from "react";

const Coin = ({ image, symbol, price, volume, priceChange, high24h, low24h, lastupdated }) => {
  return (
    <>
    <div id="CRYPTO--CURRENT">
      <div className="coin-container">
        <div className="coin-format">
          <div className="coin">
            <a href={image} target="_blank" rel="noreferrer" className="cursor-crosshair"><img src={image} alt="" /></a>
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
    </div>
    <div id="CRYPTO--CALC">
    
    </div>
    </>
  );
}

export default Coin;
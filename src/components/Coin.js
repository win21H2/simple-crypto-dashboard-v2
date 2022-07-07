import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, lastupdated }) => {
  
  return (
    <>
    <div id="CRYPTO--CURRENT">
      <div className="coin-container">
        <div className="coin-format">
          <div className="coin-data">
            <pre>
            <div className="coin">
              <a href={image} target="_blank" rel="noreferrer" className="cursor-crosshair"><img src={image} alt=""/></a><br/>
            </div>
            <div className="coin-symbol">Symbol: <b>{symbol}</b></div>
            <p className="coin-price">Price: ${price}</p>
            <p className="coin-high24h">High (24h): ${high24h}</p>
            <p className="coin-low24h">Low (24h): ${low24h}</p>
            {priceChange < 0 ? (<p className="coin-percent red">Change (24h): {priceChange.toFixed(1)}%</p>) : (<p className="coin-percent green">Change (24h): {priceChange.toFixed(1)}%</p>)}
            <p className="coin-lastupdated">Last updated  {lastupdated}</p>
            </pre>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Coin;
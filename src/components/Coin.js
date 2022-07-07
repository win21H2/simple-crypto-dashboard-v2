import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, lastupdated, name, maxsupply, totalsupply, circsupply }) => {

  return (
    <>
    <div id="CRYPTO--CURRENT">
      <div className="coin-container">
        <div className="coin-format">
          <div className="coin-data">
            <pre>
            <div className="coin">
              <a href={image} target="_blank" rel="noreferrer" id="coin-imageborder" className="cursor-crosshair"><img src={image} alt=""/></a><br/>
            </div>
            <div className="coin-symbol">symbol: <b>{symbol}</b></div>
            <div className="coin-name">name: <b>{name}</b></div>
            <p className="coin-price">current price: ${price}</p>
            <p className="coin-high24h">high (24h): ${high24h}</p>
            <p className="coin-low24h">low (24h): ${low24h}</p>
            {priceChange < 0 ? (<p className="coin-percent red">change (24h): {priceChange.toFixed(1)}%</p>) : (<p className="coin-percent green">Change (24h): {priceChange.toFixed(1)}%</p>)}
            <p className="">max supply: {maxsupply}</p>
            <p className="">total supply: {totalsupply}</p>
            <p className="">circulating supply: {circsupply}</p>
            <p className="coin-lastupdated">last updated {lastupdated}</p>
            <br/>
            </pre>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Coin;
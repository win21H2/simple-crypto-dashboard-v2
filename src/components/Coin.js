import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, name }) => {

  const high24hnew = high24h.toFixed(2);
  const low24hnew = low24h.toFixed(2);

  return (
    <>
    <div id="CRYPTO--CURRENT">
      <div className="coin-container">
        <div className="coin-format">
          <div className="coin-data">
            <pre>
              <div className="coin">
                <a href={image} target="_blank" rel="noreferrer" id="coin-imageborder" className=""><img src={image} alt=""/></a><br/>
              </div>
              <div className="coin-symbol">symbol: <b>{symbol}</b></div>
              <div className="coin-name">name: <b>{name}</b></div>
              <p>price: ${price} USD</p>
              <p className="coin-high24h">high (24h): ${high24hnew} USD</p>
              <p className="coin-low24h">low (24h): ${low24hnew} USD</p>
              {priceChange < 0 ? (<p className="coin-percent red">change (24h): {priceChange.toFixed(2)}%</p>):(<p className="coin-percent green">Change (24h): {priceChange.toFixed(2)}%</p>)}
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
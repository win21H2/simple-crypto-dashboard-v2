import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, name }) => {

  const high24hnew = high24h.toFixed(2);
  const low24hnew = low24h.toFixed(2);
  const pricenew = price.toFixed(2);

  return (
    <>
    <div id="CRYPTO--CURRENT">
      <div className="coin-container">
        <div className="coin-format">
          <div className="coin-data">
            <pre>
              <div className="coincard-regular">
                <br/>
                <div className="coin">
                  <a href={image} target="_blank" rel="noreferrer" className=""><img src={image} alt=""/></a><br/>
                </div>
                <h4><b>symbol: {symbol}</b></h4>
                <h4><b>name: {name}</b></h4>
                <h4><b>price: ${pricenew}<sub>USD</sub></b></h4>
              </div>
              <p className="coincard-green">&uarr; high (24h): ${high24hnew}<sub className="coincard-reggreen">USD</sub></p>
              <p className="coincard-red">&darr; low (24h): ${low24hnew}<sub className="coincard-regred">USD</sub></p>
              {priceChange < 0 ? (<p className="coin-percent coincard-red">&darr; change (24h): {priceChange.toFixed(2)}%</p>):(<p className="coin-percent coincard-green">&uarr; change (24h): {priceChange.toFixed(2)}%</p>)}
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
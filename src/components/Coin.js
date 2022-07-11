import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, name }) => {

  const high24hnew = high24h.toLocaleString('en-US', {maximumFractionDigits: 2});
  const low24hnew = low24h.toLocaleString('en-US', {maximumFractionDigits: 2});
  const pricenew = price.toLocaleString('en-US', {maximumFractionDigits: 2});
  const changenew = priceChange.toLocaleString('en-US', {maximumFractionDigits: 2});

  return (
    <>
    <div id="CRYPTO--CURRENT">
      <div className="coin-container">
        <div className="coin-format">
          <div className="coin-data">
            <pre>
              <div className="coincard-card">
              <div className="coincard-regular">
                <br/>
                <div className="coin">
                  <a href={image} target="_blank" rel="noreferrer" className=""><img src={image} alt=""/></a><br/>
                </div>
                <h4><b>{symbol}</b></h4>
                <h4><b>{name}</b></h4>
                <h4><b>${pricenew} USD<sub>/per {symbol}</sub></b></h4>
              </div>
              {/* .toFixed(2) */}
              <p className="coincard-green">&uarr; high (24h): ${high24hnew} USD</p>
              <p className="coincard-red">&darr; low (24h): ${low24hnew} USD</p>
              {changenew < 0 ? (<p className="coincard-red">&darr; change (24h): {changenew}%</p>):(<p className="coincard-green">&uarr; change (24h): {changenew}%</p>)}
              <br/>
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Coin;
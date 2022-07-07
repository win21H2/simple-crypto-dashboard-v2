import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, name, totalsupply, circsupply }) => {

  const pricenew = price.toLocaleString('en-US', {maximumFractionDigits: 2});
  const high24hnew = high24h.toLocaleString('en-US', {maximumFractionDigits: 2});
  const low24hnew = low24h.toLocaleString('en-US', {maximumFractionDigits: 2});
  const totalsupplynew = totalsupply.toLocaleString('en-US', {maximumFractionDigits: 2});
  const circsupplynew = circsupply.toLocaleString('en-US', {maximumFractionDigits: 2});

  // try to pick out each coin and list the price to console and then from there try to individually color the price
  if (symbol === "eth") {
    console.log("eth price:" + pricenew);
  };
  if (symbol === "sol") {
    console.log("sol price:" + pricenew);
  };
  if (symbol === "hnt") {
    console.log("hnt price:" + pricenew);
  };
  if (symbol === "ksm") {
    console.log("ksm price:" + pricenew);
  };

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
            <p className="coin-price">current price: ${pricenew}</p>
            <p className="coin-high24h">high (24h): ${high24hnew}</p>
            <p className="coin-low24h">low (24h): ${low24hnew}</p>
            {/*
            compare if the price is in between the mid point and up to high24hnew = GREEN
            compare if the price is in between the mid point and down to low24hnew = RED
            */}
            {priceChange < 0 ? (<p className="coin-percent red">change (24h): {priceChange.toFixed(2)}%</p>) : (<p className="coin-percent green">Change (24h): {priceChange.toFixed(2)}%</p>)}
            <p className="">total supply: {totalsupplynew}</p>
            <p className="">circulating supply: {circsupplynew}</p>
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
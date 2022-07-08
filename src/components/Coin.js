import React from "react";

const Coin = ({ image, symbol, price, priceChange, high24h, low24h, name, totalsupply, circsupply }) => {

  const midpoint = (high24h + low24h) / 2;

  const high24hnew = high24h.toLocaleString('en-US', {maximumFractionDigits: 2});
  const low24hnew = low24h.toLocaleString('en-US', {maximumFractionDigits: 2});
  const totalsupplynew = totalsupply.toLocaleString('en-US', {maximumFractionDigits: 2});
  const circsupplynew = circsupply.toLocaleString('en-US', {maximumFractionDigits: 2});

  /*
  SIMPLE EXPLANATION:
  Find out the midpoint of the high and low prices.

  Then, make two different sets for the red and green colors like so: GREEN [128, 220] and RED [220, 128] as
    well as the midpoint color which is $primary-color.

  Then find out 10% of the midpoint for the lower and upper bound.

  Then use the information so that if the price is almost at the upper bound, it is almost the greenest it can be
    and if the price is almost at the lower bound, it is almost the redest it can be but if the price is close/at
    the midpoint, it is the primary color.
  */

  // eslint-disable-next-line
  const greenrange = [128, 220];
  // eslint-disable-next-line
  const redrange = [128, 220];

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
            <p className="coin-price">price: ${price}</p>
            <p className="coin-high24h">high (24h): ${high24hnew}</p>
            <p className ="coin-midpoint">midpoint (24h): ${midpoint}</p>
            <p className="coin-low24h">low (24h): ${low24hnew}</p>
            {priceChange < 0 ? (<p className="coin-percent red">change (24h): {priceChange.toFixed(2)}%</p>):(<p className="coin-percent green">Change (24h): {priceChange.toFixed(2)}%</p>)}
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
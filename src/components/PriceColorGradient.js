
const PriceColorGradient = ({ price, high24h, low24h }) => {

    // make the clasname a variable so that it can be changed depending on the price

    return (
        <div>
            <p className="coin-price">current price: ${price}</p>
            <p className="coin-high24h">high (24h): ${high24h}</p>
            <p className="coin-low24h">low (24h): ${low24h}</p>
        </div>
    );
};


export default PriceColorGradient;
import { Link } from "react-router-dom";
import "../style/main/main.css";

const CoinMainPage = () => {

    return (
        <>
         <nav className="navbar">
                <nav className="navbar">
                    <Link to="/" className="navbar"><img src="https://www.bancassurances.ch/data/images/accroches/accrocheImmo.png" className="homebutton" alt=""/></Link>
                </nav>
                <Link to="/components/CoinMain/CoinFormat" className="navbar">
                    <center>
                        <img className="icons-images" src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt=""/>
                        <p>filtered coins<br/>(ETH, SOL, KSM, HNT)</p>
                    </center>
                </Link>
                <Link to="/components/CoinMain/AllCoinFormat" className="navbar">
                    <center>
                        <img className="icons-images" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt=""/>
                        <p>unfiltered coins<br/>(All of the coins)</p>
                    </center>
                </Link>
            </nav>
        </>
    )
}

export default CoinMainPage;
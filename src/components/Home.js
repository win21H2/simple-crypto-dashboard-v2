import { Link } from "react-router-dom";
import "../components/style/main/main.css";
import CoinMainPageNav from "./navigation/CoinMainPageNav";
import MeritCircleNav from "./navigation/MeritCircleNav";
import SolanaBeachWalletFormat from "./SolanaBeachMain/SolanaBeachWalletFormat";

function Home () {

    return (
        <>
            <SolanaBeachWalletFormat/>
            <nav className="navbar">
                <Link to="/components/CoinMain/CoinMainPage"><CoinMainPageNav/></Link>
                <Link to="/MeritCircle"><MeritCircleNav/></Link>
            </nav>
        </>
    )
}

export default Home;
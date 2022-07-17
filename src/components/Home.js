import { Link } from "react-router-dom";
import "../components/style/main/main.css";
import CoinMainPageNav from "./navigation/CoinMainPageNav";
import SolanaBeachWalletFormatNav from "./navigation/SolanaBeachWalletFormatNav";
import MeritCircleNav from "./navigation/MeritCircleNav";

function Home () {

    return (
        <>
            <nav className="navbar">
                <Link to="/components/CoinMain/CoinMainPage">
                    <CoinMainPageNav/>
                </Link>
                <Link to="/components/SolanaBeachMain/SolanaBeachWalletFormat">
                    <SolanaBeachWalletFormatNav/>
                </Link>
                <Link to="/components/MeritCircle">
                    <MeritCircleNav/>
                </Link>
            </nav>
        </>
    )
}

export default Home;
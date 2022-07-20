//import { Link } from "react-router-dom";
import "../components/style/main/main.css";
import FinalSolanaBeachWallet from "./SolanaBeachMain/FinalSolanaBeachWallet";
//import CoinMainPageNav from "./navigation/CoinMainPageNav";
//import MeritCircleNav from "./navigation/MeritCircleNav";

function Home () {

    return (
        <>
            <FinalSolanaBeachWallet/>
            {/*<nav className="navbar">
                <Link to="/components/CoinMain/CoinMainPage"><CoinMainPageNav/></Link>
                <Link to="/MeritCircle"><MeritCircleNav/></Link>
            </nav>*/}
        </>
    )
}

export default Home;
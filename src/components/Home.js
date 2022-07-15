import { Link } from "react-router-dom";
import "../components/style/main/main.css";

function Home () {

    return (
        <>
            <h1>simple crypto dashboard</h1>
            <br/>
            <h4>Contents page</h4>
            <nav className="navbar">
                <Link to="/components/CoinFormat" className="navbar">coin prices</Link><br/><br/>
                <Link to="/components/SolanaBeachWalletFormat" className="navbar">solana wallet</Link><br/><br/>
                <Link to="/components/MeritCircle" className="navbar">merit circle DAO treasury</Link><br/>
            </nav>
        </>
    )
}

export default Home;
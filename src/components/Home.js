import { Link } from "react-router-dom";
import "../components/style/main/main.css";

function Home () {

    return (
        <>
            <nav className="navbar">
                <Link to="/components/CoinMain/CoinMainPage">
                    <center>
                        <img className="icons-images" src="https://media-s3-us-east-1.ceros.com/aon/images/2021/09/14/bf46ac10b25be9533791f580f71e3315/finance-1.png" alt=""/>
                        <p>coin prices</p>
                    </center>
                </Link>
                <Link to="/components/SolanaBeachMain/SolanaBeachWalletFormat">
                    <center>
                        <img className="icons-images" src="https://cdn1.iconfinder.com/data/icons/banking-3/100/bank-07-512.png" alt=""/>
                        <p>solana wallet</p>
                    </center>
                </Link>
                <Link to="/components/MeritCircle">
                    <center>
                        <img className="icons-images" src="https://aws1.discourse-cdn.com/standard20/uploads/merit/original/1X/29d50248bf557e113c2529f32dcf2519549b7f30.png" alt=""/>
                        <p>merit circle DAO treasury</p>
                    </center>
                </Link>
            </nav>
        </>
    )
}

export default Home;
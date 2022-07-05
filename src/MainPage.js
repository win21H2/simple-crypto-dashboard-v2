import CoinFormat from "./components/CoinFormat";
import "./components/style/coin/coin.css";
import "./components/style/main/main.css";

/*
MAKE SURE TO BE IN THE DIRECTORY:
(CD INTO THIS DIR)
C:\Users\markp\simple-crypto-dashboard

COMMAND FOR MAIN.CSS:
sass src/components/style/main/main.scss src/components/style/main/main.css

COMMAND FOR COIN.CSS:
sass src/components/style/coin/coin.scss src/components/style/coin/coin.css
*/

const MainPage = () => {
    
    return (
        <div>
            <CoinFormat />
        </div>
    );
};

export default MainPage;
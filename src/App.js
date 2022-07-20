import { Routes, Route } from "react-router-dom";
import "./components/style/main/main.css";
import Home from "./components/Home";
import CoinFormat from "./components/CoinMain/SortedCoinFormat";
import CoinMainPage from "./components/CoinMain/CoinMainPage";
import AllCoinFormat from "./components/CoinMain/AllCoinFormat";
import MeritCircle from "./MeritCircle";
import SolanaBeachWalletFormat from "./components/SolanaBeachMain/SolanaBeachWalletFormatStakeRewards";
import ScrollButton from "./components/scroll/ScrollButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="components/CoinMain/CoinFormat" element={<CoinFormat/>}/>
        <Route path="components/CoinMain/AllCoinFormat" element={<AllCoinFormat/>}/>
        <Route path="components/CoinMain/CoinMainPage" element={<CoinMainPage/>}/>
        <Route path="/MeritCircle" element={<MeritCircle/>}/>
        <Route path="components/SolanaBeachMain/SolanaBeachWalletFormat" element={<SolanaBeachWalletFormat/>}/>
      </Routes>
      <ScrollButton/>
    </>
  );
}

export default App;
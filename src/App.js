import { Routes, Route } from "react-router-dom";
import "./components/style/main/main.css";
import Home from "./components/Home";
import CoinFormat from "./components/CoinMain/CoinFormat";
import CoinMainPage from "./components/CoinMain/CoinMainPage";
import AllCoinFormat from "./components/CoinMain/AllCoinFormat";
import MeritCircle from "./components/MeritCircle";
import SolanaBeachWalletFormat from "./components/SolanaBeachWalletFormat";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components/CoinMain/CoinFormat" element={<CoinFormat />} />
        <Route path="components/CoinMain/CoinMainPage" element={<CoinMainPage />} />
        <Route path="components/CoinMain/AllCoinFormat" element={<AllCoinFormat />} />
        <Route path="components/MeritCircle" element={<MeritCircle />} />
        <Route path="components/SolanaBeachWalletFormat" element={<SolanaBeachWalletFormat />} />
      </Routes>
      <ScrollButton/>
    </>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import "./components/style/main/main.css";
import Home from "./components/Home";
import CoinFormat from "./components/CoinFormat";
import MeritCircle from "./components/MeritCircle";
import SolanaBeachWalletFormat from "./components/SolanaBeachWalletFormat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="components/CoinFormat" element={<CoinFormat />} />
        <Route path="components/MeritCircle" element={<MeritCircle />} />
        <Route path="components/SolanaBeachWalletFormat" element={<SolanaBeachWalletFormat />} />
      </Routes>
    </>
  );
}

export default App;
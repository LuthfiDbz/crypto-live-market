import { Routes, Route } from "react-router-dom";
import CryptoMarket from "./pages/crypto/CryptoMarket";
import ExchangesList from "./pages/exchanges/ExchangesList";
import { HeaderMenu } from "./components/header/HeaderMenu";

function App() {
  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/" element={<CryptoMarket />} />
        <Route path="/exchanges" element={<ExchangesList />} />
      </Routes>
    </>
  );
}

export default App;

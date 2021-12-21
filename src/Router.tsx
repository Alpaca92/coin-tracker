import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    // <BrowserRouter basename="process.env.PUBLIC_URL">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

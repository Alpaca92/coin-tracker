import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

interface RouterProps {
  toggleMode: () => void;
  isLight: boolean;
}

function Router({ toggleMode, isLight }: RouterProps) {
  return (
    <BrowserRouter basename="/coin-tracker">
      <Routes>
        <Route path="/" element={<Coins toggleMode={toggleMode} />} />
        <Route path="/:coinId/*" element={<Coin isLight={isLight} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

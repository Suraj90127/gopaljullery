// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import EvilEye from "./pages/EvilEye";
import OfferPromotion from "./pages/OfferPromotion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/evil-eye" element={<EvilEye />} />
        <Route path="/offer-promotion" element={<OfferPromotion />} />
      </Routes>
    </Router>
  );
}

export default App;

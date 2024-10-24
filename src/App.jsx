// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import EvilEye from "./pages/EvilEye";
import OfferPromotion from "./pages/OfferPromotion";
import GiftStore from "./pages/GiftStore";
import BestSeller from "./pages/BestSeller";
import SingleProduct from "./pages/SingleProduct"
import BrandStory from "./pages/BrandStory";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermCondition from "./pages/TermCondition";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckOut";
import Shipping from "./pages/Shiping";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/evil-eye" element={<EvilEye />} />
        <Route path="/offer-promotion" element={<OfferPromotion />} />
        <Route path="/gift-store" element={<GiftStore />} />
        <Route path="/best-seller" element={<BestSeller />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/story" element={<BrandStory />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/term-condition" element={<TermCondition />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shiping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;

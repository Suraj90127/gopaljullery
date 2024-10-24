import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LoginModal from '../Authentication/Login';
import RegisterModal from '../Authentication/Register';
import CartPopup from './CartPopup'; // Import the CartPopup component
import img1 from '../assets/khushboo_a9da7ca0-cf1e-4df7-8491-3cd5e21789b8_x320.webp';

const Header = () => {
  const typewriterRef = useRef(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false); // State for cart popup
  const [cartItems, setCartItems] = useState([]); // State for cart items

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: [
          "Welcome to Khushbu Jewellers",
          "Exclusive Designs Await You!",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
      });
    }
  }, []);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);
  const openRegisterModal = () => {
    setLoginModalOpen(false); // Close login modal first
    setRegisterModalOpen(true); // Open register modal
  };
  const closeRegisterModal = () => setRegisterModalOpen(false);
  const toggleCartPopup = () => setCartPopupOpen(!isCartPopupOpen); // Toggle cart popup

  // Sample cart items for demonstration
  useEffect(() => {
    const sampleItems = [
      { image: img1, name: 'Item 1', price: 29.99 },
      { image: img1, name: 'Item 2', price: 49.99 },
      { image: img1, name: 'Item 3', price: 19.99 },
    ];
    setCartItems(sampleItems);
  }, []);

  return (
    <div>
      {/* Top Header */}
      <div className="h-[40px] w-full bg-primary flex items-center justify-center">
        <span ref={typewriterRef} className="text-white text-lg font-medium"></span>
      </div>

      {/* Middle header */}
      <header className="w-full bg-white shadow-sm">
        <div className="mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={img1}
                alt="Khushbu Logo"
                width={120}
                height={60}
                className="h-10 w-auto md:h-12"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-grow w-full md:max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-4 pr-10 py-2 border-[2px] border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-primary" onClick={openLoginModal}>
                <FiUser className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-primary relative">
                <FiHeart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="text-gray-700 hover:text-primary relative" onClick={toggleCartPopup}>
                <FiShoppingBag className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-4 overflow-x-auto justify-center hidden md:flex">
            <ul className="flex space-x-4 text-sm whitespace-nowrap">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/collections" className="text-gray-600 hover:text-primary">Shop By Category</Link></li>
              <li><Link to="/evil-eye" className="text-gray-600 hover:text-primary">Evil Eye</Link></li>
              <li><Link to="/collections" className="text-gray-600 hover:text-primary">Latest Collections</Link></li>
              <li><Link to="/offer-promotion" className="text-gray-600 hover:text-primary">Offers & Promotions</Link></li>
              <li><Link to="/gift-store" className="text-gray-600 hover:text-primary">Gift Store</Link></li>
              <li><Link to="/best-seller" className="text-gray-600 hover:text-primary">Bestsellers</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <LoginModal closeModal={closeLoginModal} openRegisterModal={openRegisterModal} />
      )}

      {/* Register Modal */}
      {isRegisterModalOpen && (
        <RegisterModal closeModal={closeRegisterModal} openLoginModal={openLoginModal} />
      )}

      {/* Cart Popup */}
      {isCartPopupOpen && (
        <CartPopup items={cartItems} onClose={toggleCartPopup} />
      )}
    </div>
  );
};

export default Header;

// CartPage.js
import React, { useState } from 'react';
import img1 from "../assets/white_help_1296x.jpg";
import img2 from "../assets/2_1_37b39028-381b-45d0-bbd6-d24974d87c36_360x.webp";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gift Wrap',
      price: 165.13,
      quantity: 1,
      image: img2,
    },
  ]);

  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='bg-[#ecf1f2] overflow-hidden'>
    <Header />
    <div className="mb-6">
        <img src={img1} alt="banner" className="w-full h-auto" />
      </div>
    <div className="font-sans max-w-6xl mx-auto p-6 " >
      

      <table className="w-full mb-6 border-collapse overflow-auto">
        <thead>
          <tr className="border-b border-gray-400">
            <th className="text-left p-3 text-sm md:text-base">Product</th>
            <th className="text-right p-3 text-sm md:text-base">Price</th>
            <th className="text-right p-3 text-sm md:text-base">Quantity</th>
            <th className="text-right p-3 text-sm md:text-base">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b border-gray-400">
              <td className="flex items-center p-3 text-sm">
                <img src={item.image} alt={item.name} className="h-10 w-10 md:w-20 md:h-20 mr-4" />
                {item.name}
              </td>
              <td className="text-right p-3 text-sm">Rs.{item.price.toFixed(2)}</td>
              <td className="text-right p-3">
                <div className="flex items-center justify-end space-x-2">
                  <input type="text" value={item.quantity} className="w-8 md:w-12 text-center" readOnly />
                  <div className="flex flex-col">
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-sm px-1 py-1"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-sm px-1 py-1"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </td>
              <td className="text-right p-3 text-sm">Rs.{(item.price * item.quantity).toFixed(2)}</td>
              <td className="text-right p-3">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-lg font-bold cursor-pointer"
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="bg-primary text-white px-4 py-2 mb-10">
        CLEAR CART
      </button>

      <div className="flex flex-col md:flex-row justify-between gap-5 space-y-8 md:space-y-0">
        {/* Shipping Estimate Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-bold mb-4">GET SHIPPING ESTIMATES</h2>
          <div className="mb-4">
            <label className="block mb-2">Country</label>
            <select
              className="w-full p-2 border-[1px] border-gray-300"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select a country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Province</label>
            <select
              className="w-full p-2 border-[1px] border-gray-300"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="">Select a province</option>
              <option value="andaman">Andaman and Nicobar Islands</option>
              <option value="andra">Andhra Pradesh</option>
              <option value="arunachal">Arunachal Pradesh</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Zip/Postal Code</label>
            <input
              type="text"
              className="w-full p-2 border-[1px] border-gray-300"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="Enter zip/postal code"
            />
          </div>

          <button className="bg-primary text-white px-4 py-2 ">
            CALCULATE SHIPPING
          </button>
        </div>

        {/* Cart Totals Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-bold mb-4">CART TOTALS</h2>
          <div className="flex justify-between mb-4">
            <span>Cart Totals</span>
            <span>Rs.{total.toFixed(2)}</span>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Coupon:</label>
            <input
              type="text"
              className="w-full p-2 border-[1px] focus:border-[1px] border-gray-300"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Coupon code"
            />
          </div>

          <p className="text-sm text-gray-600 mb-4">
            * The final price with your coupon code will apply in Checkout page
          </p>

          <Link to="/checkout">
          <button className="bg-primary text-white px-4 py-2 w-full">
            PROCEED TO CHECKOUT
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default CartPage;

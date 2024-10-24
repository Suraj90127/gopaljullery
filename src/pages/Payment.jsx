import React, { useState } from 'react';
import img from '../assets/khushboo_a9da7ca0-cf1e-4df7-8491-3cd5e21789b8_x320.webp';
import img1 from '../assets/upi.CmgCfll8.svg';
import img2 from '../assets/master.CzeoQWmc.svg';
import img3 from '../assets/netbanking.C9e9yzjv.svg';
import img4 from '../assets/visa.sxIq5Dot.svg';
import { AiOutlineRight, AiOutlineLeft, AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaCcAmazonPay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Payment() {
  const [discountCode, setDiscountCode] = useState('');
  const [billingAddress, setBillingAddress] = useState('same'); // State for billing address selection
  const [country, setCountry] = useState('Pakistan');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('59320');
  const [phone, setPhone] = useState('');

  const products = [
    {
      id: 1,
      name: "Beautiful Gold Pink Gem Nosepin",
      price: 99.00,
      quantity: 1,
      image: img,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex flex-col items-center flex-1 overflow-y-auto md:p-12">
        <img src={img} alt="Logo" className="mb-8 h-10 w-10" />
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2">
            <li>Cart</li>
            <AiOutlineRight className="w-3 text-gray-500 h-3" />
            <li>Information</li>
            <AiOutlineRight className="w-3 text-gray-500 h-3" />
            <li>Shipping</li>
            <AiOutlineRight className="w-3 text-gray-500 h-3" />
            <li>Payment</li>
          </ol>
        </nav>

        <div className="w-full md:w-[80%] lg:w-[70%] mx-auto">
          <div className="p-4">
            <div className="grid grid-cols-1 border-[1px] p-4 rounded">
              <div className="flex justify-between items-center border-b p-2">
                <p className="text-gray-500 text-sm">Contact</p>
                <p className="text-black text-[10px] md:text-sm">rehmanmuhammd704@gmail.com</p>
                <button className="text-gray-900 underline text-[12px] md:text-sm">Change</button>
              </div>
              <div className="flex justify-between items-center p-2">
                <p className="text-gray-500 text-sm">Ship to</p>
                <p className="text-black text-[10px] md:text-sm">Near DHQ, Lodhran 59320, Pakistan</p>
                <button className="text-gray-900 underline text-[12px] md:text-sm">Change</button>
              </div>
              <div className="flex justify-between items-center p-2">
                <p className="text-gray-500 text-sm">Shipping method</p>
                <p className="text-black text-[10px] md:text-sm">Standard Shipping</p>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-[500] mb-4 text-gray-800">Payment</h2>
              <p className="text-gray-500">All transactions are secure and encrypted.</p>
              <div className="flex items-center justify-between mb-4 border border-black bg-[#f5f6ff] p-2 rounded">
                <div className="flex space-x-2 justify-between">
                  <span className="text-gray-800 font-[500] text-[10px] md:text-sm">
                    Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                  </span>
                </div>
                <div className="md:flex space-x-2 items-center hidden">
                  <img src={img1} alt="UPI Logo" className="w-8 h-8" />
                  <img src={img2} alt="VISA Logo" className="w-8 h-8" />
                  <img src={img3} alt="Mastercard Logo" className="w-8 h-8" />
                  <img src={img4} alt="Rupay Logo" className="w-8 h-8" />
                  <span className="text-gray-800 text-[12px] font-[500] border px-1">+17</span>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-center bg-[#f4f4f4] pb-4 px-2">
                <div className="mb-4">
                  <FaCcAmazonPay className="text-[200px] text-gray-400" />
                </div>
                <p className="text-gray-500 text-[10px] md:text-sm">
                  After clicking "Pay now", you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking)
                  to complete your purchase securely.
                </p>
              </div>

              <h3 className="text-lg font-[500] mb-2 text-gray-800 mt-5">Billing address</h3>
              <p className="text-gray-500 text-sm mb-4">Select the address that matches your card or payment method.</p>

              {/* Billing Address Selection */}
              <div className="flex items-center space-x-4 p-3 border border-black">
                <input
                  type="radio"
                  name="billingAddress"
                  value="same"
                  checked={billingAddress === 'same'}
                  onChange={() => setBillingAddress('same')}
                />
                <label htmlFor="same" className="text-gray-800 font-semibold">Same as shipping address</label>
              </div>
              <div className="flex items-center space-x-4 p-3 border border-black mt-2">
                <input
                  type="radio"
                  name="billingAddress"
                  value="different"
                  checked={billingAddress === 'different'}
                  onChange={() => setBillingAddress('different')}
                />
                <label htmlFor="different" className="text-gray-800 font-semibold">Use a different billing address</label>
              </div>

              {/* Conditionally Render Different Billing Address Form */}
              {billingAddress === 'different' && (
                <div className="space-y-4 mt-4">
                  <select
                    className="w-full p-2 border"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Pakistan</option>
                  </select>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-1/2 p-2 border"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-1/2 p-2 border"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full p-2 border"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-full p-2 border"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                  />
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="w-1/2 p-2 border"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Postal code"
                      className="w-1/2 p-2 border"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="w-full p-2 border"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <AiOutlineQuestionCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <Link to="/shiping">
                <button className="flex items-center text-primary">
                  <AiOutlineLeft className="w-4 h-4 mr-1" />
                  Return to Information
                </button>
              </Link>
              <button className="bg-primary text-white px-6 py-2">Pay Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block bg-gray-100 w-1/3 p-6 md:p-12 sticky top-0 h-screen overflow-y-auto">
        <div className="mb-6">
          {products.map((product) => (
            <div key={product.id} className="flex items-center mb-4">
              <div className="relative">
                <img src={product.image} alt={product.name} width={64} height={64} className="rounded" />
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {product.quantity}
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-[500]">{product.name}</h3>
                <p className="text-gray-600">₹{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Discount code or gift card"
              className="flex-1 p-2 border"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button className="bg-gray-200 text-gray-600 px-4 py-2">Apply</button>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="flex items-center">
                Shipping
                <AiOutlineQuestionCircle className="w-4 h-4 ml-1 text-gray-400" />
              </span>
              <span>₹3,000.00</span>
            </div>
            <div className="flex justify-between font-[500] text-lg mt-4">
              <span>Total</span>
              <span>
                <span className="text-sm text-gray-600 mr-1">INR</span>₹
                {(products.reduce((acc, product) => acc + product.price * product.quantity, 0) + 3000).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

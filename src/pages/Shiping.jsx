import React, { useState } from 'react';
import img from '../assets/khushboo_a9da7ca0-cf1e-4df7-8491-3cd5e21789b8_x320.webp';
import { AiOutlineRight, AiOutlineLeft, AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Shipping() {

  const [discountCode, setDiscountCode] = useState('');
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
      <div className="flex flex-col items-center flex-1 overflow-y-auto py-6 md:p-12">
        <img src={img} alt="Logo"  className="mb-8 h-10 w-10" />
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
        <div className="p-4 ">
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
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-[500] mb-2">Shipping Method</h3>
        <div className='flex justify-between items-start p-4 border-[1px] border-black rounded-lg bg-[#f5f6ff]'>
        <div>
        <p className="text-gray-500">Standard Shipping Charges</p>
        <p className="text-gray-500">Made to order</p>
        </div>
        <p className="text-black font-semibold">₹3,000.00</p>
        </div>
      </div>
    </div>

          <div className="mt-8 flex justify-between items-center">
          <Link to="/checkout">
            <button className="flex items-center text-primary">
              <AiOutlineLeft className="w-4 h-4 mr-1" />
              Return to Information
            </button>
            </Link>
            <Link to="/payment">
            <button className="bg-primary text-white px-6 py-2">
              Continue to Payment
            </button>
            </Link>
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

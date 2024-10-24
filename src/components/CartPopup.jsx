// CartPopup.js
import React from 'react';
import { Link } from 'react-router-dom';

const CartPopup = ({ items, onClose }) => {
  return (
    <div className="absolute top-16 right-10 bg-white shadow-lg p-4 min-w-[300px]">
      <h2 className="text-lg font-semibold mb-2">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <img src={item.image} alt={item.name} className="h-10 w-10 object-cover mr-2" />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
      <div className="flex flex-col gap-2 justify-between mt-4">
      <Link to="/cart">
        <button className="bg-gray-500 text-white px-4 py-2 w-full" onClick={onClose}>
          View Cart
        </button>
        </Link>
        <Link to="/checkout">
        <button className="bg-primary text-white px-4 py-2 w-full">
          Checkout
        </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPopup;

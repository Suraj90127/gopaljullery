import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

const RegisterModal = ({ closeModal, openLoginModal }) => {

    const handlelogin = () => {
        openLoginModal();
        closeModal();
      };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full relative">
        {/* Close button */}
        <div className="bg-black text-white p-3">
          <button
            className="absolute top-2 right-4 text-2xl text-white hover:text-white"
            onClick={closeModal}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold text-center">REGISTER</h2>
        </div>

        {/* Register Form */}
        <form className="p-8">
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-600">First Name *</label>
            <input
              type="text"
              className="w-full pl-3 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-600">Last Name *</label>
            <input
              type="text"
              className="w-full pl-3 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-600">Email *</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="mb-6 relative">
            <label className="block mb-1 text-gray-600">Password *</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button className="w-full bg-primary text-white py-2  hover:bg-primary/90 transition-all">
            REGISTER
          </button>
        </form>
         {/* Create Account */}
         <div className="text-center px-8 mb-5">
          <p>Already have a account?</p>
          <p className="text-gray-600 text-sm">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
          </p>
          <button onClick={handlelogin} className="text-primary hover:underline">
           Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;

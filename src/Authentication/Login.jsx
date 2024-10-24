import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LoginModal = ({ closeModal, openRegisterModal }) => {
    const handleRegister = () => {
        openRegisterModal();
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
          <h2 className="text-xl font-semibold text-center">SIGN IN</h2>
        </div>

        {/* Sign-in Form */}
        <form className="p-8">
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
            LOGIN
          </button>

          <p className="text-gray-600 mt-4">
            <Link to="#" className="text-gray-600">Forgot your password?</Link>
          </p>
        </form>

        {/* Create Account */}
        <div className="text-center px-8 mb-5">
          <p>No account yet?</p>
          <p className="text-gray-600 text-sm text-justify">
          Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
          </p>
          <button onClick={handleRegister} className="text-primary hover:underline">
            Create An Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

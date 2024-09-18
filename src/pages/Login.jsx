import PropTypes from "prop-types";
import LoginImg from "../assets/LoginImg.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ className = "" }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center lg:flex-row w-full mx-auto min-h-screen bg-white font-poppins ${className}`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-2/5">
        <img
          className="w-full h-auto object-cover rounded-[28px] md:rounded-[20px] lg:rounded-[28px] max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          src={LoginImg}
          alt="Register"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center p-6 lg:p-6">
        <div className="w-full max-w-md">
          <h1 className="text-black text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
            Welcome to Digital Accelerated Learning Pathways
          </h1>

          <div className="bg-lightseagreen-200 rounded-14xl p-4 mb-6">
            <div className="flex justify-between">
              <Link
                to="/login"
                className="no-underline text-white bg-lightseagreen-100 py-2 px-6 rounded-14xl text-lg cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="no-underline text-white py-2 px-6 rounded-lg text-lg cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>

          <form>
            <div className="mb-4">
              <label className="block text-black mb-2">User name</label>
              <input
                type="text"
                placeholder="Enter your User name"
                className="w-full p-3 border border-lightseagreen-100 rounded-xl"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-black mb-2">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your Password"
                className="w-full p-3 border border-lightseagreen-100 rounded-xl"
              />
              <div
                className="absolute inset-y-0 right-0 top-8 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-black">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Remember me
              </label>
              <a href="#" className="text-black text-sm cursor-pointer">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-lightseagreen-100 rounded-xl text-lg cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;

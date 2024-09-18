import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import registerImg from "../assets/RegisterImg.jpg";

const Register = ({ className = "" }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center lg:flex-row w-full mx-auto min-h-screen bg-white font-poppins ${className}`}
    >
      {/* Image Section */}
      {/* <div className="lg:w-2/5 hidden lg:block">
        <img
          className="w-full h-full object-cover lg:rounded-[28px]"
          src={registerImg}
          alt="Register"
        />
      </div> */}
      <div className="w-full md:w-1/2 lg:w-2/5">
        <img
          className="w-full h-auto object-cover rounded-[28px] md:rounded-[20px] lg:rounded-[28px] max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          src={registerImg}
          alt="Register"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center items-center p-6 lg:p-6">
        <div className="w-full max-w-md">
          <h1 className="text-black text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
            Register for Digital Accelerated Learning Pathways
          </h1>

          <div className="bg-lightseagreen-200 rounded-14xl p-4 mb-6">
            <div className="flex justify-between">
              <Link
                to="/login"
                className="no-underline text-white py-2 px-6 rounded-lg text-lg cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="no-underline text-white bg-lightseagreen-100 py-2 px-6 rounded-14xl text-lg cursor-pointer"
              >
                Register
              </Link>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            {/* Email Input */}
            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Username Input */}
            <InputField
              label="User Name"
              type="text"
              placeholder="Enter your User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password Input */}
            <div className="relative mb-4">
              <label className="block text-black mb-2">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-lightseagreen-100 rounded-xl"
              />
              <div
                className="absolute inset-y-0 right-0 top-8 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 bg-lightseagreen-100 rounded-xl text-lg cursor-pointer"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-black mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-lightseagreen-100 rounded-xl"
    />
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Register.propTypes = {
  className: PropTypes.string,
};

export default Register;

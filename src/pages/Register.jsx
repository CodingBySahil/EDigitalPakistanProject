import { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { mainURL } from "../../src/constants/const";

const Register = ({ className = "" }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, username, password };
    console.log("Sent Data:", userData); // Log the sent data

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${mainURL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      console.log("Received Data:", result); // Log the received data

      if (response.ok) {
        setMessage("Registration successful!");
        setUsername("");
        setPassword("");
        setEmail("");
      } else {
        setMessage(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setMessage("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`mx-auto flex min-h-screen w-full flex-col items-center justify-center bg-white font-poppins lg:flex-row ${className}`}>
      <div className="w-full md:w-1/2 lg:w-2/5">
        <img className="h-auto max-h-[400px] w-full rounded-[28px] object-cover md:max-h-[500px] md:rounded-[20px] lg:max-h-[600px] lg:rounded-[28px]" src="RegisterImg.jpg" alt="Register" />
      </div>

      <div className="flex w-full flex-col items-center justify-center p-6 lg:w-2/5 lg:p-6">
        <div className="w-full max-w-md">
          <h1 className="lg:text-4xl mb-6 text-center text-3xl font-bold text-black lg:text-left">Register for Digital Accelerated Learning Pathways</h1>

          <div className="mb-6 rounded-14xl bg-lightseagreen-200 p-4">
            <div className="flex justify-between">
              <Link to="/login" className="text-lg cursor-pointer rounded-14xl px-6 py-2 text-white no-underline hover:bg-lightseagreen-100">Login</Link>
              <Link to="/register" className="text-lg cursor-pointer rounded-14xl bg-lightseagreen-100 px-6 py-2 text-white no-underline">Register</Link>
            </div>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <InputField label="Email Address" type="email" placeholder="Enter your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputField label="User Name" type="text" placeholder="Enter your User Name" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div className="relative mb-4">
              <label className="mb-2 block text-black">Password</label>
              <input type={passwordVisible ? "text" : "password"} placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-lightseagreen-100 p-3" />
              <div className="absolute inset-y-0 right-0 top-8 flex cursor-pointer items-center" onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <button type="submit" className="text-lg w-full cursor-pointer rounded-xl bg-lightseagreen-100 py-3" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
          </form>

          {message && <p className="text-lg mt-4 text-center text-red-600">{message}</p>}
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="mb-2 block text-black">{label}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full rounded-xl border border-lightseagreen-100 p-3" />
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

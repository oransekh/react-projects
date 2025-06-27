import { useState } from "react";
import { FaEnvelope, FaUser, FaKey } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

const User = () => {
  const [Login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-lg shadow-md p-8">
        {/* Tab Buttons */}
        <div className="flex mb-6">
          <button
            onClick={() => setLogin(true)}
            className={`flex-1 py-2  text-white font-bold ${
              Login === true ? "bg-red-600" : "bg-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setLogin(false)}
            className={`flex-1 py-2 text-white font-bold  ${
              Login === false ? "bg-red-600" : " bg-black"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form Fields */}
        {Login ? (
          <form className="space-y-4">
            {/* Email */}
            <div className="flex items-center border rounded">
              <span className="p-3 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded">
              <span className="p-3 text-gray-500">
                <FaKey />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 outline-none"
                required
              />
              <button
                type="button"
                className="p-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-red-600 text-white font-bold py-3 rounded"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            {/* Email */}
            <div className="flex items-center border rounded">
              <span className="p-3 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 outline-none"
                required
              />
            </div>

            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="flex items-center border rounded w-full">
                <span className="p-3 text-gray-500">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 outline-none"
                />
              </div>

              <div className="flex items-center border rounded w-full">
                <span className="p-3 text-gray-500">
                  <FaUser />
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex items-center border rounded">
              <span className="p-3 text-gray-500">
                <FaKey />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 outline-none"
                required
              />
              <button
                type="button"
                className="p-3 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="flex items-center border rounded">
              <span className="p-3 text-gray-500">
                <FaKey />
              </span>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-3 outline-none"
                required
              />
              <button
                type="button"
                className="p-3 text-gray-500"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </button>
            </div>

            {/* Checkboxes */}
            <div className="space-y-2 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-red-600" />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms of Service and Privacy Policy
                  </a>
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-red-600" />
                <span>Subscribe to our newsletter</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-red-600 text-white font-bold py-3 rounded"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default User;

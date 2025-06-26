import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import logo from "../assets/img/logo.png"; // Adjust the path as necessary
const Navbar = () => {
  return (
    <nav className="bg-[#FFFFFF] px-4 py-3 flex items-center justify-between shadow-lg">
      {/* logo */}
      <div className="flex items-center">
        <img className="h-15" src={logo} alt="logo" />
      </div>

      {/* nav-items */}
      <ul className="hidden lg:flex gap-5 text-md">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          {" "}
          <Link to="/TrackOrder">Track You Order</Link>
        </li>
        <li>
          {" "}
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li>
          {" "}
          <Link to="/myaccount">My Account</Link>
        </li>
      </ul>

      {/* login / singup */}
      <div>
        <Link to="/login" className="  px-4 py-2">
          <span className="flex justify-center items-center gap-2">
            <FaUser className="text-xl" />

            <FaHeart className="text-xl hidden lg:block" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

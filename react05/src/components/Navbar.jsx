import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { useWishlist } from "../context/WishlistContexts";

const Navbar = () => {
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-[#FFFFFF] px-4 py-3 flex items-center justify-between shadow-lg">
      {/* logo */}
      <div className="flex items-center">
        <img className="h-15" src={logo} alt="logo" />
      </div>

      {/* nav-items */}
      <ul className="hidden lg:flex gap-5 text-md">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/TrackOrder">Track Your Order</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>

      {/* login / signup / wishlist */}
      <div className="flex gap-5 relative">
        <Link to="/user" className="py-2 text-gray-700">
          <span className="flex justify-center items-center gap-2">
            <FaUser className="text-xl" />
          </span>
        </Link>

        <Link to="/wishlist" className="text-gray-700 py-2 relative">
          <span className="flex justify-center items-center gap-2">
            <FaHeart className="text-xl hidden lg:block" />
          </span>
          {wishlist.length > 0 && (
            <span className="hidden lg:block absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
              {wishlist.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

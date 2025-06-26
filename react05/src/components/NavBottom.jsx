import React from "react";
import { FaBars, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around py-3 z-50 lg:hidden">
      {/* Menu */}
      <div className="flex flex-col items-center text-sm text-gray-700 cursor-pointer">
        <FaBars className="text-xl" />
        <span>Menu</span>
      </div>

      {/* Wishlist */}
      <div className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer">
        <FaHeart className="text-xl" />
        <span>Wishlist</span>
        <span className="absolute -top-1 right-2 bg-pink-600 text-white text-[10px] px-1 rounded-full">
          0
        </span>
      </div>

      {/* Cart */}
      <div className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer">
        <FaShoppingBag className="text-xl" />
        <span>Cart</span>
        <span className="absolute -top-1 right-2 bg-pink-600 text-white text-[10px] px-1 rounded-full">
          0
        </span>
      </div>

      {/* My Account */}
      <div className="flex flex-col items-center text-sm text-gray-700 cursor-pointer">
        <FaUser className="text-xl" />
        <span>My account</span>
      </div>
    </div>
  );
};

export default BottomNav;

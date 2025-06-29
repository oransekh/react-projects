import React, { useState, useEffect } from "react";
import { FaBars, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/WishlistContexts";
import Leftsidebar from "./Leftsidebar";

const NavBottom = () => {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const [showSidebar, setShowSidebar] = useState(false);

  // Optional: Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = showSidebar ? "hidden" : "auto";
  }, [showSidebar]);

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around py-3 z-50 lg:hidden">
        {/* Menu */}
        <div
          onClick={() => setShowSidebar(true)}
          className="flex flex-col items-center text-sm text-gray-700 cursor-pointer"
        >
          <FaBars className="text-xl" />
          <span>Menu</span>
        </div>

        {/* Wishlist */}
        <div
          onClick={() => navigate("/wishlist")}
          className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer"
        >
          <FaHeart className="text-xl" />
          <span>Wishlist</span>
          {wishlist.length > 0 && (
            <span className="absolute -top-1 right-2 bg-pink-600 text-white text-[10px] px-1 rounded-full">
              {wishlist.length}
            </span>
          )}
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

      {/* Sidebar + Backdrop */}
      {showSidebar && (
        <div className="fixed inset-0 z-[60]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-opacity-40"
            onClick={() => setShowSidebar(false)}
          />

          {/* Sidebar with Slide-in Animation */}
          <div>
            <Leftsidebar closeSidebar={() => setShowSidebar(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBottom;

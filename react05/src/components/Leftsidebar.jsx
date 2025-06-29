import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Leftsidebar = ({ closeSidebar }) => {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Track Your Order", path: "/trackorder" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <div className="w-full max-w-xs bg-white shadow-md h-screen p-4 lg:hidden">
      {/* Search Bar */}
      <div className="flex items-center border-b pb-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products"
          className="flex-1 outline-none text-gray-700 placeholder-gray-500"
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Navigation Items */}
      <ul className="mt-6 space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              onClick={closeSidebar} // 👈 Close sidebar on click
              className={`block py-2 border-b ${
                location.pathname === item.path
                  ? "text-pink-600 font-semibold"
                  : "text-gray-800"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leftsidebar;

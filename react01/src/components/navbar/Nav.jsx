import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg  flex items-center justify-between p-4 bg-white">
      {/* Logo */}
      <div className="text-xl font-bold">Logo</div>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hamburger Icon */}
      {!menuOpen && (
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 p-6  flex flex-col justify-center items-center space-y-6 shadow-lg">
          <button
            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-xl font-semibold text-gray-700 hover:text-blue-600 transition duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;

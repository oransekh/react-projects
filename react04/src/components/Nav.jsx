import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
const Nav = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">My Website</h1>
      <ul className="flex space-x-4">
        <li>
          <Link to="/home" className="hover:underline">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="hover:underline">
            about
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

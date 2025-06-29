// src/pages/UserDashboard.jsx
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  FaClipboardList,
  FaDownload,
  FaMapMarkedAlt,
  FaUserCircle,
  FaGift,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";

const sideMenu = [
  { name: "Orders", path: "/user/orders", icon: <FaClipboardList /> },
  { name: "Downloads", path: "/user/downloads", icon: <FaDownload /> },
  { name: "Addresses", path: "/user/addresses", icon: <FaMapMarkedAlt /> },
  { name: "Account details", path: "/user/account", icon: <FaUserCircle /> },
  { name: "My Coupons", path: "/user/coupons", icon: <FaGift /> },
  { name: "Wishlist", path: "/wishlist", icon: <FaHeart /> },
  { name: "Logout", path: "/logout", icon: <FaSignOutAlt /> },
];

const UserDashboard = () => {
  const location = useLocation();
  return (
    <div className="w-full h-full bg-gray-100 p-6 flex flex-col lg:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white rounded shadow p-4">
        <h2 className="text-lg font-bold mb-4">MY ACCOUNT</h2>
        <ul className="space-y-2">
          {sideMenu.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                  location.pathname === item.path
                    ? "bg-gray-200 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                <span className="text-gray-600">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 bg-white rounded shadow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sideMenu
            .filter((item) => item.name !== "Logout")
            .map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center border rounded p-6 text-gray-700 hover:shadow"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <span className="font-medium text-center">{item.name}</span>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;

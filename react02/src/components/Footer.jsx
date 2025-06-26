import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10  px-10 ">
      <div className="grid md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">Yolopment</h2>
          <p className="mt-4 text-gray-400 text-sm max-w-sm">
            We craft amazing digital products and services that empower businesses and delight users.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white text-lg"><FaFacebookF /></a>
            <a href="#" className="hover:text-white text-lg"><FaTwitter /></a>
            <a href="#" className="hover:text-white text-lg"><FaInstagram /></a>
            <a href="#" className="hover:text-white text-lg"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Yolopment. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

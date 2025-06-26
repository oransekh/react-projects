import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/img/logo.png"; // Adjust the path as necessary
import SubFooter from "./SubFooter"; // Assuming you have a SubFooter component
const Footer = () => {
  return (
    <section>
      <footer className="bg-white text-black px-6 py-10 border-t">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Logo and Description */}
          <div className="md:col-span-1 space-y-4">
            <img
              src={logo} // replace with your actual logo path
              alt="Desi Tesi"
              className="w-20"
            />
            <p className="text-sm leading-relaxed">
              Desi Tesi is a homegrown food startup bringing authentic,
              preservative-free Bihari snacks to modern Indian homes.
            </p>
            <div>
              <h4 className="font-bold">Social Links</h4>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="bg-blue-600 text-white p-2 rounded">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="bg-black text-white p-2 rounded">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold border-b-2 border-pink-500 inline-block mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Cancellation and Refund</li>
              <li>Shipping and Delivery</li>
              <li>Contact Us</li>
              <li>Track Your Order</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold border-b-2 border-pink-500 inline-block mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Track Your Order</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Our Partners</li>
              <li>Work With Us</li>
              <li>Our Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold border-b-2 border-pink-500 inline-block mb-4">
              Contact Us
            </h4>
            <p className="text-sm">
              Desi Tesi <br />
              Borpathar, Basistha mandir, near lp school, <br />
              781029 Guwahati AS, India <br />
              Email:{" "}
              <a
                href="mailto:namastedesitesi@gmail.com"
                className="text-blue-600 font-medium"
              >
                namastedesitesi@gmail.com
              </a>
            </p>
          </div>

          {/* Map */}
          <div className="w-full">
            <iframe
              title="Desi Tesi Location"
              src="https://www.google.com/maps?q=Basistha%20Mandir,%20Guwahati&output=embed"
              width="100%"
              height="200"
              className="rounded-xl border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </footer>
      <SubFooter />
    </section>
  );
};

export default Footer;

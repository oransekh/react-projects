import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row w-full  p-6 lg:p-12">
        {/* Left Info Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-gray-800">
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold">CALL US</h3>
              <p>1 (234) 567-891, 1 (234) 987-654</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold">LOCATION</h3>
              <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-orange-500 mt-1" />
            <div>
              <h3 className="font-bold">BUSINESS HOURS</h3>
              <p>Mon – Fri ...... 10 am – 8 pm, Sat, Sun ........ Closed</p>
            </div>
          </div>

          <p className="text-sm">
            Image from{" "}
            <a
              href="https://www.freepik.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-md shadow-md mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Enter a valid email address"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              rows="4"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

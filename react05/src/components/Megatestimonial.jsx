import React from "react";
import { FaHeart, FaHandshake, FaLightbulb } from "react-icons/fa";
import { IoMdClose, IoMdVolumeHigh } from "react-icons/io";

const Megatestimonial = ({ person, setClicked }) => {

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto mt-10 ">
      {/* Audio Icon */}
      <button className="absolute top-15 left-4 bg-white p-2 rounded-full shadow">
        <IoMdVolumeHigh size={20} />
      </button>

      {/* Close Icon */}
      <button onClick={() => {setClicked(false)}} className="absolute top-15 right-4 bg-white p-2 rounded-full shadow">
        <IoMdClose size={20} />
      </button>

      {/* Image */}
      <div className="md:w-1/2 w-full">
        <img
          src={person.img}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="md:w-1/2 w-full p-6 flex flex-col gap-4">
        <div>
          <h2 className="text-3xl font-bold">{person.name}</h2>
          <p className="text-gray-500">CFP® Professional</p>
        </div>

        <p className="text-gray-700 text-[15px] leading-relaxed">
          {person.bio}
        </p>

        <div>
          <p className="font-medium text-gray-700 mb-2">Colin's style</p>
          <div className="flex flex-wrap gap-3">
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-black rounded-full">
              <FaHeart className="text-pink-500" /> Empathetic
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-black rounded-full">
              <FaHandshake className="text-yellow-500" /> Collaborative
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-black rounded-full">
              <FaLightbulb className="text-green-500" /> Resourceful
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megatestimonial;

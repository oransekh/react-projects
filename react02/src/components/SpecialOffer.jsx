import React from "react";
import img1 from "../assets/shoe1.png";
import img2 from "../assets/shoe2.png";
import img3 from "../assets/shoe3.png";

const SpecialOffer = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 gap-10">
      {/* Left: Images Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 relative max-w-sm">
        <img
          src={img1}
          alt="Shoe 1"
          className="w-full h-full object-cover rounded-xl col-span-1 row-span-1"
        />
        <img
          src={img2}
          alt="Shoe 2"
          className="w-full h-full object-cover rounded-xl col-span-1 row-span-1"
        />
        <img
          src={img3}
          alt="Shoe 3"
          className="w-full h-full object-cover rounded-xl col-span-2 row-span-1"
        />

        {/* 30% OFF badge */}
        <div className="absolute bottom-4 left-4 bg-black text-white w-20 h-20 rounded-full flex items-center justify-center text-sm font-semibold border-4 border-white shadow-md">
          <div className="text-center">
            30%
            <br />
            OFF
          </div>
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-[10px] font-light rotate-[270deg] tracking-widest text-gray-400">
            from Nike you can get the offer!
          </div>
        </div>
      </div>

      {/* Right: Text and Buttons */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-4xl font-bold">
          <span className="text-red-500">Special</span> Offer
        </h2>
        <p className="mt-4 text-gray-600 text-base">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-4 text-gray-600 text-base">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-600 transition">
            View details
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-300 transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

import React from "react";
import img2 from "../assets/shoe2.png";
import Button from "./Button";
const SuperQulity = () => {
  return (
    <section className="px-5 sm:px-10 pt-20 sm:pt-28">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-12 items-center">
        {/* Text Section */}
        <div className="w-full max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            We Provide You{" "}
            <span className="text-orange-500">Super Quality</span> Products
          </h1>
          <p className="pt-5 text-gray-500 text-base sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
            beatae, nam impedit dolore delectus reiciendis. Soluta numquam
            commodi, exercitationem maiores nisi corporis aut optio quod est,
            pariatur labore error.
          </p>
          <div className="mt-6">
            <Button label="View Details" />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center items-center shadow-lg rounded-2xl p-4 bg-white">
          <img
            src={img2}
            alt="Product"
            className="w-full h-full max-h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SuperQulity;

import React, { useState, useEffect } from "react";

const Buycard = ({ isClicked }) => {
  const [selectedImage, setSelectedImage] = useState(isClicked?.img || "");
  const [quantity, setQuantity] = useState(1);

  // Update main image if product changes
  useEffect(() => {
    if (isClicked) {
      setSelectedImage(isClicked.img);
    }
  }, [isClicked]);

  return (
    <div className="fixed inset-0 z-50  bg-opacity-60 overflow-auto">
      {/* Close Button */}
      <button
        onClick={() => setIsClicked(false)}
        className="absolute top-5 right-5 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 z-50"
      >
        ✕
      </button>

      {/* Card Container */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start bg-white rounded-xl mt-16 shadow-lg">
        {/* Thumbnail Gallery */}
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
          <img
            src={isClicked.img}
            alt="thumb"
            onClick={() => setSelectedImage(isClicked.img)}
            className="w-20 h-20 object-cover cursor-pointer rounded-md border hover:border-pink-500"
          />
          {/* Add more thumbnails if you have array */}
        </div>

        {/* Main Product Image */}
        <div className="relative w-full flex justify-center items-center">
          <img
            src={selectedImage}
            alt="Main Product"
            className="rounded-xl shadow-xl object-contain max-h-[450px]"
          />
          <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
            -{isClicked.discount}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">{isClicked.name}</h2>

          <div className="text-lg">
            <span className="line-through text-gray-400 mr-2">
              ₹{isClicked.originalPrice}
            </span>
            <span className="text-pink-600 font-bold text-2xl">
              ₹{isClicked.discountedPrice}
            </span>
          </div>

          <div className="text-yellow-500 flex items-center gap-1">
            {"⭐".repeat(isClicked.rating)}{" "}
            <span className="text-gray-600">(3 customer reviews)</span>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex gap-3 items-center">
            <div className="flex border rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>

            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md font-semibold">
              Add To Cart
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-md font-semibold">
              Buy Now
            </button>
          </div>

          {/* Wishlist + Compare */}
          <div className="flex gap-6 text-sm text-gray-600 mt-2">
            <span className="cursor-pointer">↔ Add to compare</span>
            <span className="cursor-pointer">♡ Add to wishlist</span>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Checkout securely with</p>
            <div className="flex items-center gap-4">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="Mastercard" className="h-6" />
              <img src="/gpay.png" alt="GPay" className="h-6" />
              <img src="/paytm.png" alt="Paytm" className="h-6" />
              <span className="text-xs font-bold">CASH ON DELIVERY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buycard;

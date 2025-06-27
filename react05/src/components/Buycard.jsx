import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../product/productList";
import NotFound from "./NotFound";

const Buycard = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(product?.img);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // if (!product) return <NotFound />;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left: Main Image with Thumbnails overlay */}
      <div className="relative w-full flex justify-center items-center rounded-xl p-4 shadow-xl bg-[#fff8f1]">
        {/* Main Product Image */}
        <img
          src={selectedImage}
          alt="Main Product"
          className="rounded-xl object-contain max-h-[550px] w-full"
        />

        {/* Discount Tag */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          -{product.discount}
        </div>

        {/* Decorative Icons */}
        <div className="absolute left-6 top-6 text-4xl opacity-20 select-none">
          ✨
        </div>
        <div className="absolute bottom-6 left-6 text-4xl opacity-20 select-none">
          💥
        </div>

        {/* Responsive Thumbnails Overlay */}
        <div
          className="absolute -bottom-4 sm:-bottom-10 left-1/2 transform -translate-x-1/2 
                lg:bottom-auto lg:top-1/2 lg:left-4 lg:-translate-y-1/2 
                flex items-center justify-center lg:items-start lg:flex-col 
                gap-3  p-2 rounded-md shadow-md"
        >
          {(product.thumbnails || [product.img]).map((thumb, i) => (
            <img
              key={i}
              src={thumb}
              alt={`thumb-${i}`}
              onClick={() => setSelectedImage(thumb)}
              className={`w-[80px] h-[80px] object-cover cursor-pointer rounded border ${
                selectedImage === thumb
                  ? "border-pink-600"
                  : "hover:border-pink-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="space-y-5">
        <h2 className="text-3xl font-bold">{product.name}</h2>

        {/* Price */}
        <div className="text-lg">
          <span className="line-through text-gray-400 mr-2">
            ₹{product.originalPrice}
          </span>
          <span className="text-pink-600 font-bold text-2xl">
            ₹{product.discountedPrice}
          </span>
        </div>

        {/* Rating */}
        <div className="text-yellow-500 flex items-center gap-1">
          {"⭐".repeat(product.rating)}
          <span className="text-gray-600">(3 reviews)</span>
        </div>

        {/* Quantity and Buttons */}
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

        {/* Compare / Wishlist */}
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
  );
};

export default Buycard;

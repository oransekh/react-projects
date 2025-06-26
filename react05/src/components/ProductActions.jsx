import React, { useState } from "react";
import { FaRandom, FaSearch, FaHeart } from "react-icons/fa";

const ProductActions = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="absolute top-5 right-5 bg-white rounded-lg p-2 flex flex-col gap-3 shadow-md z-10">
      {/* Random Button with Tooltip */}
      <div
        onMouseEnter={() => setHovered("cart")}
        onMouseLeave={() => setHovered(null)}
        className="hover:text-red-500 relative"
      >
        <FaRandom />
        {hovered === "cart" && (
          <div className="absolute -left-22 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow z-50">
            Add to Cart
          </div>
        )}
      </div>

      {/* Search Icon */}
      <div
        onMouseEnter={() => setHovered("view")}
        onMouseLeave={() => setHovered(null)}
        className="hover:text-blue-500 relative"
      >
        <FaSearch />
        {hovered === "view" && (
          <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow z-50">
            View Product
          </div>
        )}
      </div>

      {/* Heart Icon */}
      <div
        onMouseEnter={() => setHovered("wishlist")}
        onMouseLeave={() => setHovered(null)}
        className="hover:text-pink-500 relative"
      >
        <FaHeart />
        {hovered === "wishlist" && (
          <div className="absolute -left-27 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow z-50">
            Add to Wishlist
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductActions;

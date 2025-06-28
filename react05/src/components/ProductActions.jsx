import React, { useState } from "react";
import { FaRandom, FaSearch, FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContexts";

const ProductActions = ({ product }) => {
  const [hovered, setHovered] = useState(null);
  const { toggleWishlist, wishlist } = useWishlist();

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="absolute top-5 right-5 bg-white rounded-lg p-2 flex flex-col gap-3 shadow-md z-10">
      {/* Add to Cart */}
      <div
        onMouseEnter={() => setHovered("cart")}
        onMouseLeave={() => setHovered(null)}
        className="hover:text-red-500 relative cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          alert("Add to cart: " + product.name);
        }}
      >
        <FaRandom />
        {hovered === "cart" && (
          <span className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow z-50">
            Add to Cart
          </span>
        )}
      </div>

      {/* View Product */}
      <div
        onMouseEnter={() => setHovered("view")}
        onMouseLeave={() => setHovered(null)}
        className="hover:text-blue-500 relative cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          alert("View product: " + product.name);
        }}
      >
        <FaSearch />
        {hovered === "view" && (
          <span className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow z-50">
            View Product
          </span>
        )}
      </div>

      {/* Toggle Wishlist */}
      <div
        onMouseEnter={() => setHovered("wishlist")}
        onMouseLeave={() => setHovered(null)}
        className={`relative cursor-pointer hover:text-pink-500 ${
          isInWishlist ? "text-pink-500" : "text-gray-500"
        }`}
        onClick={handleToggleWishlist}
      >
        <FaHeart />
        {hovered === "wishlist" && (
          <span className="absolute -left-28 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow z-50">
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductActions;

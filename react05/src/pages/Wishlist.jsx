import React from "react";
import { useWishlist } from "../context/WishlistContexts";

const Wishlist = () => {
  const { wishlist, removefromw } = useWishlist();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-red-600 font-bold">₹{item.discountedPrice}</p>
              <button onClick={() => removefromw(item.id)}>close</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

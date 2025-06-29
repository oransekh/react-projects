import React from "react";
import { useWishlist } from "../context/WishlistContexts";

const Cart = () => {
  const { cart, removeFromCart } = useWishlist();
console.log(cart)
  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <div className="h-screen flex items-center justify-center">
          No product added
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>{" "}
          {/* ✅ OUTSIDE grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded shadow">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-red-600 font-bold">
                  ₹{item.discountedPrice}
                </p>
                <p>Quantity: {item.quantity}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-2 text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

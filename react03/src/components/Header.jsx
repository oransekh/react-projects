import React, { useContext } from "react";
import { ProductContext } from "../App";

function Header() {
  const products = useContext(ProductContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      {products.length === 0 ? (
        <div className="flex justify-center items-center text-center h-screen w-full bg-white">
          <p className="text-lg font-semibold animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-6 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow bg-white text-center"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-green-700 font-bold">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;

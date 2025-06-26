import { products } from "../product/productList";
import ProductAction from "./ProductActions";
import { useState } from "react";
import Buycard from "./Buycard";

const Products = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  function productClick(product) {
    setIsClicked(product);
  }

  if (isClicked) {
    return <Buycard isClicked={isClicked} />;
  }

  return (
    <section className="px-4 py-10">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 w-full max-w-screen pb-15">
          {products.map((product) => (
            <div
              onClick={() => productClick(product)}
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center transition-transform hover:scale-105 relative"
            >
              <div>{isHovered === product.id ? <ProductAction /> : ""}</div>

              <div className="w-full mb-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-center">{product.name}</h2>
              <span className="flex gap-2.5 py-1">
                <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                <p className="text-red-600 font-bold">₹{product.discountedPrice}</p>
              </span>
              <p className="text-yellow-500 text-sm">{"⭐".repeat(product.rating)}</p>

              <span className="absolute top-5 left-5 bg-red-500 rounded-full h-15 w-15 flex items-center justify-center">
                <p className="text-white text-center text-sm font-bold">
                  ({product.discount} OFF)
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

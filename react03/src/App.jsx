import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header"; // or ProductList.jsx, etc

// Create context
const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); // store only the array
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <main className="p-4">
        <Header />
      </main>
    </ProductContext.Provider>
  );
}

export default App;
export { ProductContext };

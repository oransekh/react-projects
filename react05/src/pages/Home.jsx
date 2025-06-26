import React from "react";
import Hero from "../assets/img/download.jpeg";
import Products from "../components/Products";
import Testimonial from "../components/Testimonial";
import Buycard from "../components/Buycard";
const Home = () => {
  return (
    <main>
      {/* hero-section */}
      <section className=" mx-auto">
        <div>
          <img src={Hero} alt="" />
        </div>
      </section>

      {/*productlisting*/}
      <section className="mx-auto">
        <Products />
      </section>

      <section className="mx-auto">
        <Testimonial />
      </section>
    </main>
  );
};

export default Home;

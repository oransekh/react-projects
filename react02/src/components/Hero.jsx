import Button from "./Button";
import Shoes from "./Shoes";
import img1 from "../assets/shoe1.png";
import img2 from "../assets/shoe2.png";
import img3 from "../assets/shoe3.png";
import { useState } from "react";
import "../index.css";

const images = [img1, img2, img3];
const Hero = () => {
  const [Bigshoes, setBigShoe] = useState(images[0]);

  return (
    <div>
      <section
        id="hero"
        className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-10 pt-15"
      >
        {/* Left Text Content */}
        <div className="relative lg:w-2/5 flex justify-center items-start flex-col w-full px-10 pt-10">
          <p className="text-xl font-montserrat text-orange-600">
            Our Summer Collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-6xl max-sm:leading-[82px] font-bold z-50">
            <span className="lg:bg-white lg:whitespace-nowrap">
              The new Arrivals
            </span>
            <br />
            <span className="text-orange-500">Nike</span>
            Shoes
          </h1>

          <p className="text-gray-500 mt-4">
            Discover the latest Nike shoes with our new summer collection. Step
            into style and comfort with every stride.
          </p>
          <Button />
        </div>

        {/* Right Shoe Image */}
        <div className="flex flex-1 justify-end items-center relative">
          <img
            src={Bigshoes}
            alt="Nike Shoe"
            className="z-10 relative object-contain"
            width={610}
            height={500}
          />

          <div className="sm:flex sm:gap-5 space-y-4 absolute -bottom-[50%]  z-10 ">
            {images.map((img) => (
              <div key={img}>
                <Shoes
                  imgUrl={img}
                  ChangeBigShoesImg={setBigShoe}
                  Bigshoes={Bigshoes}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

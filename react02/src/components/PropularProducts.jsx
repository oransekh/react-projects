import Productcard from "./Productcard";
import img1 from "../assets/shoe1.png";
import img2 from "../assets/shoe2.png";
import img3 from "../assets/shoe3.png";
import img from "../assets/shoe2.png";

const Products = [
  {
    img: img1,
    name: "Nike Air Max",
    price: "₹5,999",
  },
  {
    img: img2,
    name: "Adidas Ultra Boost",
    price: "₹6,499",
  },
  {
    img: img3,
    name: "Puma Running",
    price: "₹4,299",
  },
  {
    img: img,
    name: "new shoes",
    price: "₹1,299",
  },
];

const PropularProducts = () => {
  return (
    <section className="px-10 sm:mt-16">
      <div className="flex justify-start flex-col gap-5 max-sm:mt">
        <h2 className="text-4xl font-bold">
          Our <span className="text-orange-500">Popular</span> Products
        </h2>
        <p className="max-w-lg mt-2 font-montserrat text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia in
          tempore amet repellat{" "}
        </p>
      </div>

      {/* products */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-16">
        {Products.map((product, index) => (
          <Productcard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PropularProducts;

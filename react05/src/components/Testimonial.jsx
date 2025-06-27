import React, { useState } from "react";
import team1 from "../assets/img/team1.jpg";
import team2 from "../assets/img/team2.jpg";
import team3 from "../assets/img/team3.jpg";
import team4 from "../assets/img/team4.jpeg";
import team5 from "../assets/img/team5.jpeg";
import team6 from "../assets/img/team6.jpeg";
import Megatestimonial from "./Megatestimonial";
import { useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Roy",
    img: team1,
    p: "This team is incredibly talented and professional. I felt supported at every stage of the project!",
  },
  {
    id: 2,
    name: "John Smith",
    img: team2,
    p: "Working with them was smooth and enjoyable. Great communication and high-quality work.",
  },
  {
    id: 3,
    name: "Emily Carter",
    img: team3,
    p: "I was impressed by their creativity and attention to detail. Highly recommend them!",
  },
  {
    id: 4,
    name: "Alex Walker",
    img: team4,
    p: "Excellent service and super responsive. They really understood what I needed.",
  },
  {
    id: 5,
    name: "Tina Brooks",
    img: team5,
    p: "A friendly and skilled team that made everything feel easy. I’ll definitely come back!",
  },
  {
    id: 6,
    name: "Jake Evans",
    img: team6,
    p: "They exceeded my expectations! Everything was delivered on time and with great care.",
  },
];

const Testimonial = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [clicked, setClicked] = useState(false);

  const selectedPerson = testimonials.find((person) => person.id === clicked);

  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = "hidden"; // Prevent scroll
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [selectedPerson]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="relative mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Meet Our Happy Team
        </h2>

        <div className="flex items-center justify-center ">
          {testimonials.map((person, i) => (
            <div
              onClick={() => setClicked(person.id)}
              onMouseEnter={() => setIsHovered(person.id)}
              onMouseLeave={() => setIsHovered(null)}
              key={person.id}
              className={`relative z-10 transition-transform duration-500 hover:scale-110 hover:z-20 rounded-xl shadow-md ${
                i !== 0 ? "-ml-4" : ""
              } ${
                i === 0
                  ? "-rotate-2"
                  : i === 1
                  ? "rotate-1"
                  : i === 2
                  ? "-rotate-1"
                  : i === 3
                  ? "rotate-1"
                  : i === 4
                  ? "-rotate-1"
                  : "rotate-2"
              }`}
              style={{
                width: "320px",
                height: "320px",
                overflow: "hidden",
              }}
            >
              {isHovered === person.id && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-white bg-opacity-40 w-fit px-4 py-2 rounded-2xl text-center text-gray-700 text-lg font-semibold whitespace-nowrap">
                  {person.name}
                </div>
              )}

              <img
                src={person.img}
                alt={person.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Conditionally render the testimonial below */}
        {selectedPerson && (
          <>
            <div className="fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-40">
              <Megatestimonial
                person={selectedPerson}
                setClicked={setClicked}
              />
            </div>
            <div className="fixed inset-0 bg-opacity-60 z-30" />
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonial;

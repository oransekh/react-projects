
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Amit Sharma",
    message:
      "Amazing product quality and fast delivery. Definitely recommend to all sneaker lovers!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Das",
    message:
      "I’m so happy with my purchase. The shoes are comfortable and stylish!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rahul Mehta",
    message: "Customer service was excellent and the deals were unbelievable!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        What Our <span className="text-orange-500">Customers</span> Say
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <div className="flex text-yellow-400 text-sm">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

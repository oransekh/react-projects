

const Productcard = ({ img, name, price }) => {
  return (
    <div className="shadow-md p-10 rounded-lg hover:scale-105 transition">
      <img src={img} alt={name} className="w-full h-auto mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-orange-500 font-bold">{price}</p>
    </div>
  );
};

export default Productcard;

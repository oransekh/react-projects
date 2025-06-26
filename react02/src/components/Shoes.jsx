const Shoes = ({ imgUrl, ChangeBigShoesImg, Bigshoes }) => {
  const handleImgClick = () => {
    if (Bigshoes !== imgUrl) {
      ChangeBigShoesImg(imgUrl);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer object-cover ${
        Bigshoes === imgUrl ? "border-orange-500" : "border-transparent"
      }`}
      onClick={handleImgClick}
    >
      <div className="flex justify-center items-center sm:w-20 sm:h-30 rounded-lg shadow-lg bg-white">
        <img
          src={imgUrl}
          alt="Shoe"
          className=" object-contain"
          width={100}
          height={70}
        />
      </div>
    </div>
  );
};

export default Shoes;

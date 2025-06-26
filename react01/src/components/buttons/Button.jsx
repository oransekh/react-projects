const Button = () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center md:flex-row sm:justify-center">
      <button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-lg rounded-lg shadow transition duration-300">
        Download
      </button>
      <button className="w-full md:w-auto bg-gray-100 hover:bg-gray-200 text-blue-700 px-6 py-3 text-lg rounded-lg shadow border border-blue-700 transition duration-300">
        Read Docs
      </button>
    </div>
  );
};
export default Button;

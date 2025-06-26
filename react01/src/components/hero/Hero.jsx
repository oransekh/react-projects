import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";
import Slider from "../hero/Slider";

const Hero = () => {
  return (
    <main>
      <div className="min-h-screen lg:flex flex-col pt-20 bg-gradient-to-br from-purple-50 via-orange-50 to-transparent">
        <div className="max-w-4xl mx-auto px-6 pb-32 flex flex-col ">
          <div className="flex my-6 gap-2 lg:self-center-safe items-center border bg-yellow-50 rounded-lg px-3 py-1 w-fit group hover:-translate-y-1 transform duration-300 shadow-md hover:shadow-lg">
            <div className="w-2 h-2 bg-yellow-400 border rounded-full border-yellow-600"></div>
            <p className="font-light">
              v0.21.1: <span>Find-in-page bug fixes</span>
            </p>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 group-hover:translate-x-2 transform duration-200 "
            />
          </div>
          {/* hero text */}
          <h1 className="text-6xl font-bold text-gray-800 lg:text-center lg:text-[6rem] ">
            Web app to desktop <br className="hidden lg:block" /> app in minutes
          </h1>
          <p className="text-lg sm:text-2xl py-10 text-gray-text-gray-700 lg:text-center sm:font-light">
            Take your web app codebase and transform it into <br /> a cross
            Platfrom desktop app with native functionlity
          </p>
          <div className="flex items-center lg:justify-center">
            <Button />
          </div>
        </div>
        <Slider />
      </div>
    </main>
  );
};

export default Hero;

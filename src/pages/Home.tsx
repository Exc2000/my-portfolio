import { useEffect, useState } from "react";
import Orb from "../components/Picture";
import MyPicture from "../assets/my-picture.png";
import "../App.css";
import Project from "../components/Project";
import { FaMailBulk } from "react-icons/fa";

const typingText = ["Software Engineer", "UI/UX Designer", "Tech Enthusiast"];

const Home: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < typingText[loopIndex].length) {
        setCurrentText((prev) => prev + typingText[loopIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setLoopIndex((prev) => (prev + 1) % typingText.length);
          setCurrentText("");
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, loopIndex]);

  return (
    // <div className="min-h-screen md:px-14 md:pt-10 p-6 mt-4 max-w-3xl mx-auto bg-black">
    <div className="min-h-screen md:pt-10 mt-4 max-w-3xl mx-auto bg-black">
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-base font-bold text-gray-200">- {currentText}</p>
        </div>
        <div className="p-1 px-3 bg-gray-500 rounded-full">
          <p className="text-[12px] font-semibold uppercase text-gray-200">
            Open To Work
          </p>
        </div>
      </div>
      <div className="mt-14 flex flex-col-reverse md:flex-row justify-between items-center md:text-left text-center gap-4">
        <div className="flex-1">
          <p className="text-base text-gray-400">Hi there 👋, I am</p>
          <h1 className="text-3xl font-bold my-2 text-gray-200">
            Ali Babagana Musa
          </h1>

          <p className="text-base text-gray-400">
            Hello! I'm a passionate Web Developer, UI/UX Designer, and Tech
            Enthusiast. <br />
            With a strong background in both design and development, I strive to
            bridge the gap between aesthetics and functionality.
          </p>

          <div className="flex md:justify-start justify-center">
            <a
              href="#resume"
              className="w-fit mt-4 flex items-center bg-gray-600 bg-opacity-10 text-white px-2 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-gray-600 hover:bg-opacity-20 hover:text-white transition-all duration-300"
            >
              <FaMailBulk className="text-sm md:text-base" />
              <span className="ml-1 text-sm font-semibold">CONTACT</span>
            </a>
          </div>
        </div>

        <div className="w-[200px] h-[200px] relative flex justify-center items-center">
          {/* Orb (Glowing Effect) */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>

          {/* Centered Image */}
          <img
            src={MyPicture}
            alt="Profile"
            className="absolute w-[150px] h-[150px] object-cover rounded-full mask-image"
          />
        </div>
      </div>
      <Project />
    </div>
  );
};

export default Home;

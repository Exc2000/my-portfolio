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
    <div className="min-h-screen md:pt-10 mt-4 text-[#f8f8f8]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-base font-bold text-[#cbd5e1]">- {currentText}</p>
        </div>
        <div className="p-1 px-3 border bg-[#2d2d2d] bg-opacity-60 rounded-full">
          <p className="text-[12px] font-semibold uppercase text-[#f8f8f8]">
            Open To Work
          </p>
        </div>
      </div>
      <div className="md:mt-14 mt-10 flex flex-col-reverse md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="flex-1">
          <p className="text-base text-gray-400">Hi there 👋, I am</p>
          <h1 className="text-3xl font-bold my-2 text-[#f8f8f8]">
            Ali Babagana Musa
          </h1>
          <div className="text-base text-gray-400">
            <p className="mb-2">
              I'm a passionate Software Engineer, UI/UX Designer, and Tech
              Enthusiast.
            </p>
            <p>
              With a strong background in both design and development, I strive
              to bridge the gap between aesthetics and functionality.
            </p>
          </div>
          <div className="flex md:justify-start justify-center">
            <a
              href="#resume"
              className="w-fit mt-4 flex items-center bg-[#2d2d2d] text-white px-3 py-2 md:px-4 rounded-md hover:bg-[#0000005e] transition-all duration-300"
            >
              <FaMailBulk className="text-sm md:text-base" />
              <span className="ml-1 text-sm font-semibold">CONTACT</span>
            </a>
          </div>
        </div>
        <div className="w-[200px] h-[200px] relative flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
          </div>
          <img
            src={MyPicture}
            alt="Profile"
            className="absolute w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
      </div>
      <Project />
    </div>
  );
};
export default Home;

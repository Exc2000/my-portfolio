import { useEffect, useState } from "react";
import Orb from "../components/Picture";

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
    <div className="min-h-screen md:px-14 md:pt-10 p-6 mt-4 max-w-3xl mx-auto bg-black border-2 border-gray-800 rounded-xl shadow-md ">
      <div className="flex justify-between items-center ">
        <div>
          <p className="text-base font-bold text-gray-200">
            - {currentText}
          </p>
        </div>
        <div className="p-1 px-3 bg-gray-100 rounded-full">
          <p className="text-[12px] font-semibold uppercase text-green-600">
            Open To Work
          </p>
        </div>
      </div>
      <div className="mt-14 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
        <div className="flex-1">
          <p className="text-base text-gray-400">
            Hi there 👋, I am
          </p>
          <h1 className="text-3xl font-bold my-2 text-gray-200">
            Ali Babagana Musa
          </h1>

          <p className="text-base text-gray-400">
            Hello! I'm a passionate Web Developer, UI/UX Designer, and Tech
            Enthusiast.  <br />
            With a strong background in both design and development, I strive to
            bridge the gap between aesthetics and functionality.
          </p>
        </div>
        <div className="w-[150px] flex justify-center items-center rounded-full border h-[150px]">
           
           


            <div className="w-[150px] h-[150px]">
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
</div>


        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import "../App.css";
import {
  FaMailBulk,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const typingText = ["Software Engineer", "UI/UX Designer", "Tech Enthusiast"];

const About: React.FC = () => {
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
          <div className="text-gray-400">
            <p className="md:text-md text-md dark:text-gray-100 text-gray-700 mb-4">
              Hello! I'm a passionate Web Developer, UI/UX Designer, and Tech
              Enthusiast. I love creating beautiful and functional web
              applications that provide an excellent user experience. With a
              strong background in both design and development, I strive to
              bridge the gap between aesthetics and functionality.
            </p>
            <p className="md:text-md text-md dark:text-gray-100 text-gray-700 mb-4">
              My journey in tech started with a curiosity for how things work
              and a desire to build things that can make a difference. Over the
              years, I've honed my skills in various technologies and design
              principles, always staying up-to-date with the latest trends and
              best practices.
            </p>
            <p className="md:text-md text-md dark:text-gray-100 text-gray-700">
              When I'm not coding or designing, you can find me exploring new
              tech gadgets, reading about the latest in tech, or sharing my
              knowledge with the community. I'm always excited to take on new
              challenges and collaborate with like-minded individuals.
            </p>
          </div>
          <div className="flex md:justify-start justify-center gap-4 mt-4">
            <a
              href="#resume"
              className="flex items-center bg-[#2d2d2d] text-white px-3 py-2 md:px-4 rounded-md hover:bg-[#0000005e] transition-all duration-300"
            >
              <FaMailBulk className="text-sm md:text-base" />
              <span className="ml-1 text-sm font-semibold">CONTACT</span>
            </a>
          </div>
          <div className="flex md:justify-start justify-center gap-4 mt-6 text-lg">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

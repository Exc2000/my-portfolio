import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const typingText = ["Software Engineer", "UI/UX Designer", "Tech Enthusiast"];

const Header: React.FC = () => {
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

  const socialLinks = [
    { href: "https://linkedin.com", icon: <FaLinkedin />, color: "text-blue-500 hover:text-blue-400" },
    { href: "https://github.com", icon: <FaGithub />, color: "text-gray-300 hover:text-gray-500" },
    { href: "https://twitter.com", icon: <FaTwitter />, color: "text-blue-400 hover:text-blue-300" },
  ];

  return (
    <div className="lg:mx-28">
      <motion.div 
        className="md:h-[500px] h-[600px] md:container md:mx-auto mx-4 flex flex-col justify-center items-center dark:bg-gray-900 dark:border border-gray-800 bg-gray-900 text-white p-10 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl">Hi there 👋, I am</p>
        <h1 className="md:text-5xl text-3xl font-bold my-2 text-center">Ali Babagana Musa</h1>
        <p className="text-xl mt-2">- {currentText}</p>
        
        {/* Social Media Icons */}
        <div className="flex mt-10 space-x-6 text-2xl">
          {socialLinks.map(({ href, icon, color }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={color}>
              {icon}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
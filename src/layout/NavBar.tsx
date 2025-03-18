import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaFilePdf, FaHome, FaCode } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-4 left-4 right-4 md:left-0 md:right-0 max-w-3xl mx-auto p-3 rounded-xl z-10 transition-all duration-500 ${
        isScrolled ? 'backdrop-blur-md bg-[#1f1f1f] bg-opacity-60' : 'bg-[#1f1f1f] bg-opacity-60'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center">
        {/* Navigation Links */}
        <motion.ul
          className="flex items-center space-x-2 text-white text-lg font-semibold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-black hover:bg-gray-200 hover:text-gray-800'
                }`
              }
            >
              <FaHome className="text-lg" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-black hover:bg-gray-200 hover:text-gray-800'
                }`
              }
            >
              <FaUser className="text-lg" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-black hover:bg-gray-200 hover:text-gray-800'
                }`
              }
            >
              <FaProjectDiagram className="text-lg" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-gray-200 text-black' : 'bg-black hover:bg-gray-200 hover:text-gray-800'
                }`
              }
            >
              <FaCode className="text-lg" />
            </NavLink>
          </li>
        </motion.ul>

        {/* Right Section: Resume */}
        <motion.nav
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <a
            href="#resume"
            className="flex items-center justify-between bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-gray-100 hover:text-black transition-all duration-300"
          >
            <FaFilePdf className="text-sm md:text-base" />
            <span className="ml-1 text-sm font-semibold">RESUME</span>
          </a>
        </motion.nav>
      </div>
    </motion.nav>
  );
};
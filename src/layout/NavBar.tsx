import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaEnvelope, FaFilePdf } from 'react-icons/fa';
// import ThemeToggle from '../components/ThemeToggle';

export const NavBar: React.FC = () => {
  return (
    <motion.nav
      className="fixed top-4 left-4 right-4 md:left-0 md:right-0 max-w-3xl mx-auto p-3 bg-black border-2 border-gray-800 rounded-xl shadow-md z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between items-center">
        {/* Navigation Links */}
        <motion.ul
          className="flex items-center space-x-1 text-white dark:text-gray-800 text-xl font-semibold uppercase"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <li className="flex items-center p-2 hover:bg-gray-200 hover:text-gray-500 transition-all duration-700 rounded-full">
            <FaUser className="text-lg" />
          </li>
          <li className="flex items-center p-2 hover:bg-gray-200 hover:text-gray-500 transition-all duration-700 rounded-full">
            <FaProjectDiagram className="text-lg" />
          </li>
          <li className="flex items-center p-2 hover:bg-gray-200 hover:text-gray-500 transition-all duration-700 rounded-full">
            <FaEnvelope className="text-lg" />
          </li>
        </motion.ul>

        {/* Right Section: Theme Toggle & Resume */}
        <motion.nav
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          {/* <ThemeToggle /> */}
          <a
            href="#resume"
            className="flex items-center justify-between bg-black border-2 border-gray-800 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:bg-gray-100 hover:text-black transition-all duration-300"
          >
            <FaFilePdf className="text-sm md:text-base" />
            <span className="ml-1 text-sm font-semibold">RESUME</span>
          </a>
        </motion.nav>
      </div>
    </motion.nav>
  );
};

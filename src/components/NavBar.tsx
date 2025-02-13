import { motion } from 'framer-motion';
import { FaUser, FaProjectDiagram, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export const NavBar: React.FC = () => {
    return (
        <motion.div
            className="p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="md:container md:mx-auto flex justify-between items-center lg:px-20">
                {/* Main NavBar for larger screens */}
                <motion.h1
                    className="md:text-2xl text-xl font-bold"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {'<Dev-Ali/>'}
                </motion.h1>
                <motion.nav
                    className="flex items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    <ul className="flex items-center space-x-4 uppercase font-semibold">
                        {/* About, Projects, Contact - Always visible on large screens */}
                        <li className="hidden md:flex items-center hover:text-gray-400">
                            <FaUser className="text-base" />
                            <a href="#about" className="ml-2">About</a>
                        </li>
                        <li className="hidden md:flex items-center hover:text-gray-400">
                            <FaProjectDiagram className="text-base" />
                            <a href="#projects" className="ml-2">Projects</a>
                        </li>
                        <li className="hidden md:flex items-center hover:text-gray-400">
                            <FaEnvelope className="text-base" />
                            <a href="#contact" className="ml-2">Contact</a>
                        </li>
                        {/* These items always stay in their original position */}
                        <li className="flex justify-center items-center hover:text-gray-400 bg-gray-900 text-white md:p-2 p-1 md:px-4 px-2.5 rounded-md">
                            <FaFilePdf className="md:text-base text-sm" />
                            <a href="#resume" className="ml-2">RESUME</a>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </motion.nav>
            </div>
            {/* Bottom NavBar for smaller screens */}
            <nav className="fixed bottom-1 left-1/2 transform -translate-x-1/2 w-[90%] backdrop-blur-md bg-gray-900 dark:border-2 dark:border-gray-700 border-gray-100 dark:text-white text-gray-900 flex justify-around items-center py-3 md:hidden rounded-lg z-50">
                <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <FaUser className="text-xl" />
                    <span className="text-sm">About</span>
                </a>
                <a href="#projects" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <FaProjectDiagram className="text-xl" />
                    <span className="text-sm">Projects</span>
                </a>
                <a href="#contact" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <FaEnvelope className="text-xl" />
                    <span className="text-sm">Contact</span>
                </a>
            </nav>
        </motion.div>
    );
};

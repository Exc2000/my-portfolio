import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
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
                <motion.h1
                    className="md:text-2xl text-xl font-bold"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {'<Dev-Ali/>'}
                </motion.h1>
                <motion.nav
                    className="nav"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                >
                    <ul className="flex items-center md:space-x-4 space-x-3 uppercase font-semibold">
                        <li className="flex items-center hover:text-gray-400">
                            <FaUser className='text-xl md:text-base'/>
                            <a href="#about" className="ml-2 hidden md:inline">About</a>
                        </li>
                        <li className="flex items-center hover:text-gray-400">
                            <FaProjectDiagram className='text-xl md:text-base'/>
                            <a href="#projects" className="ml-2 hidden md:inline">Projects</a>
                        </li>
                        <li className="flex items-center hover:text-gray-400">
                            <FaEnvelope className='text-xl md:text-base'/>
                            <a href="#contact" className="ml-2 hidden md:inline">Contact</a>
                        </li>
                        <li className="flex justify-center items-center hover:text-gray-400 bg-gray-900 text-white p-2 px-4 rounded-md">
                            <FaDownload className='md:text-base text-sm'/>
                            <a href="#contact" className="ml-2">RESUME</a>
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </motion.nav>
            </div>
        </motion.div>
    );
};

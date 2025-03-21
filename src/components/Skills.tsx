import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
    FaReact, 
    FaNodeJs, 
    FaDatabase, 
    FaHtml5, 
    FaCss3Alt, 
    FaJsSquare, 
    FaPython,  
    FaGit, 
    FaDocker 
} from 'react-icons/fa';

const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Database', icon: <FaDatabase className="text-yellow-500" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-300" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-300" /> },
    { name: 'Python', icon: <FaPython className="text-green-700" /> },
    { name: 'TypeScript', icon: <FaJsSquare className="text-blue-500" /> },
    { name: 'Git', icon: <FaGit className="text-red-500" /> },
    { name: 'Docker', icon: <FaDocker className="text-blue-600" /> },
];

const Skills: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="h-full my-16 container mx-auto p-6 lg:px-20">
            <h2 className="text-2xl font-bold md:text-center mb-8 text-white"># My Skills</h2>
         
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center p-4 gap-2 bg-[#1f1f1f] bg-opacity-20 text-white rounded-lg shadow-md transition-colors duration-300 hover:bg-[#383838]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="md:text-4xl text-3xl">{skill.icon}</div>
                            <h3 className="md:text-xl text-sm font-semibold">{skill.name}</h3>
                        </motion.div>
                    ))}
                </div>
            
        </div>
    );
};

export default Skills;
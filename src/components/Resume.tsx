import React from 'react';
import { motion, useInView } from 'framer-motion';

const Resume: React.FC = () => {
    const educationRef = React.useRef(null);
    const experienceRef = React.useRef(null);

    const isEducationInView = useInView(educationRef, { once: true });
    const isExperienceInView = useInView(experienceRef, { once: true });

    return (
        <div className="h-screen container mx-auto lg:px-20 p-6">
            <h1 className="text-3xl font-bold md:text-center my-8 dark:text-white text-gray-900"># Resume</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education Section */}
                <motion.div
                    ref={educationRef}
                    initial={{ x: -200, opacity: 0 }}
                    animate={isEducationInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                    className="relative text-gray-900 dark:text-gray-200 p-8 rounded-lg hover:shadow-2xl transition-shadow"
                >
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded"></div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-400">Education</h2>
                    <ul>
                        <li className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Bachelor of Science in Computer Science</h3>
                            <p className="text-gray-600 dark:text-gray-400">University of XYZ, 2015 - 2019</p>
                        </li>
                        <li className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Diploma in Computer Science</h3>
                            <p className="text-gray-600 dark:text-gray-400">University of XYZ, 2015 - 2019</p>
                        </li>
                        <li className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Master of Science in Software Engineering</h3>
                            <p className="text-gray-600 dark:text-gray-400">University of ABC, 2019 - 2021</p>
                        </li>
                    </ul>
                </motion.div>

                {/* Experiences Section */}
                <motion.div
                    ref={experienceRef}
                    initial={{ x: 200, opacity: 0 }}
                    animate={isExperienceInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1 }}
                    className="relative text-gray-900 dark:text-gray-200 p-8 rounded-lg hover:shadow-2xl transition-shadow"
                >
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gray-300 rounded"></div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-400">Experiences</h2>
                    <ul>
                        <li className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Software Engineer</h3>
                            <p className="text-gray-600 dark:text-gray-100">Tech Company, 2021 - Present</p>
                            <p className="text-gray-600 dark:text-gray-400">- Developed and maintained web applications using React and Node.js.</p>
                        </li>
                        <li className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Junior Developer</h3>
                            <p className="text-gray-600 dark:text-gray-100">Startup Inc., 2019 - 2021</p>
                            <p className="text-gray-600 dark:text-gray-400">- Assisted in the development of mobile applications using React Native.</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;

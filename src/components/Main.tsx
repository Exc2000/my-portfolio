import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full my-16 flex flex-col justify-center items-center max-w-3xl md:mx-auto p-6 mx-4 md:text-center"
            id="about"
        >
            <h2 className="text-3xl font-bold mb-4 md:text-center dark:text-white text-gray-900"># About Me</h2>
            <p className="md:text-lg text-md dark:text-gray-100 text-gray-700 mb-4">
                Hello! I'm a passionate Web Developer, UI/UX Designer, and Tech Enthusiast. I love creating beautiful and functional web applications that provide an excellent user experience. With a strong background in both design and development, I strive to bridge the gap between aesthetics and functionality.
            </p>
            <p className="md:text-lg text-md dark:text-gray-100 text-gray-700 mb-4">
                My journey in tech started with a curiosity for how things work and a desire to build things that can make a difference. Over the years, I've honed my skills in various technologies and design principles, always staying up-to-date with the latest trends and best practices.
            </p>
            <p className="md:text-lg text-md dark:text-gray-100 text-gray-700">
                When I'm not coding or designing, you can find me exploring new tech gadgets, reading about the latest in tech, or sharing my knowledge with the community. I'm always excited to take on new challenges and collaborate with like-minded individuals.
            </p>
        </motion.div>
    );
};

export default About;
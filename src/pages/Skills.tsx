import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGit,
  FaDocker,
  FaCloud,
  FaNpm,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiWebpack,
  SiGitlab,
  SiGooglecloud,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiFastapi,
  SiAmazon,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300" /> },
  { name: "Python", icon: <FaPython className="text-green-700" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Webpack", icon: <SiWebpack className="text-blue-500" /> },
  { name: "Git", icon: <FaGit className="text-red-500" /> },
  { name: "GitHub Actions", icon: <SiGitlab className="text-gray-300" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "AWS", icon: <SiAmazon className="text-yellow-500" /> },
  { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Heroku", icon: <SiHeroku className="text-purple-500" /> },
  { name: "CI/CD", icon: <FaCloud className="text-gray-300" /> },
  { name: "NPM", icon: <FaNpm className="text-red-500" /> },
];

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="h-full md:pt-10 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-white"># My Skills</h2>
      <p className="text-gray-300 md:text-lg text-base leading-relaxed mb-4">
        I have a strong foundation in full-stack development, specializing in
        building modern, scalable, and high-performance web applications. My
        expertise spans across frontend and backend technologies, ensuring
        seamless user experiences and efficient server-side solutions.
      </p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center p-3 gap-3 bg-[#0000005e] text-white rounded-lg shadow-md transition-all duration-300 hover:bg-[#383838] active:bg-gray-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="md:text-3xl text-2xl">{skill.icon}</div>
              <h3 className="text-sm font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

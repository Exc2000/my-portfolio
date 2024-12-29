import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

interface Technology {
    name: string;
    icon: JSX.Element;
}

interface ProjectProps {
    title: string;
    description: string;
    technology: Technology[];
    githubLink: string;
    liveLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, technology, githubLink, liveLink }) => {
    return (
        <motion.div
            className="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-50 shadow-lg rounded-md p-6 border border-gray-700 transition-transform hover:scale-105 hover:shadow-xl"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the element is visible
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2 className="text-3xl font-semibold mb-3">{title}</h2>
            <p className="text-gray-900 dark:text-gray-200 mb-2 leading-relaxed">{description}</p>
            <div className="flex flex-wrap items-center mb-3 gap-2">
                {technology.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center space-x-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-300 rounded-full px-3 py-1 mt-2"
                    >
                        {tech.icon}
                        <span className="text-sm font-semibold">{tech.name}</span>
                    </div>
                ))}
            </div>
            <div className="flex space-x-3 mt-4">
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-1.5 text-white bg-gray-800 dark:bg-gray-950 rounded-md shadow-md hover:bg-gray-700 transition-all"
                >
                    <FaGithub className="mr-2 text-base" />
                    CODE
                </a>
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-1.5 text-white bg-gray-800 dark:bg-gray-950 rounded-md shadow-md hover:bg-gray-700 transition-all"
                >
                    <FaExternalLinkAlt className="mr-2 text-base" />
                    LIVE
                </a>
            </div>
        </motion.div>
    );
};

const ProjectList: React.FC<{ projects: ProjectProps[] }> = ({ projects }) => {
    return (
        <div className="container mx-auto p-6 lg:px-20" id="projects">
            <h1 className="text-3xl font-bold md:text-center mb-8 dark:text-white text-gray-900"># My Projects</h1>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.3,
                        },
                    },
                }}
            >
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        technology={project.technology}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const exampleProjects: ProjectProps[] = [
    {
        title: 'Weather App',
        description: 'A web application that provides weather forecasts for any location using the OpenWeatherMap API. Includes real-time weather updates and a sleek user interface.',
        technology: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-300" /> },
        ],
        githubLink: 'https://github.com/user/weather-app',
        liveLink: 'https://weather-app.com',
    },
    {
        title: 'Task Manager',
        description: 'A task management tool that helps users organize their daily tasks, set priorities, and increase productivity. Features include reminders, task categorization, and progress tracking.',
        technology: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-300" /> },
        ],
        githubLink: 'https://github.com/user/task-manager',
        liveLink: 'https://task-manager.com',
    },
    {
        title: 'E-commerce Store',
        description: 'An online store featuring a variety of products, secure payment integration, and a seamless checkout process. Includes an admin dashboard for managing inventory and orders.',
        technology: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-300" /> },
            { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        ],
        githubLink: 'https://github.com/user/e-commerce-store',
        liveLink: 'https://e-commerce-store.com',
    },
    {
        title: 'Chat Application',
        description: 'A real-time chat application with private and group messaging features, smoothly built with WebSocket technology for instant communication.',
        technology: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-300" /> },
            { name: 'WebSocket', icon: <FaJsSquare className="text-yellow-500" /> },
        ],
        githubLink: 'https://github.com/user/chat-application',
        liveLink: 'https://chat-application.com',
    },
    {
        title: 'Blog Platform',
        description: 'A blogging platform where users can create, edit, and publish articles. Features include markdown support, comment sections, and user authentication.',
        technology: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-300" /> },
        ],
        githubLink: 'https://github.com/user/blog-platform',
        liveLink: 'https://blog-platform.com',
    },
    {
        title: 'Finance Tracker',
        description: 'A personal finance tracker that helps users manage their expenses, set budgets, and analyze spending trends. Includes data visualization with charts.',
        technology: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-blue-300" /> },
            { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
        ],
        githubLink: 'https://github.com/user/finance-tracker',
        liveLink: 'https://finance-tracker.com',
    },
];

const App: React.FC = () => {
    return <ProjectList projects={exampleProjects} />;
};

export default App;
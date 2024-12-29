import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage for theme preference
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []); // Run only once on mount

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700"
        >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-900" />}
        </button>
    );
};

export default ThemeToggle;

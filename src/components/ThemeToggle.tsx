import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

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
            className="p-2 rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-200 transition-all duration-300"
        >
            {darkMode ? <FaMoon className="text-gray-900" /> : <FaSun className="text-yellow-500" />}
        </button>
    );
};

export default ThemeToggle;

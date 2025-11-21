import { useState, useEffect } from 'react';
import { Sun } from '../icons/sun';
import { Moon } from '../icons/moon';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = theme === 'dark' || (!theme && prefersDark);

        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle('dark', shouldBeDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        console.log('Before toggle:', document.documentElement.className);

        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');

        document.documentElement.className = newTheme ? 'dark' : '';

        console.log('After toggle:', document.documentElement.className);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
        </button>
    );
}

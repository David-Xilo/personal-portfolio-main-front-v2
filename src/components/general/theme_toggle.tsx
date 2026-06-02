import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'dark';
        const savedTheme = localStorage.getItem('dm-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return (savedTheme as 'light' | 'dark') || (prefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('dm-theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="w-[34px] h-[34px] border border-dm-line dark:border-dm-line-dark rounded-full bg-transparent text-dm-text-mut dark:text-dm-text-mut-dark cursor-pointer flex items-center justify-center transition-all duration-300 hover:text-dm-text dark:hover:text-dm-text-dark hover:border-dm-accent dark:hover:border-dm-accent-dark active:scale-95"
            aria-label="Toggle color theme"
        >
            {theme === 'light' ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>
                </svg>
            ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4.2"/>
                    <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"/>
                </svg>
            )}
        </button>
    );
}

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './theme_toggle.tsx';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-[18px] md:px-16 transition-all duration-300 border-b ${
                scrolled
                    ? 'bg-dm-bg/78 dark:bg-dm-bg-dark/78 backdrop-blur-md border-dm-line dark:border-dm-line-dark shadow-sm'
                    : 'bg-transparent border-transparent'
            }`}
        >
            <a href="#top" className="font-mono text-sm font-medium tracking-wider text-dm-text dark:text-dm-text-dark flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span className="relative flex h-[7px] w-[7px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dm-good dark:bg-dm-good-dark opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-dm-good dark:bg-dm-good-dark"></span>
                </span>
                David Moura
            </a>
            
            <div className="flex items-center gap-7">
                <div className="hidden md:flex items-center gap-7">
                    <a href="#about" className="font-mono text-[12.5px] tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark hover:text-dm-text dark:hover:text-dm-text-dark transition-colors relative group py-1">
                        <span className="text-dm-text-faint dark:text-dm-text-faint-dark mr-1">01</span>About
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dm-accent dark:bg-dm-accent-dark transition-all duration-250 ease-out group-hover:w-full"></span>
                    </a>
                    <a href="#experience" className="font-mono text-[12.5px] tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark hover:text-dm-text dark:hover:text-dm-text-dark transition-colors relative group py-1">
                        <span className="text-dm-text-faint dark:text-dm-text-faint-dark mr-1">02</span>Experience
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dm-accent dark:bg-dm-accent-dark transition-all duration-250 ease-out group-hover:w-full"></span>
                    </a>
                    <a href="#skills" className="font-mono text-[12.5px] tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark hover:text-dm-text dark:hover:text-dm-text-dark transition-colors relative group py-1">
                        <span className="text-dm-text-faint dark:text-dm-text-faint-dark mr-1">03</span>Stack
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dm-accent dark:bg-dm-accent-dark transition-all duration-250 ease-out group-hover:w-full"></span>
                    </a>
                    <a href="#projects" className="font-mono text-[12.5px] tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark hover:text-dm-text dark:hover:text-dm-text-dark transition-colors relative group py-1">
                        <span className="text-dm-text-faint dark:text-dm-text-faint-dark mr-1">04</span>Projects
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dm-accent dark:bg-dm-accent-dark transition-all duration-250 ease-out group-hover:w-full"></span>
                    </a>
                    <a href="#contact" className="font-mono text-[12.5px] tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark hover:text-dm-text dark:hover:text-dm-text-dark transition-colors relative group py-1">
                        <span className="text-dm-text-faint dark:text-dm-text-faint-dark mr-1">05</span>Contact
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-dm-accent dark:bg-dm-accent-dark transition-all duration-250 ease-out group-hover:w-full"></span>
                    </a>
                </div>
                <ThemeToggle />
            </div>
        </motion.nav>
    );
}

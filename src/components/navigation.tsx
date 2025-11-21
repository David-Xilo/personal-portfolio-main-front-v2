import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import ThemeToggle from "./theme_toggle.tsx";

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-gray-100 backdrop-blur-sm shadow-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-xl font-semibold text-gray-900">DM</a>
                        <ThemeToggle />
                    </div>
                    <div className="flex gap-8">
                        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                        <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}

import {motion} from 'framer-motion';
import ArrowDown from "../icons/arrow_down.tsx";
import Linkedin from "../icons/linkedin.tsx";
import Github from "../icons/github.tsx";
import Mail from "../icons/mail.tsx";
import {useApiGet} from "../api/use_api_get.tsx";
import type {ContactInfo} from "../api/types.ts";

interface HeroProps {
    name: string;
    role: string;
    description: string;
}

export default function Hero({name, role, description}: HeroProps) {
    const contactPath = '/about/contact'
    const {status, message, error} = useApiGet<ContactInfo>(contactPath, null)

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-600">Error: {error}</div>
            </div>
        );
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-gray-100">{name}</h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4">{role}</p>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <div className="flex justify-center gap-6 mb-16">
                        <a
                            href={`mailto:${message?.email}`}
                            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
                        </a>
                        <a
                            href={message?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
                        </a>
                        <a
                            href={message?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
                        </a>
                    </div>
                    <motion.div
                        animate={{y: [0, 10, 0]}}
                        transition={{repeat: Infinity, duration: 2}}
                        onClick={() => {
                            document.getElementById('about')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                        className="cursor-pointer"
                    >
                        <ArrowDown className="w-6 h-6 text-gray-400 mx-auto"/>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

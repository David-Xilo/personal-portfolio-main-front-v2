import React from 'react';
import { motion } from 'framer-motion';
import ArrowDown from "../icons/arrow_down.tsx";
import ArrowUp from "../icons/arrow_up.tsx";

interface SectionProps {
    id: string;
    previousSection?: string;
    nextSection?: string;
    Component: React.ComponentType;
}

export default function Section( { id, previousSection, nextSection, Component}: SectionProps) {
    return (
        <section id={id} className="min-h-screen px-6 bg-white dark:bg-gray-950 flex flex-col justify-center py-12 snap-start">
            <div className="max-w-6xl mx-auto w-full">
                {previousSection && (<motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                    onClick={() => {
                        document.getElementById(previousSection)?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                    className="cursor-pointer mb-8"
                    aria-label='PreviousSection'
                >
                    <ArrowUp className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto"/>
                </motion.div>)}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Component />
                </motion.div>
                {nextSection && (<motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                    onClick={() => {
                        document.getElementById(nextSection)?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                    className="cursor-pointer"
                    aria-label='NextSection'
                >
                    <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto"/>
                </motion.div>)}
            </div>
        </section>
    );
}

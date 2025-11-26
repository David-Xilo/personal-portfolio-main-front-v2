import React from 'react';
import {motion} from 'framer-motion';
import {SectionDown, SectionUp} from "./section_nav.tsx";

interface SectionProps {
    id: string;
    previousSection?: string;
    nextSection?: string;
    Component: React.ComponentType;
}

export default function Section({ id, previousSection, nextSection, Component }: SectionProps) {

    return (
        <section id={id} className="min-h-screen px-6 bg-white dark:bg-gray-950 flex flex-col justify-center py-12 snap-start">
            <div className="max-w-6xl mx-auto w-full">
                <SectionUp previousSection={previousSection} />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Component />
                </motion.div>
                <SectionDown nextSection={nextSection} />
            </div>
        </section>
    );
}

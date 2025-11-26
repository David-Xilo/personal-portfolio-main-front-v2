import {motion} from "framer-motion";
import ArrowDown from "../icons/arrow_down.tsx";
import ArrowUp from "../icons/arrow_up.tsx";

const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth'
    });
};

const SectionDown = ({nextSection} : {nextSection: string | undefined}) => {
    return (
        nextSection && (
            <button
                type="button"
                onClick={() => scrollToSection(nextSection)}
                className="cursor-pointer mt-8 block mx-auto bg-transparent border-0 p-2 hover:opacity-70 transition-opacity"
                aria-label="Scroll to next section"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </motion.div>
            </button>
        )
    )
}

const SectionUp = ({previousSection} : {previousSection: string | undefined}) => {
    return (
        previousSection && (
            <button
                type="button"
                onClick={() => scrollToSection(previousSection)}
                className="cursor-pointer mb-8 block mx-auto bg-transparent border-0 p-2 hover:opacity-70 transition-opacity"
                aria-label="Scroll to previous section"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowUp className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </motion.div>
            </button>
        )
    )
}

export {SectionDown, SectionUp};

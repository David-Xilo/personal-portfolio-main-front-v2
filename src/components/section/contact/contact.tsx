import {motion} from 'framer-motion';
import {useApiGet} from "../../../api/use_api_get.tsx";
import type {ContactInfo} from "../../../api/types.ts";
import ErrorDisplay from "../../general/error.tsx";

// Contact structure
/*
* {
  "credly": "string",
  "email": "string",
  "github": "string",
  "linkedin": "string",
  "name": "string"
}
* */

export default function Contact() {

    const contactPath = '/contact'
    const {status, message: contact, error} = useApiGet<ContactInfo>(contactPath, null)

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <ErrorDisplay error={error} />
            // <div className="flex flex-col items-center justify-center p-8 text-center">
            //     <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
            //         <h3 className="text-lg font-medium text-red-800 dark:text-red-400 mb-2">
            //             Error Loading Projects
            //         </h3>
            //         <p className="text-red-600 dark:text-red-300">
            //             {error ||
            //                 `An unexpected error occurred while loading Projects.`}
            //         </p>
            //     </div>
            // </div>
        )
    }

    return (
        <>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
                Let's connect and discuss how we can work together.
            </p>

            <div className="max-w-2xl">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        I'm always interested in hearing about new opportunities,
                        collaborations, or just having a conversation about technology
                        and software engineering. Feel free to reach out through any
                        of the channels below.
                    </p>
                    {contact && (
                        <div className="space-y-6">
                            {contact.email !== '' && (
                                <motion.div
                                    key='Email'
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.3, delay: 0.3}}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-24 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Email
                                    </div>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                    >
                                        {contact.email}
                                    </a>
                                </motion.div>
                            )}
                            {contact.linkedin && (
                                <motion.div
                                    key='LinkedIn'
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.3, delay: 0.3 + 0.3}}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-24 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        LinkedIn
                                    </div>
                                    <a
                                        href={contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                    >
                                        {contact.linkedin}
                                    </a>
                                </motion.div>
                            )}
                            {contact.github && (
                                <motion.div
                                    key='Github'
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.3, delay: 0.3 + 0.1}}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-24 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Github
                                    </div>
                                    <a
                                        href={contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                    >
                                        {contact.github}
                                    </a>
                                </motion.div>
                            )}
                            {contact.credly && (
                                <motion.div
                                    key='Credly'
                                    initial={{opacity: 0, x: -20}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{duration: 0.3, delay: 0.3 + 0.2}}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-24 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        Credly
                                    </div>
                                    <a
                                        href={contact.credly}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                    >
                                        {contact.credly}
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    );
}

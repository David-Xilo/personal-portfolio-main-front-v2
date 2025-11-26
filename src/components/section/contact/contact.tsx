import {motion} from 'framer-motion';
import {useApiGet} from "../../../api/use_api_get.tsx";
import type {ContactInfo} from "../../../api/types.ts";
import ErrorDisplay from "../../general/error.tsx";

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
        )
    }

    return (
        <>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Contact
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
                Let’s connect, I’d love to explore how we might work together or share insights
            </p>

            <div className="max-w-2xl">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="bg-gray-100 dark:bg-gray-900 rounded-lg p-8 shadow-sm"
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                        I’m always open to hearing about new roles, collaboration ideas, or simply chatting about technology and engineering. You can reach me at any of the links below
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
                            {contact.linkedin && contact.linkedin !== '' && (
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
                            {contact.github && contact.github !== '' && (
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
                            {contact.credly && contact.credly !== '' && (
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

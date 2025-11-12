import {motion} from 'framer-motion';
import ArrowDown from "../icons/arrow_down.tsx";
import Linkedin from "../icons/linkedin.tsx";
import Github from "../icons/github.tsx";
import Mail from "../icons/mail.tsx";
import {useContactGetApi} from "../api/hooks/contact-rest.tsx";

interface HeroProps {
    name: string;
    role: string;
    description: string;
    // contact: {
    //     email: string;
    //     github: string;
    //     linkedin: string;
    // };
}

export default function Hero({name, role, description}: HeroProps) {
    const contactPath = '/about/contact'
    const {status: contact_status, message: contact, error: contact_error} = useContactGetApi(contactPath)

    if (contact_status === 'loading' || contact_status === '') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600">Loading...</div>
            </div>
        );
    }

    if (contact_status === 'error' || contact_status === 'failed') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-600">Error: {contact_error}</div>
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
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">{name}</h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4">{role}</p>
                    <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <div className="flex justify-center gap-6 mb-16">
                        <a
                            href={`mailto:${contact?.email}`}
                            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-6 h-6 text-gray-700"/>
                        </a>
                        <a
                            href={contact?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-6 h-6 text-gray-700"/>
                        </a>
                        <a
                            href={contact?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-6 h-6 text-gray-700"/>
                        </a>
                    </div>

                    <motion.div
                        animate={{y: [0, 10, 0]}}
                        transition={{repeat: Infinity, duration: 2}}
                    >
                        // TODO - add scroll to work section
                        // TODO - revert arrow after scroll to work section
                        <ArrowDown className="w-6 h-6 text-gray-400 mx-auto"/>
                    </motion.div>
                    {/*<motion.div*/}
                    {/*    animate={{y: [0, 10, 0]}}*/}
                    {/*    transition={{repeat: Infinity, duration: 2}}*/}
                    {/*    onClick={() => {*/}
                    {/*        document.getElementById('work')?.scrollIntoView({*/}
                    {/*            behavior: 'smooth'*/}
                    {/*        });*/}
                    {/*    }}*/}
                    {/*    className="cursor-pointer"  // Add cursor pointer to show it's clickable*/}
                    {/*>*/}
                    {/*    <ArrowDown className="w-6 h-6 text-gray-400 mx-auto"/>*/}
                    {/*</motion.div>*/}
                </motion.div>
            </div>
        </section>
    );
}

import {motion} from 'framer-motion';
import ArrowDown from "../../../icons/arrow_down.tsx";
import Linkedin from "../../../icons/linkedin.tsx";
import Github from "../../../icons/github.tsx";
import Mail from "../../../icons/mail.tsx";
import {useApiGet} from "../../../api/use_api_get.tsx";
import type {ContactInfo} from "../../../api/types.ts";
import ErrorDisplay from "../../general/error.tsx";
import Credly from "../../../icons/credly.tsx";
import HeroLink from "./hero_link.tsx";

interface HeroProps {
    name: string;
    role: string;
    description: string;
}

export default function Hero({name, role, description}: HeroProps) {
    const contactPath = '/contact'
    const {status, message: contact, error} = useApiGet<ContactInfo>(contactPath, null)

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
                    {status === 'error' && (
                        <ErrorDisplay error={error} />
                    )}
                    {status === 'loading' && (
                        <div className="min-h-screen flex items-center justify-center">
                            <div className="text-gray-600 dark:text-gray-400">Loading...</div>
                        </div>
                    )}
                    {status === 'success' && contact && (<div className="flex justify-center gap-6 mb-16">
                        <HeroLink contact={contact.email} contactKey='Email' IconComponent={Mail} />
                        <HeroLink contact={contact.github} contactKey='GitHub' IconComponent={Github} />
                        <HeroLink contact={contact.linkedin} contactKey='LinkedIn' IconComponent={Linkedin} />
                        <HeroLink contact={contact.credly} contactKey='Credly' IconComponent={Credly} />
                    </div>)}
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

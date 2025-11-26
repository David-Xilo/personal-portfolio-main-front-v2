import {motion} from 'framer-motion';
import ErrorDisplay from "../../general/error.tsx";
import ContactLink from "./contact_link.tsx";
import Loader from "../../general/loader.tsx";
import {useContact} from "./contact_provider.tsx";

const Contact = () => {

    const {status, contact, error} = useContact()

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
                    {status === 'error' && (
                        <ErrorDisplay error={error} />
                    )}
                    {status === 'loading' && (
                        <Loader />
                    )}
                    {status === 'success' && contact && (
                        <div className="space-y-6">
                            <ContactLink contactKey='Email' contact={contact.email} />
                            <ContactLink contactKey='LinkedIn' contact={contact.linkedin} />
                            <ContactLink contactKey='Github' contact={contact.github} />
                            <ContactLink contactKey='Credly' contact={contact.credly} />
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    );
}

export default Contact;

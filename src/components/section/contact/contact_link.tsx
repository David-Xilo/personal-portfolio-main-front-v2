import {motion} from 'framer-motion';

// TODO instead of url display the icon
const ContactLink = ({ contact, contactKey }: { contact: string | null; contactKey: string }) => {

    return (contact && contact !== '' && (
            <motion.div
                key={contactKey}
                initial={{opacity: 0, x: -20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.3, delay: 0.3}}
                className="flex items-center gap-4 group"
            >
                <div className="w-24 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {contactKey}
                </div>
                <a
                    href={contactKey === 'Email' ? `mailto:${contact}` : contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                    aria-label={contactKey}
                >
                    {contact}
                </a>
            </motion.div>
        )
    );
}

export default ContactLink;

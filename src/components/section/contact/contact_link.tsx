import {motion} from 'framer-motion';
import HeroLink from "./hero_link.tsx";
import React from "react";

const ContactLink = ({contact, contactKey, IconComponent}: {
    contact: string | null;
    contactKey: string;
    IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
}) => {

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
                <HeroLink contact={contact} contactKey={contactKey} IconComponent={IconComponent} />
            </motion.div>
        )
    );
}

export default ContactLink;

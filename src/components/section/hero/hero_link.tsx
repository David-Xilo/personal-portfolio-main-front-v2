import React from "react";

export default function HeroLink({contact, contactKey, IconComponent}: { contact: string | null; contactKey: string; IconComponent: React.FC<React.SVGProps<SVGSVGElement>> }) {

    return (
        contact && contact !== '' && (<a
            href={contactKey === 'Email' ? `mailto:${contact}` : contact}
            className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label={contactKey}
        >
            <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300"/>
        </a>)
    );
}

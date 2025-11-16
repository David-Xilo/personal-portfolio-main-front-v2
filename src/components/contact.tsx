import { motion } from 'framer-motion';

export default function Contact() {
    const contactLinks = [
        {
            label: 'Email',
            value: 'your.email@example.com',
            href: 'mailto:your.email@example.com',
        },
        {
            label: 'LinkedIn',
            value: 'linkedin.com/in/yourprofile',
            href: 'https://linkedin.com/in/yourprofile',
        },
        {
            label: 'GitHub',
            value: 'github.com/yourusername',
            href: 'https://github.com/yourusername',
        },
    ];

    return (
        <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Contact
                    </h2>
                    <p className="text-lg text-gray-600 mb-16 max-w-2xl">
                        Let's connect and discuss how we can work together.
                    </p>

                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-lg p-8 shadow-sm"
                        >
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                I'm always interested in hearing about new opportunities,
                                collaborations, or just having a conversation about technology
                                and software engineering. Feel free to reach out through any
                                of the channels below.
                            </p>

                            <div className="space-y-6">
                                {contactLinks.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-4 group"
                                    >
                                        <div className="w-24 text-sm font-medium text-gray-500">
                                            {link.label}
                                        </div>
                                        <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 hover:text-gray-600 transition-colors"
                                        >
                                        {link.value}
                                    </a>
                                    </motion.div>
                                    ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

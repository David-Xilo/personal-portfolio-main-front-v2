import { motion } from 'framer-motion';
import ArrowDown from "../icons/arrow_down.tsx";
import ArrowUp from "../icons/arrow_up.tsx";

export default function About() {
    const skills = [
        'Backend Development',
        'System Architecture',
        'Microservices',
        'API Design',
        'Database Design',
        'Cloud Infrastructure',
        'Security Best Practices',
        'CI/CD',
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                    onClick={() => {
                        document.getElementById('hero')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                    className="cursor-pointer"
                >
                    <ArrowUp className="w-6 h-6 text-gray-400 mx-auto"/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        About
                    </h2>
                    <p className="text-lg text-gray-600 mb-16 max-w-2xl">
                        Building robust systems at the intersection of technology, security, and finance.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Background
                            </h3>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    I'm a Senior Software Engineer with a focus on backend development
                                    and scalable system architecture. My expertise lies in designing and
                                    implementing robust solutions that handle complex business requirements.
                                </p>
                                <p>
                                    With experience spanning technology, security, and finance sectors,
                                    I bring a comprehensive understanding of building systems that are
                                    not only performant but also secure and compliant.
                                </p>
                                <p>
                                    I'm passionate about clean code, effective system design, and
                                    mentoring teams to deliver high-quality software solutions.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{repeat: Infinity, duration: 2}}
                    onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                    className="cursor-pointer"
                >
                    <ArrowDown className="w-6 h-6 text-gray-400 mx-auto"/>
                </motion.div>
            </div>
        </section>
    );
}

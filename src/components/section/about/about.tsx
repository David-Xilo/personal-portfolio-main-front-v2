import { motion } from 'framer-motion';

export default function About() {
    const skills = [
        'System Architecture & Design',
        'Low-Latency, High-Throughput Systems',
        'Secure Backend Services',
        'Real-Time Data Pipelines',
        'Risk-Aware Engineering',
        'Finance-Grade Infrastructure',
        'CI/CD & DevOps Practices',
        'API & Integration Design'
    ];

    return (
        <>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                About
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
                Designing secure systems, shaping high-performance infrastructure, and bridging technology with finance.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Background
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            Senior Engineer with experience designing low-latency, high-throughput systems, building secure backend services, and driving real-time data pipelines.
                            I focus on system integrity, risk control, and reliable data flows in market infrastructure.
                            I enjoy solving the hard problems and turning them into stable, secure solutions.
                        </p>
                        <p>
                            When I’m not working on systems, I enjoy simplifying complexity, designing secure services, and watching data move smoothly.
                            Outside of code, you’ll often find me reading about market trends or learning something new from my personal projects.
                        </p>
                        <p>
                            In my downtime you’ll often find me curled up with a good book on literature or history and then out for a swim or a run to clear my mind and move my body.
                            I believe in balancing the cerebral and the physical so I can bring fresh energy and ideas into everything I do.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
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
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
}

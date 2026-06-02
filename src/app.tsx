import { motion } from 'framer-motion';
import Navigation from './components/general/navigation.tsx';
import Hero from './components/section/contact/hero.tsx';
import About from './components/section/about/about.tsx';
import Experience from './components/section/experience/experience.tsx';
import Skills from './components/section/skills/skills.tsx';
import Projects from './components/section/work/projects.tsx';
import Contact from './components/section/contact/contact.tsx';
import Footer from './components/general/footer.tsx';
import { ContactProvider } from './components/section/contact/contact_provider.tsx';

function App() {
    return (
        <ContactProvider>
            <div id="top" className="relative min-h-screen overflow-x-hidden selection:bg-dm-accent/30 selection:text-dm-text dark:selection:bg-dm-accent-dark/30 dark:selection:text-dm-text-dark">
                
                {/* Glow atmospheric background grid motif */}
                <div 
                    className="fixed inset-0 -z-10 bg-grid-motif pointer-events-none" 
                    style={{ 
                        maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 0%, transparent 75%)', 
                        WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, black 0%, transparent 75%)' 
                    }} 
                />

                <Navigation />
                
                <Hero
                    name="David Moura"
                    role="Senior Software Engineer"
                    description="Building secure, scalable systems at the intersection of technology, security and finance"
                />

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                >
                    <About />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                >
                    <Experience />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                >
                    <Skills />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                >
                    <Projects />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.6 }}
                >
                    <Contact />
                </motion.div>

                <Footer />
            </div>
        </ContactProvider>
    );
}

export default App;

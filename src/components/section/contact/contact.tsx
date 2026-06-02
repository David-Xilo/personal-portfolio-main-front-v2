import ErrorDisplay from '../../general/error.tsx';
import Loader from '../../general/loader.tsx';
import { useContact } from './contact_provider.tsx';

const Contact = () => {
    const { status, contact, error } = useContact();

    return (
        <section id="contact" className="py-[100px] border-t border-dm-line dark:border-dm-line-dark scroll-mt-16">
            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                
                {/* Section Header */}
                <div className="flex items-baseline gap-4 mb-14">
                    <span className="font-mono text-xs tracking-wider text-dm-accent dark:text-dm-accent-dark font-medium">05</span>
                    <h2 className="font-serif text-3xl font-normal leading-none tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                        Get in Touch
                    </h2>
                </div>

                <div className="max-w-[720px]">
                    <h3 className="font-serif text-[clamp(28px,4.5vw,46px)] leading-[1.08] tracking-[-0.02em] font-normal mb-6 text-dm-text dark:text-dm-text-dark">
                        Let’s connect, I’d love to explore how we might work together or share insights
                    </h3>
                    
                    <p className="text-[clamp(15px,1.8vw,17.5px)] leading-[1.6] text-dm-text-mut dark:text-dm-text-mut-dark">
                        I’m always open to hearing about new roles, collaboration ideas, or simply chatting about technology and engineering. You can reach me at any of the links below
                    </p>

                    {/* API Status Handlers */}
                    {status === 'loading' && (
                        <div className="py-8 flex justify-start">
                            <Loader />
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="py-6">
                            <ErrorDisplay error={error} />
                        </div>
                    )}

                    {/* Dynamic Links List */}
                    {status === 'success' && contact && (
                        <div className="flex flex-wrap gap-3.5 mt-9">
                            {contact.email && (
                                <a 
                                    href={`mailto:${contact.email}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-wider px-[22px] py-[13.5px] rounded-lg border border-dm-accent bg-dm-accent hover:bg-dm-accent/90 dark:border-dm-accent-dark dark:bg-dm-accent-dark dark:hover:bg-dm-accent-dark/95 text-white cursor-pointer inline-flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(91,155,248,0.5)]"
                                >
                                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    {contact.email}
                                </a>
                            )}
                            
                            {contact.linkedin && (
                                <a 
                                    href={contact.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-wider px-[22px] py-[13.5px] rounded-lg border border-dm-line dark:border-dm-line-dark bg-transparent hover:border-dm-accent dark:hover:border-dm-accent-dark hover:text-dm-accent dark:hover:text-dm-accent-dark text-dm-text-mut dark:text-dm-text-mut-dark cursor-pointer inline-flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    LinkedIn
                                </a>
                            )}

                            {contact.github && (
                                <a 
                                    href={contact.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-wider px-[22px] py-[13.5px] rounded-lg border border-dm-line dark:border-dm-line-dark bg-transparent hover:border-dm-accent dark:hover:border-dm-accent-dark hover:text-dm-accent dark:hover:text-dm-accent-dark text-dm-text-mut dark:text-dm-text-mut-dark cursor-pointer inline-flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                    GitHub
                                </a>
                            )}

                            {contact.credly && (
                                <a 
                                    href={contact.credly} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs tracking-wider px-[22px] py-[13.5px] rounded-lg border border-dm-line dark:border-dm-line-dark bg-transparent hover:border-dm-accent dark:hover:border-dm-accent-dark hover:text-dm-accent dark:hover:text-dm-accent-dark text-dm-text-mut dark:text-dm-text-mut-dark cursor-pointer inline-flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    Credly
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;

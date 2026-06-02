import { useApiGet } from '../../../api/use_api_get.tsx';
import type { ExperienceItem } from '../../../api/types.ts';
import Loader from '../../general/loader.tsx';
import ErrorDisplay from '../../general/error.tsx';

export default function Experience() {
    const { status, message: experienceList, error } = useApiGet<ExperienceItem[]>('/experience', []);

    return (
        <section id="experience" className="py-[100px] border-t border-dm-line dark:border-dm-line-dark scroll-mt-16">
            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                
                {/* Section Header */}
                <div className="flex items-baseline gap-4 mb-16">
                    <span className="font-mono text-xs tracking-wider text-dm-accent dark:text-dm-accent-dark font-medium">02</span>
                    <h2 className="font-serif text-3xl font-normal leading-none tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                        Selected Experience
                    </h2>
                </div>

                {/* API Status Handlers */}
                {status === 'loading' && (
                    <div className="py-12 flex justify-center">
                        <Loader />
                    </div>
                )}
                {status === 'error' && (
                    <div className="py-8">
                        <ErrorDisplay error={error} />
                    </div>
                )}

                {/* Timeline Grid */}
                {status === 'success' && experienceList && (
                    <div className="flex flex-col gap-14">
                        {experienceList.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-4 md:gap-[50px] group">
                                
                                {/* Period Sidebar */}
                                <div className="font-mono text-[12.5px] tracking-wide text-dm-text-faint dark:text-dm-text-faint-dark mt-[5px]">
                                    {item.period}
                                </div>

                                {/* Body */}
                                <div className="flex flex-col">
                                    <div className="flex flex-col md:flex-row md:items-baseline">
                                        <h3 className="font-serif text-xl font-normal tracking-[-0.01em] text-dm-text dark:text-dm-text-dark">
                                            {item.role}
                                        </h3>
                                        <span className="font-mono text-[12.5px] font-medium tracking-wide text-dm-accent dark:text-dm-accent-dark mt-1 md:mt-0 md:ml-3 flex items-baseline gap-3">
                                            <span className="hidden md:inline text-dm-text-faint dark:text-dm-text-faint-dark">·</span>
                                            {item.org}
                                        </span>
                                    </div>
                                    
                                    <p className="mt-[14px] text-[15px] leading-[1.6] text-dm-text-mut dark:text-dm-text-mut-dark max-w-[720px]">
                                        {item.desc}
                                    </p>

                                    {/* Meta Row: tags and location */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-dm-line-soft dark:border-dm-line-soft-dark">
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag, tIdx) => (
                                                <span 
                                                    key={tIdx} 
                                                    className="font-mono text-[10.5px] tracking-wide px-2.5 py-[5px] bg-dm-bg-elev dark:bg-dm-bg-elev-dark/40 border border-dm-line dark:border-dm-line-dark rounded text-dm-text-mut dark:text-dm-text-mut-dark hover:border-dm-accent dark:hover:border-dm-accent-dark hover:text-dm-text dark:hover:text-dm-text-dark cursor-default transition-colors duration-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="font-mono text-[12px] tracking-wider text-dm-text-faint dark:text-dm-text-faint-dark">
                                            {item.place}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

import { useContact } from './contact_provider.tsx';
import { useApiGet } from '../../../api/use_api_get.tsx';
import type { Project } from '../../../api/types.ts';
import ErrorDisplay from '../../general/error.tsx';
import Loader from '../../general/loader.tsx';

interface HeroProps {
    name: string;
    role: string;
    description: string;
}

export default function Hero({ name, role, description }: HeroProps) {
    const { status, contact, error } = useContact();
    const { message: projects } = useApiGet<Project[]>('/projects', []);

    const displayName = contact?.name || name;
    const nameWords = displayName.split(' ');
    const firstPart = nameWords.slice(0, -1).join(' ');
    const lastPart = nameWords[nameWords.length - 1] || '';

    return (
        <section className="relative pt-[188px] pb-[110px] overflow-hidden scroll-mt-16">
            {/* Glow background motif */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-dm-accent/10 dark:bg-dm-accent-soft-dark/15 blur-[20px] -z-10 pointer-events-none" />

            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                {/* Eyebrow & Status */}
                <div className="flex items-center gap-3.5 flex-wrap mb-[26px]">
                    <span className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark flex items-center gap-2.5 before:content-[''] before:w-[22px] before:h-[1px] before:bg-dm-accent dark:before:bg-dm-accent-dark">
                        {role}
                    </span>
                    <span className="font-mono text-[11px] font-medium tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark inline-flex items-center gap-2 px-[11px] py-[5px] border border-dm-line dark:border-dm-line-dark rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-dm-good dark:bg-dm-good-dark"></span>
                        Active
                    </span>
                </div>

                {/* Big Editorial Heading */}
                <h1 className="font-serif font-normal text-[clamp(40px,7.5vw,96px)] leading-[1.02] md:leading-[0.98] tracking-[-0.025em] m-0 text-dm-text dark:text-dm-text-dark">
                    <span className="block">
                        {firstPart} <span className="italic text-dm-accent dark:text-dm-accent-dark">{lastPart}</span>
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-[30px] max-w-[700px] text-[clamp(16px,2vw,19px)] leading-[1.55] text-dm-text-mut dark:text-dm-text-mut-dark">
                    {description}
                </p>

                {/* CTAs */}
                <div className="flex gap-3.5 flex-wrap mt-[38px]">
                    <a href="#contact" className="font-mono text-xs tracking-wider px-[22px] py-[13px] rounded-lg border border-dm-accent bg-dm-accent hover:bg-dm-accent/90 dark:border-dm-accent-dark dark:bg-dm-accent-dark dark:hover:bg-dm-accent-dark/95 text-white cursor-pointer inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(91,155,248,0.5)]">
                        Get in touch
                        <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                    <a href="#contact" className="font-mono text-xs tracking-wider px-[22px] py-[13px] rounded-lg border border-dm-line dark:border-dm-line-dark bg-transparent hover:border-dm-accent dark:hover:border-dm-accent-dark hover:text-dm-accent dark:hover:text-dm-accent-dark text-dm-text-mut dark:text-dm-text-mut-dark cursor-pointer inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
                        <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                        </svg>
                        Download résumé
                    </a>
                </div>

                {/* Status Indicator States */}
                {status === 'error' && (
                    <div className="mt-8">
                        <ErrorDisplay error={error} />
                    </div>
                )}
                {status === 'loading' && (
                    <div className="mt-8 flex justify-start">
                        <Loader />
                    </div>
                )}

                {/* Live Metrics Motif */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border border-dm-line dark:border-dm-line-dark rounded-xl overflow-hidden bg-dm-bg-elev/40 dark:bg-dm-bg-elev-dark/40 backdrop-blur-sm pointer-events-none select-none">
                    <div className="p-[22px_24px] border-b sm:border-b-0 sm:border-r border-dm-line/40 dark:border-dm-line-dark/40 flex flex-col justify-between gap-2">
                        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark">Experience</div>
                        <div className="font-serif text-[clamp(26px,3.4vw,38px)] font-normal leading-none tracking-[-0.02em] text-dm-text dark:text-dm-text-dark flex items-baseline">
                            10<span className="font-mono text-xs text-dm-text-mut dark:text-dm-text-mut-dark font-medium ml-1 tracking-normal">+ yrs</span>
                        </div>
                    </div>
                    <div className="p-[22px_24px] border-b sm:border-b-0 sm:border-r border-dm-line/40 dark:border-dm-line-dark/40 flex flex-col justify-between gap-2">
                        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark">Side projects</div>
                        <div className="font-serif text-[clamp(26px,3.4vw,38px)] font-normal leading-none tracking-[-0.02em] text-dm-accent dark:text-dm-accent-dark flex items-baseline tabular-nums">
                            {projects ? projects.length : 0}
                        </div>
                    </div>
                    <div className="p-[22px_24px] flex flex-col justify-between gap-2">
                        <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark">Domains</div>
                        <div className="font-serif text-[clamp(26px,3.4vw,38px)] font-normal leading-none tracking-[-0.02em] text-dm-text dark:text-dm-text-dark flex items-baseline">
                            3<span className="font-mono text-[10.5px] text-dm-text-mut dark:text-dm-text-mut-dark font-medium ml-1 tracking-normal">sys · sec · infra</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

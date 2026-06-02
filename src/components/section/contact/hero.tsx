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
        <section className="relative pt-[160px] pb-[110px] overflow-hidden scroll-mt-16">
            {/* Glow background motif */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-dm-accent/10 dark:bg-dm-accent-soft-dark/15 blur-[20px] -z-10 pointer-events-none" />

            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Narrative Content & Metrics */}
                    <div className="lg:col-span-7 flex flex-col">
                        {/* Eyebrow & Status */}
                        <div className="flex items-center gap-3.5 flex-wrap mb-[26px]">
                            <span className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark flex items-center gap-2.5 before:content-[''] before:w-[22px] before:h-[1px] before:bg-dm-accent dark:before:bg-dm-accent-dark">
                                {role}
                            </span>
                            <span className="font-mono text-[11px] font-medium tracking-wide text-dm-text-mut dark:text-dm-text-mut-dark inline-flex items-center gap-2 px-[11px] py-[5px] border border-dm-line dark:border-dm-line-dark rounded-full bg-dm-bg-elev/30 dark:bg-dm-bg-elev-dark/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-dm-good dark:bg-dm-good-dark"></span>
                                Active
                            </span>
                        </div>

                        {/* Big Editorial Heading */}
                        <h1 className="font-serif font-normal text-[clamp(45px,5.2vw,80px)] leading-[1.05] tracking-[-0.02em] m-0 text-dm-text dark:text-dm-text-dark">
                            <span className="block">
                                {firstPart} <span className="italic text-dm-accent dark:text-dm-accent-dark">{lastPart}</span>
                            </span>
                        </h1>

                        {/* Tagline/Description */}
                        <p className="mt-[24px] text-[clamp(18px,2vw,20.5px)] leading-[1.5] text-dm-text-mut dark:text-dm-text-mut-dark font-serif italic border-l-2 border-dm-line dark:border-dm-line-dark pl-4 max-w-[620px]">
                            {description}
                        </p>

                        {/* Consolidated Biography Paragraphs */}
                        <div className="mt-8 flex flex-col gap-5 text-[15.5px] md:text-[16px] leading-[1.65] text-dm-text-mut dark:text-dm-text-mut-dark font-sans max-w-[620px]">
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

                        {/* CTAs */}
                        <div className="flex gap-3.5 flex-wrap mt-10">
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
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 border border-dm-line dark:border-dm-line-dark rounded-xl overflow-hidden bg-dm-bg-elev/40 dark:bg-dm-bg-elev-dark/40 backdrop-blur-sm pointer-events-none select-none max-w-[620px]">
                            <div className="p-[20px_22px] border-b sm:border-b-0 sm:border-r border-dm-line/40 dark:border-dm-line-dark/40 flex flex-col justify-between gap-1.5">
                                <div className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark">Experience</div>
                                <div className="font-serif text-[clamp(26px,3.2vw,35px)] font-normal leading-none tracking-[-0.02em] text-dm-text dark:text-dm-text-dark flex items-baseline">
                                    10<span className="font-mono text-[13px] text-dm-text-mut dark:text-dm-text-mut-dark font-medium ml-1 tracking-normal">+ yrs</span>
                                </div>
                            </div>
                            <div className="p-[20px_22px] border-b sm:border-b-0 sm:border-r border-dm-line/40 dark:border-dm-line-dark/40 flex flex-col justify-between gap-1.5">
                                <div className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark">Side projects</div>
                                <div className="font-serif text-[clamp(26px,3.2vw,35px)] font-normal leading-none tracking-[-0.02em] text-dm-accent dark:text-dm-accent-dark flex items-baseline tabular-nums">
                                    {projects ? projects.length : 0}
                                </div>
                            </div>
                            <div className="p-[20px_22px] flex flex-col justify-between gap-1.5">
                                <div className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-dm-text-faint dark:text-dm-text-faint-dark">Domains</div>
                                <div className="font-serif text-[clamp(26px,3.2vw,35px)] font-normal leading-none tracking-[-0.02em] text-dm-text dark:text-dm-text-dark flex items-baseline">
                                    3<span className="font-mono text-[11px] text-dm-text-mut dark:text-dm-text-mut-dark font-medium ml-1 tracking-normal">sys · sec · infra</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Premium Blueprint Portrait Photo Placeholder */}
                    <div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:pt-14">
                        <div className="w-full max-w-[360px] aspect-[4/5] border border-dm-line dark:border-dm-line-dark rounded-2xl bg-dm-bg-elev/15 dark:bg-dm-bg-elev-dark/15 backdrop-blur-md relative p-4 overflow-hidden select-none flex flex-col justify-between group transition-all duration-300 hover:border-dm-accent/40 dark:hover:border-dm-accent-dark/40">
                            
                            {/* Blueprint grid background */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,120,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,120,0.06)_1px,transparent_1px)] bg-[size:16px_16px] -z-10" />
                            
                            {/* Inner corner outline helpers */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-dm-text-faint dark:border-dm-text-faint-dark/40" />
                            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-dm-text-faint dark:border-dm-text-faint-dark/40" />
                            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-dm-text-faint dark:border-dm-text-faint-dark/40" />
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-dm-text-faint dark:border-dm-text-faint-dark/40" />

                            {/* Technical Meta Header */}
                            <div className="flex justify-between items-center w-full font-mono text-[9px] tracking-wider text-dm-text-faint dark:text-dm-text-faint-dark/50">
                                <span>[PORTRAIT_SHEET_A4]</span>
                                <span>[SYS_ENG_CORE]</span>
                            </div>

                            {/* Center visual: Technical alignment blueprint */}
                            <div className="flex-1 flex flex-col justify-center items-center relative py-8">
                                {/* Thin blueprint crosshairs */}
                                <div className="absolute w-[60px] h-[1px] bg-dm-line/50 dark:bg-dm-line-dark/40" />
                                <div className="absolute h-[60px] w-[1px] bg-dm-line/50 dark:bg-dm-line-dark/40" />
                                
                                {/* Blueprint circle alignment ring */}
                                <div className="w-[120px] h-[120px] rounded-full border border-dashed border-dm-line/80 dark:border-dm-line-dark/60 flex items-center justify-center animate-[spin_60s_linear_infinite]" />
                                
                                <div className="absolute flex flex-col items-center gap-2">
                                    <svg className="w-8 h-8 text-dm-accent/60 dark:text-dm-accent-dark/50 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                        <circle cx="12" cy="13" r="4" />
                                    </svg>
                                    <span className="font-mono text-[10px] tracking-widest text-dm-text-mut dark:text-dm-text-mut-dark mt-2 font-medium bg-dm-bg/80 dark:bg-dm-bg-dark/80 px-2 py-0.5 rounded border border-dm-line/30 dark:border-dm-line-dark/30">
                                        PLACEHOLDER
                                    </span>
                                </div>
                            </div>

                            {/* Technical Meta Footer */}
                            <div className="flex justify-between items-end w-full font-mono text-[9px] tracking-wider text-dm-text-faint dark:text-dm-text-faint-dark/50">
                                <span>51.5074° N, 0.1278° W</span>
                                <span>REV: 2.0.4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

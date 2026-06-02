import { useApiGet } from '../src/api/use_api_get.tsx';
import type { SkillCategory } from '../src/api/types.ts';

export default function Skills() {
    const { status, message: skillCategories, error } = useApiGet<SkillCategory[]>('/skills', []);

    const getCategorySlug = (category: string): string => {
        const lower = category.toLowerCase();
        if (lower.includes('lang')) return '/lng';
        if (lower.includes('dist')) return '/sys';
        if (lower.includes('lat')) return '/lat';
        if (lower.includes('fin')) return '/fin';
        if (lower.includes('sec')) return '/sec';
        if (lower.includes('obs')) return '/obs';
        return `/${lower.substring(0, 3)}`;
    };

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'error') return <div>Error: {error}</div>;

    return (
        <section id="skills" className="py-[100px] border-t border-dm-line dark:border-dm-line-dark scroll-mt-16">
            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                <div className="flex items-baseline gap-4 mb-16">
                    <span className="font-mono text-xs tracking-wider text-dm-accent dark:text-dm-accent-dark font-medium">03</span>
                    <h2 className="font-serif text-3xl font-normal leading-none tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                        Capabilities &amp; Stack
                    </h2>
                </div>

                {skillCategories && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((cat, idx) => (
                            <div key={idx} className="p-6 border border-dm-line dark:border-dm-line-dark rounded-xl bg-dm-bg-elev/30 dark:bg-dm-bg-elev-dark/30 hover:bg-dm-bg-elev/60 dark:hover:bg-dm-bg-elev-dark/60 hover:border-dm-accent dark:hover:border-dm-accent-dark transition-all duration-300 flex flex-col gap-6">
                                <div className="flex items-center gap-3.5">
                                    <span className="font-mono text-[10.5px] font-medium tracking-wider text-dm-accent dark:text-dm-accent-dark px-[7px] py-[3px] bg-dm-accent/10 dark:bg-dm-accent-soft-dark/15 border border-dm-accent/20 rounded select-none">
                                        {getCategorySlug(cat.category)}
                                    </span>
                                    <h3 className="font-serif text-lg font-normal tracking-[-0.010em] text-dm-text dark:text-dm-text-dark">
                                        {cat.category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="font-mono text-[11px] tracking-wide px-2.5 py-[5px] bg-dm-bg-elev dark:bg-dm-bg-elev-dark/40 border border-dm-line dark:border-dm-line-dark rounded text-dm-text-mut dark:text-dm-text-mut-dark cursor-default transition-all duration-200 hover:border-dm-accent dark:hover:border-dm-accent-dark hover:text-dm-text dark:hover:text-dm-text-dark">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

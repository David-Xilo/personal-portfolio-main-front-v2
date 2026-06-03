import { useRef } from 'react';
import Github from '../../icons/github.tsx';
import type { RepositoryInfo } from '../../../api/types.ts';

// Helper to resolve standard GitHub language colors
const getLanguageDotClass = (lang: string) => {
    const l = lang.toLowerCase();
    if (l.includes('ts') || l.includes('typescript')) return 'bg-[#3178c6]';
    if (l.includes('js') || l.includes('javascript')) return 'bg-[#f1e05a]';
    if (l.includes('c++') || l.includes('cpp')) return 'bg-[#f34b7d]';
    if (l.includes('rust')) return 'bg-[#e38c00]';
    if (l.includes('go')) return 'bg-[#00add8]';
    if (l.includes('java')) return 'bg-[#b07219]';
    if (l.includes('py') || l.includes('python')) return 'bg-[#3572a5]';
    return 'bg-dm-accent dark:bg-dm-accent-dark';
};

const getLanguageName = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes('rs') || t.includes('rust')) return 'Rust';
    if (t.includes('cpp') || t.includes('c++')) return 'C++';
    if (t.includes('go')) return 'Go';
    if (t.includes('ts') || t.includes('typescript')) return 'TypeScript';
    return 'TypeScript'; // Default fallback matching the profile
};

interface RepositoryCardProps {
    repository: RepositoryInfo;
}

export function RepositoryCard({ repository }: RepositoryCardProps) {
    const language = getLanguageName(repository.title);
    const dotClass = getLanguageDotClass(language);

    return (
        <a
            href={repository.link_to_git}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start flex-shrink-0 w-[280px] p-5 border border-dm-line dark:border-dm-line-dark rounded-xl bg-dm-bg-elev/30 dark:bg-dm-bg-elev-dark/30 hover:bg-dm-bg-elev/60 dark:hover:bg-dm-bg-elev-dark/60 hover:border-dm-accent dark:hover:border-dm-accent-dark transition-all duration-300 flex flex-col justify-between min-h-[160px] group/repo select-none cursor-pointer"
        >
            <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-2.5">
                    <Github className="w-4 h-4 text-dm-text-faint dark:text-dm-text-faint-dark group-hover/repo:text-dm-accent dark:group-hover/repo:text-dm-accent-dark transition-colors duration-350" />
                    <h4 className="font-mono text-[13.5px] font-semibold tracking-wide text-dm-text dark:text-dm-text-dark group-hover/repo:text-dm-accent dark:group-hover/repo:text-dm-accent-dark transition-colors duration-250">
                        {repository.title}
                    </h4>
                </div>

                {/* Description */}
                <p className="text-[13px] leading-[1.5] text-dm-text-mut dark:text-dm-text-mut-dark line-clamp-2">
                    {repository.description}
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono text-dm-text-faint dark:text-dm-text-faint-dark mt-4">
                <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${dotClass}`} />
                    {language}
                </span>
                <span className="opacity-0 group-hover/repo:opacity-100 transition-opacity duration-300">
                    Source →
                </span>
            </div>
        </a>
    );
}

export function RepositoryCarousel({ repositories }: { repositories: RepositoryInfo[] }) {
    const trackRef = useRef<HTMLDivElement>(null);

    if (!repositories || repositories.length === 0) return null;

    const scrollLeft = (e: React.MouseEvent) => {
        e.stopPropagation();
        const track = trackRef.current;
        if (!track) return;

        // Check if we are at the beginning
        if (track.scrollLeft <= 5) {
            track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = (e: React.MouseEvent) => {
        e.stopPropagation();
        const track = trackRef.current;
        if (!track) return;

        const maxScroll = track.scrollWidth - track.clientWidth;
        // Check if we are at the end (with a small buffer for subpixel issues)
        if (track.scrollLeft >= maxScroll - 5) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative mt-6 group/carousel">
            
            {/* Previous Button Overlay */}
            {repositories.length > 3 && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-dm-line dark:border-dm-line-dark bg-dm-bg/80 dark:bg-dm-bg-dark/80 text-dm-text-mut dark:text-dm-text-mut-dark flex items-center justify-center cursor-pointer shadow-sm hover:text-dm-accent dark:hover:text-dm-accent-dark hover:border-dm-accent dark:hover:border-dm-accent-dark transition-all duration-300 z-10 opacity-0 group-hover/carousel:opacity-100 hidden md:flex select-none"
                    aria-label="Scroll previous repositories"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Carousel Snap Track */}
            <div
                ref={trackRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-1"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {repositories.map((repo, idx) => (
                    <RepositoryCard key={idx} repository={repo} />
                ))}
            </div>

            {/* Next Button Overlay */}
            {repositories.length > 3 && (
                <button
                    onClick={scrollRight}
                    className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-dm-line dark:border-dm-line-dark bg-dm-bg/80 dark:bg-dm-bg-dark/80 text-dm-text-mut dark:text-dm-text-mut-dark flex items-center justify-center cursor-pointer shadow-sm hover:text-dm-accent dark:hover:text-dm-accent-dark hover:border-dm-accent dark:hover:border-dm-accent-dark transition-all duration-300 z-10 opacity-0 group-hover/carousel:opacity-100 hidden md:flex select-none"
                    aria-label="Scroll next repositories"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}


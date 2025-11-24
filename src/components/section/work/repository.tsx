import Github from "../../../icons/github.tsx";
import {useState} from "react";
import ArrowRight from "../../../icons/arrow_right.tsx";
import ArrowLeft from "../../../icons/arrow_left.tsx";


interface RepositoryInfo {
    title: string;
    description: string;
    link_to_git: string;
}

const RepositoryCard = ({repository}: { repository: RepositoryInfo }) => {
    return (
        <div
            className="flex-shrink-0 w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {repository.title}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {repository.description}
            </p>

            <a href={repository.link_to_git}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
               onClick={(e) => e.stopPropagation()}
            >
                <Github className="w-3.5 h-3.5"/>
                View Source
            </a>
        </div>
    );
};

const RepositoryCarousel = ({repositories}: { repositories: RepositoryInfo[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (repositories.length === 0) return null;

    const canGoLeft = currentIndex > 0;
    const canGoRight = currentIndex < repositories.length - 1;

    const goToPrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => Math.min(repositories.length - 1, prev + 1));
    };

    return (
        <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                    {repositories.length} {repositories.length === 1 ? 'Repository' : 'Repositories'}
                </span>
                {repositories.length > 1 && (
                    <div className="flex items-center gap-1">
                        <button
                            onClick={goToPrevious}
                            disabled={!canGoLeft}
                            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            aria-label="Previous repository"
                        >
                            <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
                        </button>
                        <span className="text-xs text-gray-500 dark:text-gray-400 min-w-[3rem] text-center">
                            {currentIndex + 1} / {repositories.length}
                        </span>
                        <button
                            onClick={goToNext}
                            disabled={!canGoRight}
                            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            aria-label="Next repository"
                        >
                            <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
                        </button>
                    </div>
                )}
            </div>

            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{transform: `translateX(-${currentIndex * 100}%)`}}
                >
                    {repositories.map((repository, idx) => (
                        <div key={idx} className="w-full flex-shrink-0">
                            <RepositoryCard repository={repository}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export {RepositoryCard, RepositoryCarousel}


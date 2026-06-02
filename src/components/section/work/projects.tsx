import { useApiGet } from '../../../api/use_api_get.tsx';
import type { Project } from '../../../api/types.ts';
import { RepositoryCarousel } from './repository.tsx';
import ErrorDisplay from '../../general/error.tsx';
import Loader from '../../general/loader.tsx';

export default function Projects() {
    const projectsPath = '/projects';
    const { status, message: projects, error } = useApiGet<Project[]>(projectsPath, []);

    return (
        <section id="projects" className="py-[100px] border-t border-dm-line dark:border-dm-line-dark scroll-mt-16">
            <div className="max-w-[1180px] mx-auto px-6 md:px-16">
                
                {/* Section Header */}
                <div className="flex items-baseline gap-4 mb-16">
                    <span className="font-mono text-xs tracking-wider text-dm-accent dark:text-dm-accent-dark font-medium">03</span>
                    <h2 className="font-serif text-3xl font-normal leading-none tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                        Shipped Projects
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

                {/* Projects List */}
                {status === 'success' && projects && (
                    <div className="flex flex-col gap-16">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group/proj flex flex-col">
                                
                                {/* Project Head */}
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-dm-line/45 dark:border-dm-line-dark/45 pb-3.5 gap-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-serif text-[22px] md:text-[25px] font-normal tracking-[-0.015em] text-dm-text dark:text-dm-text-dark">
                                            {project.title}
                                        </h3>
                                        {project.link_to_project && (
                                            <a 
                                                href={project.link_to_project}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-dm-text-faint dark:text-dm-text-faint-dark hover:text-dm-accent dark:hover:text-dm-accent-dark transition-colors duration-250"
                                                aria-label={`View live ${project.title}`}
                                            >
                                                <svg className="w-[17px] h-[17px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className="font-mono text-[12px] tracking-wider text-dm-text-faint dark:text-dm-text-faint-dark uppercase">
                                        {project.repositories && project.repositories.length > 0 ? 'Platform · Production' : 'Research · Archive'}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="mt-5 text-[15px] md:text-[15.5px] leading-[1.6] text-dm-text-mut dark:text-dm-text-mut-dark max-w-[840px]">
                                    {project.description}
                                </p>

                                {/* Repositories Snap Carousel */}
                                {project.repositories && project.repositories.length > 0 && (
                                    <RepositoryCarousel repositories={project.repositories} />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

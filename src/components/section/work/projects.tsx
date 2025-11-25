import {motion} from 'framer-motion';
import ExternalLink from "../../../icons/external_link.tsx";
import {useApiGet} from "../../../api/use_api_get.tsx";
import type {Project} from "../../../api/types.ts";
import {RepositoryCarousel} from "./repository.tsx";
import ErrorDisplay from "../../general/error.tsx";

interface ProjectsProps {
    projects?: Project[];
    category?: string;
}


export default function Projects({}: ProjectsProps) {
    const projectsPath = '/projects'
    const {status, message: projects, error} = useApiGet<Project[]>(projectsPath, [])

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-gray-600 dark:text-gray-400">Loading...</div>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <ErrorDisplay error={error} />
        )
    }

    return (
        <>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl">
                A collection of projects spanning my interests and expertise.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects?.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                        className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3 ">
                                {project.image_url && (
                                    <img
                                        src={project.image_url}
                                        alt={project.title}
                                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover flex-shrink-0"
                                    />
                                )}
                                <div className="flex-1 flex items-center justify-between gap-2">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                        {project.title}
                                    </h3>
                                    {project.link_to_project && (
                                        <a href={project.link_to_project}
                                           target="_blank"
                                           rel="noopener noreferrer"
                                           className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors flex-shrink-0"
                                           aria-label="View live project"
                                        >
                                            <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {project.repositories && project.repositories.length > 0 && (
                                <RepositoryCarousel repositories={project.repositories}/>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </>
    );
}

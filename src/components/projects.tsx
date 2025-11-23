import {motion} from 'framer-motion';
import Github from "../icons/github.tsx";
import ExternalLink from "../icons/external_link.tsx";
import {useApiGet} from "../api/use_api_get.tsx";
import type {Project} from "../api/types.ts";

interface ProjectsProps {
    projects?: Project[];
    category?: string;
}

// Projects structure
/*
* [
  [
    {
      "description": "string",
      "link_to_project": "string",
      "project_type": "string",
      "repositories": [
        {
          "description": "string",
          "link_to_git": "string",
          "title": "string"
        }
      ],
      "title": "string"
    }
  ]
]
* */


// TODO - add complex card with repos inside project card
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
            <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-4">
                    <h3 className="text-lg font-medium text-red-800 dark:text-red-400 mb-2">
                        Error Loading Projects
                    </h3>
                    <p className="text-red-600 dark:text-red-300">
                        {error ||
                            `An unexpected error occurred while loading Projects.`}
                    </p>
                </div>
            </div>
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
                        // TODO - add images to cloudinary and use them here
                        {/*{project.image_url && (*/}
                        {/*  <div className="aspect-video bg-gray-200 overflow-hidden">*/}
                        {/*    <img*/}
                        {/*      src={project.image_url}*/}
                        {/*      alt={project.title}*/}
                        {/*      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"*/}
                        {/*    />*/}
                        {/*  </div>*/}
                        {/*)}*/}

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    {project.repositories && project.repositories.at(0)?.link_to_git && (
                                        <a
                                            href={project.repositories.at(0)?.link_to_git}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                                            aria-label="View source"
                                        >
                                            <Github className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
                                        </a>
                                    )}
                                    {project.link_to_project && (
                                        <a
                                            href={project.link_to_project}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                                            aria-label="View live"
                                        >
                                            <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400"/>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/*<div className="flex flex-wrap gap-2">*/}
                            {/*  {project.technologies.map(tech => (*/}
                            {/*    <span */}
                            {/*      key={tech}*/}
                            {/*      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"*/}
                            {/*    >*/}
                            {/*      {tech}*/}
                            {/*    </span>*/}
                            {/*  ))}*/}
                            {/*</div>*/}
                        </div>
                    </motion.article>
                ))}
            </div>
        </>
    );
}

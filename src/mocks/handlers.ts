import {http, HttpResponse} from 'msw'

// Allow running without VITE_API_URL in development by falling back to same-origin relative URLs
const domain = import.meta.env.VITE_API_URL || ''

export const handlers = [
    http.get(`${domain}/contact`, () => {
        const contact = {
            message: {
                name: 'John Doe',
                email: 'john.doe@mail.com',
                linkedin: 'https://linkedin/johndoe',
                github: 'https://github.com/johndoe',
                credly: 'https://credly.com/johndoe',
            },
        }
        return HttpResponse.json(contact)
    }),
    http.get(`${domain}/projects`, () => {
        const projects = {
            message: [
                {
                    title: 'tech project title',
                    description: 'project description',
                    link_to_project: 'https://github.com/',
                    project_type: 'personal',
                    repositories: [
                        {
                            title: 'repo 1',
                            description: 'repo 1 description',
                            link_to_git: 'https://github.com/johndoe/1',
                        },
                        {
                            title: 'repo 2',
                            description: 'repo 2 description',
                            link_to_git: 'https://github.com/johndoe/2',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                        },
                    ],
                },
                {
                    title: 'tech project title 2',
                    description: 'project description 2',
                    link_to_project: 'https://github.com/',
                    repositories: [],
                },
            ],
        }
        return HttpResponse.json(projects)
    }),
]

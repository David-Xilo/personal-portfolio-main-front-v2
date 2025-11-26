import {http, HttpResponse} from 'msw'

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
                    show_priority: 70,
                    image_url: 'https://res.cloudinary.com/drngniorr/image/upload/v1764096154/DM-personal-portfolio-cut_y0gr4f.png',
                    repositories: [
                        {
                            title: 'repo 1',
                            description: 'repo 1 description',
                            link_to_git: 'https://github.com/johndoe/1',
                            show_priority: 10,
                        },
                        {
                            title: 'repo 2',
                            description: 'repo 2 description',
                            link_to_git: 'https://github.com/johndoe/2',
                            show_priority: 20,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                            show_priority: 30,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                            show_priority: 40,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                            show_priority: 50,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/johndoe/3',
                            show_priority: 60,
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
                    show_priority: 80,
                    repositories: [],
                },
            ],
        }
        return HttpResponse.json(projects)
    }),
]

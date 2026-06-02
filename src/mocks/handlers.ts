import {http, HttpResponse} from 'msw'

const domain = import.meta.env.VITE_API_URL || ''

export const handlers = [
    http.get(`${domain}/contact`, () => {
        const contact = {
            message: {
                name: 'David Moura',
                email: 'david.moura@mail.com',
                linkedin: 'https://linkedin/davidmoura',
                github: 'https://github.com/davidmoura',
                credly: 'https://credly.com/davidmoura',
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
                            link_to_git: 'https://github.com/davidmoura/1',
                            show_priority: 10,
                        },
                        {
                            title: 'repo 2',
                            description: 'repo 2 description',
                            link_to_git: 'https://github.com/davidmoura/2',
                            show_priority: 20,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/davidmoura/3',
                            show_priority: 30,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/davidmoura/3',
                            show_priority: 40,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/davidmoura/3',
                            show_priority: 50,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/davidmoura/3',
                            show_priority: 60,
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/davidmoura/3',
                        },
                        {
                            title: 'repo 3',
                            description: 'repo 3 description',
                            link_to_git: 'https://github.com/davidmoura/3',
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
    http.get(`${domain}/experience`, () => {
        const experience = {
            message: [
                {
                    period: '2018 — Present',
                    role: 'Senior Software Engineer',
                    org: 'Market Infrastructure Core',
                    desc: 'Focus on system integrity, risk control, and reliable data flows in market infrastructure. Solve hard problems and turn them into stable, secure solutions.',
                    tags: ['System Integrity', 'Risk Control', 'Market Infrastructure'],
                    place: 'Remote'
                },
                {
                    period: '2014 — 2018',
                    role: 'Software Engineer',
                    org: 'High-Throughput Systems Desk',
                    desc: 'Experience designing low-latency, high-throughput systems, building secure backend services, and driving real-time data pipelines.',
                    tags: ['Low-Latency', 'Backend Services', 'Data Pipelines'],
                    place: 'Remote'
                }
            ]
        }
        return HttpResponse.json(experience)
    }),
    http.get(`${domain}/skills`, () => {
        const skills = {
            message: [
                {
                    category: 'Core Architecture',
                    skills: ['System Architecture & Design', 'Low-Latency, High-Throughput Systems']
                },
                {
                    category: 'Systems Security',
                    skills: ['Secure Backend Services', 'Risk-Aware Engineering']
                },
                {
                    category: 'Data & Infrastructure',
                    skills: ['Real-Time Data Pipelines', 'Finance-Grade Infrastructure', 'CI/CD & DevOps Practices']
                },
                {
                    category: 'Integrations',
                    skills: ['API & Integration Design']
                }
            ]
        }
        return HttpResponse.json(skills)
    }),
]

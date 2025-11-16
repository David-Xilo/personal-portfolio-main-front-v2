
interface ContactInfo {
    name: string
    email: string
    linkedin: string
    github: string
    credly: string
}

interface RepositoryInfo {
    title: string
    description: string
    link_to_git: string
}

interface Project {
    title: string
    description: string
    repositories: RepositoryInfo[]
    link_to_project: string
}

export type {Project, RepositoryInfo, ContactInfo}

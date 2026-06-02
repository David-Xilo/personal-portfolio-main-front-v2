
interface ContactInfo {
    name: string
    email: string
    linkedin: string | null
    github: string | null
    credly: string | null
}

interface RepositoryInfo {
    title: string
    description: string
    link_to_git: string
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

interface Project {
    title: string
    description: string
    repositories: RepositoryInfo[]
    link_to_project: string
    image_url: string
}

interface ExperienceItem {
    period: string
    role: string
    org: string
    desc: string
    tags: string[]
    place: string
}

interface SkillCategory {
    category: string
    skills: string[]
}

export type {Project, RepositoryInfo, ContactInfo, ExperienceItem, SkillCategory}

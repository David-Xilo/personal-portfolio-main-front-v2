export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'technology' | 'games' | 'finance';
    technologies: string[];
    github_url?: string;
    live_url?: string;
    image_url?: string;
    created_at: string;
}

export interface Contact {
    email: string;
    github: string;
    linkedin: string;
    credly?: string;
}

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

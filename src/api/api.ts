import type {ApiResponse, Contact, Project} from '../types';

// const API_BASE_URL = import.meta.env.VITE_API_URL // || '/api';
const API_BASE_URL = 'localhost:5173' // || '/api';

async function fetchApi<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    // if (!response.ok) {
    //   throw new Error(`API error: ${response.statusText}`);
    // }
    const data: ApiResponse<T> = await response.json();
    // if (data.error) {
    //   throw new Error(data.error);
    // }
    return data.data;
}

export const api = {
    getProjects: () => //(category?: string) =>
        fetchApi<Project[]>(`/projects`), //${category ? `?category=${category}` : ''}`),

    getProject: (id: string) =>
        fetchApi<Project>(`/projects/${id}`),

    getContact: () =>
        fetchApi<Contact>('/contact'),
};

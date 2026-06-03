import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'api-mock-rewrite',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    const url = req.url?.split('?')[0];
                    if (url === '/contact') req.url = req.url!.replace('/contact', '/api/contact.json');
                    else if (url === '/projects') req.url = req.url!.replace('/projects', '/api/projects.json');
                    else if (url === '/experience') req.url = req.url!.replace('/experience', '/api/experience.json');
                    else if (url === '/skills') req.url = req.url!.replace('/skills', '/api/skills.json');
                    next();
                });
            },
            configurePreviewServer(server) {
                server.middlewares.use((req, res, next) => {
                    const url = req.url?.split('?')[0];
                    if (url === '/contact') req.url = req.url!.replace('/contact', '/api/contact.json');
                    else if (url === '/projects') req.url = req.url!.replace('/projects', '/api/projects.json');
                    else if (url === '/experience') req.url = req.url!.replace('/experience', '/api/experience.json');
                    else if (url === '/skills') req.url = req.url!.replace('/skills', '/api/skills.json');
                    next();
                });
            }
        }
    ],
})

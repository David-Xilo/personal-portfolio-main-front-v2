import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'api-mock-rewrite',
            configureServer(server) {
                server.middlewares.use((req, _res, next) => {
                    if (req.url === '/contact') {
                        req.url = '/api/contact.json'
                    } else if (req.url === '/projects') {
                        req.url = '/api/projects.json'
                    } else if (req.url === '/experience') {
                        req.url = '/api/experience.json'
                    } else if (req.url === '/skills') {
                        req.url = '/api/skills.json'
                    }
                    next()
                })
            }
        }
    ],
})

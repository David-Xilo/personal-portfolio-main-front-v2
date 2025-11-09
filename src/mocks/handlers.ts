import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/projects', () => {
        // return HttpResponse.json({
        //     // your mock data
        //     data: 'mocked response'
        // })
        return []
    }),

    http.post('/contact', () => {
        return HttpResponse.json({ email: "string;",
            github: "string",
            linkedin: "linkedin" })
    }),
]

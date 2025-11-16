import { config } from '../config'

class ApiError extends Error {
    public status?: number
    public code?: string

    constructor(message: string, status?: number, code?: string) {
        super(message)
        this.status = status
        this.code = code
        this.name = 'ApiError'
        Object.setPrototypeOf(this, ApiError.prototype)
    }
}

type RequestOptions = {
    signal?: AbortSignal
} & RequestInit

class ApiClient {
    private readonly baseURL: string

    constructor() {
        this.baseURL = config.apiUrl
    }

    async get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.makeRequest<T>(endpoint, {
            ...options,
            method: 'GET',
        })
    }

    private async handleResponse<T>(response: Response): Promise<T> {
        const contentType = response.headers.get('content-type')
        const isJson = contentType?.includes('application/json')

        if (!response.ok) {
            let errorMessage = `HTTP ${response.status}: ${response.statusText}`

            if (isJson) {
                try {
                    const errorData = await response.json()
                    errorMessage = errorData.error || errorData.message || errorMessage
                } catch {
                    // Failed to parse error JSON
                }
            }

            switch (response.status) {
                case 400:
                    throw new ApiError(errorMessage, 400, 'BAD_REQUEST')
                case 403:
                    throw new ApiError('Access denied', 403, 'FORBIDDEN')
                case 404:
                    throw new ApiError('Resource not found', 404, 'NOT_FOUND')
                case 429:
                    throw new ApiError('Too many requests', 429, 'RATE_LIMITED')
                case 500:
                    throw new ApiError('Internal server error', 500, 'SERVER_ERROR')
                case 503:
                    throw new ApiError('Service unavailable', 503, 'SERVICE_UNAVAILABLE')
                default:
                    throw new ApiError(errorMessage, response.status, 'API_ERROR')
            }
        }

        if (response.status === 204 || !isJson) {
            return {} as T
        }

        return await response.json()
    }

    private async makeRequest<T>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<T> {
        const url = `${this.baseURL}${endpoint}`

        const requestOptions: RequestInit = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            mode: 'cors',
        }

        if (config.isDevelopment) {
            console.log(`API ${options.method || 'GET'}: ${url}`)
        }

        try {
            const response = await fetch(url, requestOptions)
            return await this.handleResponse<T>(response)
        } catch (error) {
            // Handle abort errors
            if (error instanceof Error && error.name === 'AbortError') {
                throw new ApiError('Request cancelled', 0, 'CANCELLED')
            }

            // Handle network errors
            if (error instanceof TypeError) {
                throw new ApiError('Network error - please check your connection', 0, 'NETWORK_ERROR')
            }

            // Re-throw ApiError
            if (error instanceof ApiError) {
                throw error
            }

            // Unknown error
            throw new ApiError(
                error instanceof Error ? error.message : 'Unknown error',
                0,
                'UNKNOWN_ERROR'
            )
        }
    }
}

export const apiClient = new ApiClient()
export default apiClient
export { ApiError }

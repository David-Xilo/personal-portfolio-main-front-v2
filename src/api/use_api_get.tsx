import { useEffect, useState } from 'react'
import apiClient, { ApiError } from './client.ts'
import { handleApiError, handleUnexpectedError } from './error_handler.ts'

interface ApiResponse<T> {
    status: 'loading' | 'success' | 'error' | ''
    message: T | null
    error: string
}

const useApiGet = <T,>(path: string, initialValue: T | null): ApiResponse<T> => {
    const [data, setData] = useState<ApiResponse<T>>({
        status: 'loading',
        message: initialValue,
        error: '',
    })

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            try {
                if (!navigator.onLine) {
                    throw new ApiError('No internet connection', 0, 'OFFLINE')
                }

                const response = await apiClient.get<{ message: T }>(path, {
                    signal: controller.signal
                })

                const normalizedData: ApiResponse<T> = {
                    status: 'success',
                    message: response.message,
                    error: '',
                }
                setData(normalizedData)
            } catch (err) {
                const { errorMessage, shouldReturn } = handleApiError(err)
                if (shouldReturn) return

                const errorData: ApiResponse<T> = {
                    status: 'error',
                    message: initialValue,
                    error: errorMessage,
                }
                setData(errorData)
            }
        }

        fetchData().catch(err => {
            const errorData: ApiResponse<T> = {
                status: 'error',
                message: initialValue,
                error: handleUnexpectedError(err),
            }
            setData(errorData)
        })

        return () => {
            controller.abort()
        }
    }, [path])

    return data
}

export { useApiGet }
export type { ApiResponse }

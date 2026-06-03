import { useEffect, useState, useRef } from 'react'
import apiClient, { ApiError } from './client.ts'
import { handleApiError, handleUnexpectedError } from './error_handler.ts'

interface ApiResponse<T> {
    status: 'loading' | 'success' | 'error'
    message: T | null
    error: string
}

const useApiGet = <T,>(path: string, initialValue: T | null): ApiResponse<T> => {
    const initialValueRef = useRef(initialValue)
    
    const [data, setData] = useState<ApiResponse<T>>({
        status: 'loading',
        message: initialValue,
        error: '',
    })
    const [prevPath, setPrevPath] = useState(path)

    if (path !== prevPath) {
        setPrevPath(path)
        setData({
            status: 'loading',
            message: initialValue,
            error: '',
        })
    }

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

                setData({
                    status: 'success',
                    message: response.message,
                    error: '',
                })
            } catch (err) {
                const { errorMessage, shouldReturn } = handleApiError(err)
                if (shouldReturn) return

                setData({
                    status: 'error',
                    message: initialValueRef.current,
                    error: errorMessage,
                })
            }
        }

        fetchData().catch(err => {
            setData({
                status: 'error',
                message: initialValueRef.current,
                error: handleUnexpectedError(err),
            })
        })

        return () => {
            controller.abort()
        }
    }, [path])

    return data
}

export { useApiGet }
export type { ApiResponse }

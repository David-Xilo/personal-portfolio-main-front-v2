interface AppConfig {
    apiUrl: string
    environment: 'development' | 'production'
    isProduction: boolean
    isDevelopment: boolean
}

class ConfigError extends Error {
    constructor(message: string) {
        super(`Configuration Error: ${message}`)
        this.name = 'ConfigError'
    }
}

function getRequiredEnvVar(
    value: string | undefined,
    name: string,
    fallback?: string,
): string {
    const envValue = value ?? fallback ?? ''

    if (!envValue) {
        throw new ConfigError(`Required environment variable ${name} is not set`)
    }

    return envValue
}

function validateUrl(url: string, name: string): string {
    try {
        new URL(url)
        return url.replace(/\/$/, '') // Remove trailing slash
    } catch {
        throw new ConfigError(`Invalid URL for ${name}: ${url}`)
    }
}

function createConfig(): AppConfig {
    // Determine environment first
    const nodeEnv = import.meta.env.MODE
    const environment = (nodeEnv === 'production' ? 'production' : 'development') as AppConfig['environment']

    // In development, allow missing VITE_API_URL and default to empty string (relative URLs)
    const rawApiUrl = environment === 'development'
        ? (import.meta.env.VITE_API_URL ?? '')
        : getRequiredEnvVar(import.meta.env.VITE_API_URL, 'VITE_API_URL')

    const validatedApiUrl = rawApiUrl ? validateUrl(rawApiUrl, 'VITE_API_URL') : ''

    return {
        apiUrl: validatedApiUrl,
        environment,
        isProduction: environment === 'production',
        isDevelopment: environment === 'development',
    }
}

export const config = createConfig()
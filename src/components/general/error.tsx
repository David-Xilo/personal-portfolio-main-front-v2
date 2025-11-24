
const ErrorDisplay = ({ error, onRetry }: { error: string; onRetry?: () => void }) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="max-w-md w-full">
                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-8 text-center">
                    {/* Error Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-red-600 dark:text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>

                    {/* Error Message */}
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Connection Error
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                        {error || "Unable to connect to the server. Please check your connection and try again."}
                    </p>

                    {/* Retry Button */}
                    {onRetry && (
                        <button
                            onClick={onRetry}
                            className="px-6 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
                        >
                            Try Again
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ErrorDisplay;
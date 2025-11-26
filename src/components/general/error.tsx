
const ErrorDisplay = ({ error }: { error: string }) => {
    return (
        <div className="flex justify-center py-8">
            <div className="max-w-md text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                    <svg
                        className="w-6 h-6 text-red-600 dark:text-red-400"
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
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Connection Error
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {error || "Unable to connect to the server. Please try again later."}
                </p>
            </div>
        </div>
    );
};

export default ErrorDisplay;
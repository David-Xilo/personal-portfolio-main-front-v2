
export default function Loader() {
    return (
        <div className="flex justify-center py-4">
            <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-700 border-t-gray-600 dark:border-t-gray-300 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-gray-200 dark:border-gray-700 border-b-gray-600 dark:border-b-gray-300 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            </div>
        </div>
    )
}

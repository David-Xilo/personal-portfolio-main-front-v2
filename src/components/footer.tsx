export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed bottom-0 w-full py-4 px-6 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 z-50 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm">© {currentYear} David Moura. All rights reserved.</p>
            </div>
        </footer>
    );
}

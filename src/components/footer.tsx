export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 bg-gray-900 text-gray-400">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm">© {currentYear} David Moura. All rights reserved.</p>
            </div>
        </footer>
    );
}

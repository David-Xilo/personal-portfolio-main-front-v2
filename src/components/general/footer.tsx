export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-dm-line dark:border-dm-line-dark py-[34px] px-6 md:px-16 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-dm-text-faint dark:text-dm-text-faint-dark tracking-wide">
            <span>© {currentYear} David Moura</span>
            <div className="flex gap-[22px] flex-wrap">
                <a href="#top" className="hover:text-dm-accent dark:hover:text-dm-accent-dark transition-colors">
                    Back to top ↑
                </a>
                <span>Built for speed · Geneva / London</span>
            </div>
        </footer>
    );
}

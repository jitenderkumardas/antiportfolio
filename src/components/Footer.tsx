export default function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
                <p>
                    © {new Date().getFullYear()} — Built with{" "}
                    <span className="text-accent-glow">Next.js</span> &{" "}
                    <span className="text-accent-glow">Tailwind CSS</span>
                </p>
                <a
                    href="#"
                    className="hover:text-text-primary transition-colors flex items-center gap-1"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
}

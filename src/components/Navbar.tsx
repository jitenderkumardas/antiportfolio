"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Domains", href: "/#domains" },
    { label: "Blog", href: "/#blog" },
    { label: "Contributions", href: "/#contributions" },
    { label: "Ambitions", href: "/#ambitions" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileOpen(false);
        if (pathname === "/" && href.startsWith("/#")) {
            e.preventDefault();
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                // Optional: Update URL without reload
                window.history.pushState(null, "", href);
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
                <Link
                    href="/"
                    className="text-xl font-bold gradient-text tracking-tight"
                    onClick={() => setMobileOpen(false)}
                >
                    {"<Portfolio />"}
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle navigation"
                >
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 space-y-4 bg-bg-primary/95 backdrop-blur-xl border-b border-border">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block text-text-muted hover:text-text-primary transition-colors duration-200 py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

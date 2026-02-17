import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary to-accent/10" />
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-glow/10 rounded-full blur-[128px] animate-pulse [animation-delay:2s]" />
            </div>

            <div className="mx-auto max-w-6xl px-6 py-32 flex flex-col items-center text-center gap-8">
                {/* Avatar */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accent-glow rounded-full blur-md opacity-60" />
                    <Image
                        src="/images/avatar.png"
                        alt="Avatar"
                        width={128}
                        height={128}
                        className="relative rounded-full border-2 border-border"
                        priority
                    />
                </div>

                {/* Text */}
                <div className="space-y-4 animate-fade-in-up">
                    <p className="text-sm uppercase tracking-[0.3em] text-accent-glow font-medium">
                        Experimental Builder · Systems Thinker
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        Deconstructing{" "}
                        <span className="gradient-text">Systems</span>,{" "}
                        <br className="hidden sm:block" />
                        Architecting{" "}
                        <span className="gradient-text">Solutions</span>
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
                        I break systems to understand them and build architectures that scale.
                        Bridging the gap between <span className="text-text-primary">backend engineering</span>,{" "}
                        <span className="text-text-primary">cybersecurity</span>, and{" "}
                        <span className="text-text-primary">AI</span>.
                    </p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.3s]">
                    <a
                        href="#domains"
                        className="px-8 py-3 bg-accent hover:bg-accent-glow text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                    >
                        Analyze My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-border hover:border-accent text-text-primary font-semibold rounded-full transition-all duration-300 hover:bg-bg-elevated"
                    >
                        Initialize Connection
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 animate-bounce">
                    <svg
                        className="w-6 h-6 text-text-muted"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section id="about" className="section">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    title="About Me"
                    subtitle="From breaking code to building architectures"
                />

                <div className="grid md:grid-cols-[4px_1fr] gap-8 max-w-3xl mx-auto">
                    {/* Accent bar */}
                    <div className="hidden md:block bg-gradient-to-b from-accent to-accent-glow/30 rounded-full" />

                    <div className="space-y-6 text-text-muted leading-relaxed">
                        <p>
                            I am a <span className="text-text-primary font-medium">BCA undergraduate</span> who refuses to be boxed into a single domain.
                            While others focus on just syntax, I focus on <span className="text-text-primary font-medium">systems</span>.
                            My journey is defined by a relentless curiosity to understand how things work—often by breaking them first.
                        </p>
                        <p>
                            Currently, I am architecting a <span className="text-accent-glow font-medium">full-stack blogging platform</span> with role-based access control
                            and exploring the frontiers of <span className="text-accent-glow font-medium">AI (RAG & MCP)</span>.
                            I don&apos;t just build features; I design resilient backends, secure authentication flows, and scalable network architectures.
                        </p>
                        <p>
                            My philosophy is analytical:
                            <span className="text-text-primary font-medium"> Deconstruct. Analyze. Automate.</span>
                            Whether it&apos;s designing a CTF server, writing a network intrusion detection system,
                            or optimizing a database query, I aim for depth and efficiency.
                        </p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                            {[
                                { value: "20+", label: "CTFs Played" },
                                { value: "NIDS", label: "Key Project" },
                                { value: "Full Stack", label: "Focus" },
                                { value: "∞", label: "Curiosity" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-4 rounded-xl bg-bg-card border border-border"
                                >
                                    <div className="text-xl font-bold gradient-text">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-text-muted mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

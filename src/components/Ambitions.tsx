import SectionHeading from "./SectionHeading";
import { ambitions } from "@/data/ambitions";

export default function Ambitions() {
    const statusConfig = {
        done: { color: "bg-success", label: "Done" },
        "in-progress": { color: "bg-accent", label: "In Progress" },
        upcoming: { color: "bg-border", label: "Upcoming" },
    };

    return (
        <section id="ambitions" className="section">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    title="Ambitions & Vision"
                    subtitle="Where I'm headed"
                />

                <div className="max-w-2xl mx-auto">
                    {ambitions.map((item, i) => {
                        const config = statusConfig[item.status];
                        return (
                            <div key={item.title} className="relative flex gap-6 pb-8 last:pb-0">
                                {/* Timeline line */}
                                {i !== ambitions.length - 1 && (
                                    <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                                )}

                                {/* Dot */}
                                <div className="relative flex-shrink-0 mt-1.5">
                                    <div
                                        className={`w-6 h-6 rounded-full ${config.color} flex items-center justify-center`}
                                    >
                                        {item.status === "done" && (
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                        {item.status === "in-progress" && (
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pb-2">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="font-semibold text-text-primary">
                                            {item.title}
                                        </h3>
                                        <span
                                            className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${item.status === "done"
                                                    ? "bg-success/10 text-success"
                                                    : item.status === "in-progress"
                                                        ? "bg-accent/10 text-accent-glow"
                                                        : "bg-border/30 text-text-muted"
                                                }`}
                                        >
                                            {config.label}
                                        </span>
                                    </div>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

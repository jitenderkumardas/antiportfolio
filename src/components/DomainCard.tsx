import { Domain } from "@/data/domains";

export default function DomainCard({ domain }: { domain: Domain }) {
    return (
        <div className="card-glow group p-6 rounded-2xl bg-bg-card border border-border hover:bg-bg-elevated transition-all duration-300">
            <div className="text-4xl mb-4">{domain.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-accent-glow transition-colors">
                {domain.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
                {domain.description}
            </p>
            <div className="flex flex-wrap gap-2">
                {domain.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        target={link.url.startsWith("http") ? "_blank" : undefined}
                        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xs px-3 py-1.5 rounded-full border border-accent/30 text-accent-glow hover:bg-accent/10 transition-colors duration-200"
                    >
                        {link.label} →
                    </a>
                ))}
            </div>
        </div>
    );
}

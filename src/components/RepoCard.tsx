import { GitHubRepo } from "@/lib/github";

export default function RepoCard({ repo }: { repo: GitHubRepo }) {
    const languageColors: Record<string, string> = {
        TypeScript: "#3178c6",
        JavaScript: "#f7df1e",
        Python: "#3572A5",
        Rust: "#dea584",
        Go: "#00ADD8",
        Shell: "#89e051",
        HTML: "#e34c26",
        CSS: "#563d7c",
    };

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-2xl bg-bg-card border border-border hover:bg-bg-elevated hover:border-accent/30 transition-all duration-300"
        >
            <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-text-primary group-hover:text-accent-glow transition-colors truncate">
                    {repo.name}
                </h3>
                <svg
                    className="w-4 h-4 text-text-muted shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-3 line-clamp-2">
                {repo.description || "No description"}
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted">
                {repo.language && (
                    <span className="flex items-center gap-1.5">
                        <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                                backgroundColor:
                                    languageColors[repo.language] || "#888",
                            }}
                        />
                        {repo.language}
                    </span>
                )}
                {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
                )}
                {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
                )}
            </div>
        </a>
    );
}

export interface GitHubRepo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    topics: string[];
}

const GITHUB_USERNAME = "yourusername"; // Replace with your GitHub username

export async function getFeaturedRepos(): Promise<GitHubRepo[]> {
    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6&type=owner`,
            { next: { revalidate: 3600 } }
        );
        if (!res.ok) return getFallbackRepos();
        const repos: GitHubRepo[] = await res.json();
        return repos
            .filter((r) => !r.name.includes(".github.io"))
            .slice(0, 6);
    } catch {
        return getFallbackRepos();
    }
}

function getFallbackRepos(): GitHubRepo[] {
    return [
        {
            name: "portfolio",
            description: "My personal portfolio website built with Next.js",
            html_url: `https://github.com/${GITHUB_USERNAME}/portfolio`,
            language: "TypeScript",
            stargazers_count: 0,
            forks_count: 0,
            topics: ["nextjs", "portfolio"],
        },
    ];
}

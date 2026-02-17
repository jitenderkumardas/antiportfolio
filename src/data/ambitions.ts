export interface Ambition {
    title: string;
    description: string;
    status: "done" | "in-progress" | "upcoming";
}

export const ambitions: Ambition[] = [
    {
        title: "Build Independent Systems at Scale",
        description:
            "Architecting and deploying self-sustaining, automated technical systems that solve real-world problems.",
        status: "upcoming",
    },
    {
        title: "Freelancing & Network Building",
        description:
            "Establishing a professional network and delivering high-value technical solutions as an independent consultant.",
        status: "in-progress",
    },
    {
        title: "Master AI & RAG Architectures",
        description:
            "Deepening expertise in integrating LLMs with external data sources for intelligent, context-aware applications.",
        status: "in-progress",
    },
    {
        title: "Advanced Security & NIDS",
        description:
            "Continuing research into network security, intrusion detection, and advanced CTF challenges.",
        status: "in-progress",
    },
    {
        title: "Full-Stack Blogging Platform",
        description:
            "Deploying a comprehensive publishing platform with role-based access and custom theming.",
        status: "done",
    },
];

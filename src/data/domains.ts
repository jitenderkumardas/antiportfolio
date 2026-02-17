export interface Domain {
    title: string;
    description: string;
    icon: string;
    links: { label: string; url: string }[];
}

export const domains: Domain[] = [
    {
        title: "System Architecture",
        description:
            "Designing scalable backends, structuring databases, and architecting resilient systems that handle complexity with ease.",
        icon: "🏗️",
        links: [
            { label: "Backend Projects", url: "https://github.com/stars" },
        ],
    },
    {
        title: "Cybersecurity & CTFs",
        description:
            "Designing CTF servers, analyzing network traffic, and building authenticated systems. I break it to secure it.",
        icon: "🔐",
        links: [
            { label: "CTF Write-ups", url: "/#blog" },
        ],
    },
    {
        title: "AI & RAG Experiments",
        description:
            "Exploring the edge of AI with Retrieval Augmented Generation (RAG) and Model Context Protocol (MCP) projects.",
        icon: "🧠",
        links: [
            { label: "AI Experiments", url: "https://github.com/stars" },
        ],
    },
    {
        title: "Network Engineering",
        description:
            "Deep dive into protocols, packet analysis, and building real-time Network Intrusion Detection Systems (NIDS).",
        icon: "🌐",
        links: [
            { label: "NIDS Project", url: "https://github.com/stars" },
        ],
    },
];

import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Knowledge Sharing",
    description:
        "CTF write-ups, security deep-dives, coding tutorials, and troubleshooting guides.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen pt-24">
            <div className="mx-auto max-w-4xl px-6 py-16">
                <SectionHeading
                    title="Blog"
                    subtitle="CTF write-ups, tutorials, and troubleshooting — in English & Hinglish"
                />

                {posts.length === 0 ? (
                    <p className="text-center text-text-muted">
                        No posts yet. Stay tuned!
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 gap-6">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                )}

                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}

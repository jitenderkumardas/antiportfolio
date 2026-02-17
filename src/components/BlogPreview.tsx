import SectionHeading from "./SectionHeading";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPreview() {
    const posts = getAllPosts().slice(0, 3);

    if (posts.length === 0) return null;

    return (
        <section id="blog" className="section">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeading
                    title="Knowledge Sharing"
                    subtitle="CTF write-ups, tutorials, and troubleshooting guides"
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <a
                        href="/blog/"
                        className="inline-block px-6 py-2.5 border border-border hover:border-accent text-text-muted hover:text-text-primary rounded-full transition-all duration-300 text-sm"
                    >
                        View All Posts →
                    </a>
                </div>
            </div>
        </section>
    );
}

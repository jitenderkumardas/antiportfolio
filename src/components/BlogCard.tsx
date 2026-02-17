import { PostMeta } from "@/lib/mdx";

export default function BlogCard({ post }: { post: PostMeta }) {
    return (
        <a
            href={`/blog/${post.slug}/`}
            className="group block p-6 rounded-2xl bg-bg-card border border-border hover:bg-bg-elevated hover:border-accent/30 transition-all duration-300"
        >
            <div className="flex items-center gap-2 text-xs text-text-muted mb-3">
                <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-glow transition-colors mb-2">
                {post.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
                {post.summary}
            </p>
            <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent-glow"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </a>
    );
}

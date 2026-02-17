import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}


import fs from "fs";
import path from "path";

export async function generateStaticParams() {
    const blogDir = path.join(process.cwd(), "src/content/blog");

    // Debug logging
    if (process.env.NODE_ENV === "development") {
        console.log(`[generateStaticParams] Checking: ${blogDir}`);
    }

    if (!fs.existsSync(blogDir)) {
        console.warn("[generateStaticParams] Blog dir not found");
        return [];
    }

    const files = fs.readdirSync(blogDir);

    // Filter for .mdx files to avoid issues with system files
    const params = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => ({
            slug: file.replace(".mdx", ""),
        }));

    if (process.env.NODE_ENV === "development") {
        console.log(`[generateStaticParams] Generated params:`, JSON.stringify(params));
    }

    return params;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.meta.title} — Blog`,
        description: post.meta.summary,
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    const post = getPostBySlug(slug);
    if (!post) notFound();


    return (
        <div className="min-h-screen pt-24">
            <article className="mx-auto max-w-3xl px-6 py-16">
                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 text-sm text-text-muted mb-4">
                        <time dateTime={post.meta.date}>
                            {new Date(post.meta.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                        <span>·</span>
                        <div className="flex gap-2">
                            {post.meta.tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-2 py-0.5 rounded-md bg-accent/10 text-accent-glow text-xs"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                        {post.meta.title}
                    </h1>
                    <p className="text-lg text-text-muted">{post.meta.summary}</p>
                    <div className="mt-6 w-full h-px bg-border" />
                </header>

                {/* MDX Content */}
                <div className="prose prose-invert prose-violet max-w-none
          prose-headings:text-text-primary prose-headings:font-semibold
          prose-p:text-text-muted prose-p:leading-relaxed
          prose-a:text-accent-glow prose-a:no-underline hover:prose-a:underline
          prose-strong:text-text-primary
          prose-code:text-accent-glow prose-code:bg-bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl
          prose-li:text-text-muted
          prose-blockquote:border-accent prose-blockquote:text-text-muted
          prose-img:rounded-xl
        ">
                    <MDXRemote source={post.content} />
                </div>

                {/* Back link */}
                <div className="mt-16 pt-8 border-t border-border">
                    <a
                        href="/blog/"
                        className="text-sm text-text-muted hover:text-accent-glow transition-colors flex items-center gap-2"
                    >
                        ← Back to all posts
                    </a>
                </div>
            </article>
        </div>
    );
}

import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "src/content/blog");

  if (!fs.existsSync(blogDir)) {
    console.warn("[generateStaticParams] Blog dir not found");
    return [];
  }

  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.meta.title} — Blog`,
    description: post.meta.summary,
    alternates: {
      canonical: `/blog/${slug}`, // ✅ canonical points to production blog URL
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.summary,
      type: "article",
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.summary,
    },
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
        <div className="prose prose-invert prose-violet max-w-none">
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

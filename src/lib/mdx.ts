import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface PostMeta {
    title: string;
    date: string;
    summary: string;
    tags: string[];
    slug: string;
}

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(CONTENT_DIR, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContent);
        return {
            title: data.title || slug,
            date: data.date || "",
            summary: data.summary || "",
            tags: data.tags || [],
            slug,
        };
    });
    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string) {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
        meta: {
            title: data.title || slug,
            date: data.date || "",
            summary: data.summary || "",
            tags: data.tags || [],
            slug,
        },
        content,
    };
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];
    return fs
        .readdirSync(CONTENT_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}

const { getAllPosts } = require('./src/lib/mdx.ts');

console.log("Current working directory:", process.cwd());
try {
    const posts = getAllPosts();
    console.log("Found posts:", posts.map(p => ({ title: p.title, slug: p.slug })));
} catch (error) {
    console.error("Error reading posts:", error);
}

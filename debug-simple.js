const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(process.cwd(), 'src/content/blog');
console.log("Checking:", contentDir);

if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);
    console.log("Files:", files);
    files.forEach(file => {
        if (file.endsWith('.mdx')) {
            const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
            const { data } = matter(content);
            console.log(`- ${file}:`, data.title);
        }
    });
} else {
    console.log("Content dir not found!");
}

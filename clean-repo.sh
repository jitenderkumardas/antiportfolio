#!/bin/bash

echo "🧹 Starting repository cleanup..."

# -------------------------------
# 1️⃣ Remove unnecessary files
# -------------------------------

FILES_TO_REMOVE=(
  "build_log.txt"
  "debug-posts.js"
  "debug-simple.js"
  "deploy-vercel.sh"
  "push-to-github.sh"
)

for file in "${FILES_TO_REMOVE[@]}"; do
  if [ -f "$file" ]; then
    echo "🗑 Removing $file"
    rm -f "$file"
    git rm -f "$file" 2>/dev/null
  fi
done

# -------------------------------
# 2️⃣ Ensure .gitignore is clean
# -------------------------------

echo "🛡 Updating .gitignore..."

IGNORE_ITEMS=(
  ".next/"
  "out/"
  "node_modules/"
  ".vercel/"
)

for item in "${IGNORE_ITEMS[@]}"; do
  if ! grep -qxF "$item" .gitignore 2>/dev/null; then
    echo "$item" >> .gitignore
    echo "➕ Added $item to .gitignore"
  fi
done

# -------------------------------
# 3️⃣ Remove cached ignored files (if any)
# -------------------------------

git rm -r --cached .next 2>/dev/null
git rm -r --cached out 2>/dev/null
git rm -r --cached node_modules 2>/dev/null
git rm -r --cached .vercel 2>/dev/null

# -------------------------------
# 4️⃣ Commit & Push
# -------------------------------

echo "📦 Committing cleanup changes..."
git add .
git commit -m "Cleaned repository: removed debug & deployment files"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Repository cleaned successfully!"

#!/bin/bash

# ====== CONFIG ======
GITHUB_USERNAME="jitenderkumardas"
REPO_NAME="antiportfolio"
COMMIT_MESSAGE="Uploading portfolio project"
# ====================

echo "🔹 Initializing Git (if not already)..."
git init

echo "🔹 Adding all files..."
git add .

echo "🔹 Creating commit..."
git commit -m "$COMMIT_MESSAGE"

echo "🔹 Setting main branch..."
git branch -M main

echo "🔹 Connecting to GitHub repo..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/$GITHUB_USERNAME/$REPO_NAME.git

echo "🔹 Pushing to GitHub..."
git push -u origin main

echo "✅ Portfolio uploaded successfully!"
echo "🌍 Check here:"
echo "https://github.com/$GITHUB_USERNAME/$REPO_NAME"

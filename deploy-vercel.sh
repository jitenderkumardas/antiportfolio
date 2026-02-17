#!/bin/bash

# ====== CONFIG ======
REPO_NAME="antiportfolio"
COMMIT_MESSAGE="Deploying portfolio"
# ====================

echo "🔹 Initializing Git..."

git init
git add .
git commit -m "$COMMIT_MESSAGE"

git branch -M main
git remote remove origin 2>/dev/null
git remote add origin https://github.com/jitenderkumardas/antiportfolio

echo "🔹 Pushing to GitHub..."
git push -u origin main

echo "🔹 Installing Vercel CLI..."
npm install -g vercel

echo "🔹 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment Complete!"

#!/bin/bash

# MedFoxRCM Deployment Script
# This script builds and deploys the MedFoxRCM application to Vercel

set -e

echo "🚀 Starting MedFoxRCM deployment..."

# Check if required environment variables are set
if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Error: VERCEL_TOKEN environment variable is not set"
    echo "Please set your Vercel token: export VERCEL_TOKEN=your_token_here"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Run linting
echo "🔍 Running linting..."
npm run lint

# Run type checking
echo "📝 Running type checking..."
npx tsc --noEmit

# Run tests
echo "🧪 Running tests..."
npm test

# Build the application
echo "🏗️ Building application..."
npm run build

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
npx vercel --prod --token $VERCEL_TOKEN

echo "✅ Deployment completed successfully!"
echo "🌐 Your application should be available at your Vercel domain"
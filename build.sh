#!/bin/bash
set -e

echo "🚀 Iniciando build personalizado..."

# Limpar tudo
echo "🧹 Limpando instalações anteriores..."
rm -rf node_modules package-lock.json yarn.lock .next .contentlayer

# Instalar com npm forçado
echo "📦 Instalando dependências com npm --legacy-peer-deps --force..."
npm install --legacy-peer-deps --force --no-audit --no-fund

# Build do contentlayer
echo "📝 Executando build do contentlayer..."
npx contentlayer build

# Build do Next.js
echo "🔨 Executando build do Next.js..."
npm run build

echo "✅ Build concluído com sucesso!" 
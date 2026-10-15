import { defineConfig } from 'vite'

// GitHub Pages 仓库名若为 height，请保持 base: '/height/'
// 若使用自定义域名或 user.github.io 根仓库，改为 base: '/'
export default defineConfig({
  base: process.env.GH_PAGES_BASE || '/height/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})

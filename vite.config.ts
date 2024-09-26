import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/dnd-monsters-search/'
  }

  return config
})
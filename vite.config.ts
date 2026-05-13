import path from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, "")
  const djangoTarget = env.VITE_DJANGO_API_TARGET || "http://127.0.0.1:8000"

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: djangoTarget,
          changeOrigin: true,
        },
        "/media": {
          target: djangoTarget,
          changeOrigin: true,
        },
      },
    },
  }
})

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui') || id.includes('react')) {
              return 'vendor';
            }
            return 'dependencies';
          }
        },
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "css-preload",
      enforce: "post" as const,
      transformIndexHtml(html: string) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(.*?)">/g,
          `<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel='stylesheet'">\n<noscript><link rel="stylesheet" href="$1"></noscript>`
        );
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
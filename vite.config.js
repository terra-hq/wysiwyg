import path, { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "./");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        sanity: resolve(root, "content", "sanity-content.html"),
        wordpress: resolve(root, "content", "wordpress-content.html"),
      },
    },
  },

  // assetspublicpath: '/static/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scss": path.resolve(__dirname, "./src/scss"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                   
                `,
      },
    },
  },
});

import { resolve } from "path"
import path from "path"
import { defineConfig } from "vite"

const root = resolve(__dirname, "./")
const outDir = resolve(__dirname, "dist")

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
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "./src/scss/framework/_vars/_vars.scss";
                    @import "./src/scss/framework/_mixins/_mixins.scss";
                    @import "./src/scss/framework/foundation/foundation.scss";
                    @import "./src/scss/framework/utilities/utilities.scss";
                `,
            },
        },
    },
})

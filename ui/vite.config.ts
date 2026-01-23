import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    wasm(),
    topLevelAwait(),
    react(),
    nodePolyfills({
      include: ["buffer", "crypto", "stream", "util"],
    }),
  ],
  assetsInclude: ["**/*.wasm"],
  optimizeDeps: {
    exclude: ["@demox-labs/miden-sdk"],
    esbuildOptions: {
      target: "esnext",
    },
  },
  build: {
    target: "esnext",
  },
  worker: {
    format: "es",
  },
  server: {
    fs: {
      allow: [
        // allow your project
        process.cwd(),

        // ✅ allow node_modules wasm access
        path.resolve(
          __dirname,
          "node_modules/@demox-labs/miden-sdk/dist/assets/miden_client_web.wasm"
        ),
      ],
    },
    // Proxy API requests to the backend server
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // ... other configurations
});

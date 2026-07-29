import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo at https://mohamedjs.github.io/mohamedjs/
export default defineConfig({
  plugins: [react()],
  base: "/mohamedjs/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});

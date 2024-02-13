import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  resolve: {
    alias: {
      "slick-carousel": "node_modules/slick-carousel/slick",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});

import { defineConfig } from "vite";
import path from "path";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@img": path.resolve(__dirname, "src/assets/img"),
    },
  },
});

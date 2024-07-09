import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "docs");

export default defineConfig({
  base: "/Asobiba2/",
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        index: resolve(root, "index.html"),
        samples: resolve(root, "samples.html"),
        sample01: resolve(root, "samples", "threejs", "sample01", "index.html"),
      },
    },
  },
});

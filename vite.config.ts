import { defineConfig, type Plugin } from "vite";
import { readdirSync, existsSync, cpSync } from "node:fs";
import { resolve } from "node:path";

// Build inputs from every top-level .html file so multi-page routing works.
const htmlInputs = Object.fromEntries(
  readdirSync(".")
    .filter((f) => f.endsWith(".html"))
    .map((f) => [f.replace(/\.html$/, ""), resolve(".", f)])
);

// Static asset directories referenced by the Webflow export via absolute paths
// like /js/webflow.js, /css/*.css, /images/*, /fonts/*, /videos/*.
const STATIC_DIRS = ["js", "css", "images", "fonts", "videos"];

// In dev: serve these dirs from the project root (Vite already does this with
// fs.strict: false). In build: copy them into dist so the published site
// serves them with correct MIME types (webflow.js was being returned as
// text/plain, so browsers refused to execute it and all data-w-id
// interactions — partnerships modal, CTA hover animations — were broken).
function copyStaticDirs(): Plugin {
  return {
    name: "copy-webflow-static-dirs",
    apply: "build",
    closeBundle() {
      for (const dir of STATIC_DIRS) {
        const from = resolve(".", dir);
        const to = resolve("dist", dir);
        if (existsSync(from)) {
          cpSync(from, to, { recursive: true });
        }
      }
    },
  };
}

export default defineConfig({
  root: ".",
  publicDir: false,
  plugins: [copyStaticDirs()],
  server: {
    port: 8080,
    host: true,
    fs: { strict: false },
  },
  preview: { port: 8080, host: true },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: { input: htmlInputs },
  },
});


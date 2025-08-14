import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
  const isCI = process.env.GITHUB_ACTIONS === "true";

  return {
    // Use subpath base when deployed to GitHub Pages project sites.
    // For user/org pages (repo ends with .github.io), base must be '/'.
    base: isCI && repo ? (repo.endsWith('.github.io') ? '/' : `/${repo}/`) : "/",
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // Read env files (VITE_*) from the monorepo root.
  envDir: "../../",
  server: {
    port: 5173,
  },
});

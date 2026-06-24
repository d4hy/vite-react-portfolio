import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Why: makes imports shorter/cleaner by treating "@" as the project src root.
      // How: Vite maps "@" to ./src so you can import like "@/components/Button".
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

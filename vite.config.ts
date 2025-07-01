import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@components": resolve("./src/components"),
      "@hooks": resolve("./src/hooks"),
      "@screens": resolve("./src/screens"),
      "@utils": resolve("./src/utils"),
      "@service": resolve("./src/service"),
      "@assets": resolve("./src/assets"),
      "@i18n": resolve("./src/i18n"),
    },
  },
});

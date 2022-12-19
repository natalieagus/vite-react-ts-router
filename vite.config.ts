import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: 8100,
      // proxy: 'http://localhost:3001',  // TODO: Shift to config file
    },
    base: `/${env.VITE_BASE_URL}`,
  };
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base_url = env.VITE_BASE_URL;

  return {
    plugins: [react()],
    server: {
      port: 8100,
      // proxy: 'http://localhost:3001',  // TODO: Shift to config file
    },
    base: `/${base_url}/`,
  };
});

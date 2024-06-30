import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
// export default defineConfig({
//   const env = loadEnv(mode, process.cwd(), '');
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_WEATHER_API_KEY": JSON.stringify(
        env.REACT_APP_WEATHER_API_KEY
      ),
      "process.env.REACT_APP_NODE_ENV": JSON.stringify(env.REACT_APP_NODE_ENV),
    },
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
  };
});

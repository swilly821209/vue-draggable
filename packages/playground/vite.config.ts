import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@my-vue/my-component": path.resolve(__dirname, "../vue-draggable/index.ts")
    }
  }
});

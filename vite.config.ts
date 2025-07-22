import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    host: true, // 或者 host: '0.0.0.0'
    port: 3000, // 你项目端口，默认3000可改
  },
  plugins: [react(), tsconfigPaths(), svgr()],
});

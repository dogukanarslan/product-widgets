import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      src: '/src',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});

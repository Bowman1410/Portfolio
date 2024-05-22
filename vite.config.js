import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Update <REPO_NAME> to your actual repository name
});

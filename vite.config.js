import { defineConfig } from 'vite';

const repoName = process.env.REPO_NAME || '';
const BASE_PATH = repoName ? `/${repoName}/` : '/';

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(BASE_PATH),
  },
});

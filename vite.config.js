import { defineConfig } from 'vite';

const repoName = process.env.REPO_NAME || '';
const BASE_PATH = repoName ? `/${repoName}/` : '/';

export default defineConfig({
  base: BASE_PATH,
  define: {
    __BASE_PATH__: JSON.stringify(BASE_PATH),
  },
});

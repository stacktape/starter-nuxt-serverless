import { NuxtWeb, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const web = new NuxtWeb({
    appDirectory: './'
  });

  return {
    resources: { web }
  };
});

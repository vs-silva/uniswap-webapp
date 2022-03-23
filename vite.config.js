import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {

  const env = loadEnv(mode, process.cwd());

  const envWithProcessPrefix = Object.entries(env).reduce(
      (prev, [key, val]) => {
        return{
          ...prev,
          [`process.env.${key}`]: `"${val}"`
        };
      },{}
  );

  return {
    define: envWithProcessPrefix,
    plugins: [vue()],
    server: {
      port: env.VITE_APP_PORT || 3000
    }
  };
});


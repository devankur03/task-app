import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
const ViteConfig: UserConfigExport = defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
    },
});

export default ViteConfig;

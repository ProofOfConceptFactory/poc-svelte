import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import fs from 'fs'
import type { ServerOptions } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';

    const serverConfig: ServerOptions = {
        host: true,
        port: 8000,
    };

    if (isDev) {
        serverConfig.https = {
            key: fs.readFileSync('certs/poc-svelte.key.pem'),
            cert: fs.readFileSync('certs/poc-svelte.crt.pem'),
        };
    }

    return {
        plugins: [svelte()],
        server: serverConfig
    }
})

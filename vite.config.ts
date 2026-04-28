import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from 'vite-plugin-sitemap';
import { vitePluginInjectSeo } from './vite-plugin-inject-seo';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const isSsrBuild = mode === 'ssr';
  // Сборка под scripts/prerender.js: мета только из entry-server, без дубля с vite-plugin-inject-seo
  const isPrerenderBuild = mode === 'prerender';

  return {
    server: {
      host: "::",
      port: 8080,
    },
    build: {
      outDir: isSsrBuild ? 'dist/client' : 'dist',
      emptyOutDir: !isSsrBuild,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (!id.includes('node_modules')) return;
            const isReactCore =
              /node_modules[/\\]react-dom[/\\]/.test(id) ||
              /node_modules[/\\]react[/\\]/.test(id) ||
              /node_modules[/\\]scheduler[/\\]/.test(id);
            if (isReactCore) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) return 'radix-ui';
            if (id.includes('lucide-react')) return 'lucide';
            if (id.includes('recharts')) return 'recharts';
            if (id.includes('@tanstack/react-query')) return 'tanstack-query';
            if (
              id.includes('react-markdown') ||
              id.includes('/remark-') ||
              id.includes('\\remark-') ||
              id.includes('/mdast-') ||
              id.includes('\\mdast-') ||
              id.includes('micromark')
            ) {
              return 'markdown';
            }
            if (
              id.includes('react-hook-form') ||
              id.includes('@hookform') ||
              id.includes('/zod/') ||
              id.includes('\\zod\\')
            ) {
              return 'forms';
            }
            if (id.includes('date-fns')) return 'date-fns';
            if (id.includes('embla-carousel')) return 'embla';
            if (id.includes('cmdk')) return 'cmdk';
            if (id.includes('react-google-recaptcha')) return 'recaptcha';
            if (id.includes('react-phone-number-input') || id.includes('libphonenumber')) {
              return 'phone-input';
            }
            if (id.includes('react-day-picker')) return 'day-picker';
            return 'vendor';
          },
        },
      },
    },
    plugins: [
      react(),
      ...(isSsrBuild || isPrerenderBuild ? [] : [vitePluginInjectSeo()]),
      sitemap({
        hostname: 'https://serviceprime13.ru',
        dynamicRoutes: [
          '/',
          '/services',
          '/remont-televizorov',
          '/about',
          '/contact',
          '/privacy',
          '/faq',
          '/brands'
        ],
        readable: true,
        generateRobotsTxt: false
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    ssr: {
      noExternal: ['react-helmet-async'],
    },
  };
});

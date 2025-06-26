import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from 'vite-plugin-sitemap';

// Функция для получения всех slug'ов статей блога
async function getBlogSlugs() {
  try {
    const API_BASE_URL = process.env.VITE_BACKEND_URL || 'http://localhost:5000';
    const response = await fetch(`${API_BASE_URL}/api/blog?per_page=1000`);
    if (response.ok) {
      const data = await response.json() as { posts: Array<{ slug: string }> };
      return data.posts.map((post) => `/blog/${post.slug}`);
    }
  } catch (error) {
    console.warn('Не удалось получить slug\'ы статей блога для sitemap:', error);
  }
  return [];
}

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // Получаем динамические маршруты блога
  const blogRoutes = await getBlogSlugs();
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      sitemap({
        hostname: 'https://serviceprime13.ru',
        dynamicRoutes: [
          '/',
          '/services',
          '/about',
          '/contact',
          '/faq',
          '/brands',
          '/blog',
          '/rss.xml',
          ...blogRoutes
        ]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

#!/usr/bin/env node

// Скрипт для генерации статического RSS файла при сборке
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_BASE_URL = process.env.VITE_BACKEND_URL || 'http://localhost:5000';
const SITE_URL = process.env.SITE_URL || 'https://serviceprime13.ru';

async function generateStaticRSS() {
  try {
    console.log('🔄 Генерация статического RSS файла...');
    
    // Получаем статьи из API
    const response = await fetch(`${API_BASE_URL}/api/blog?per_page=20`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    const posts = data.posts || [];
    
    // Генерируем RSS XML
    const rssContent = generateRSSXML(posts);
    
    // Записываем в public/rss.xml
    const outputPath = path.join(__dirname, '..', 'public', 'rss.xml');
    fs.writeFileSync(outputPath, rssContent);
    
    console.log(`✅ RSS файл создан: ${outputPath}`);
    console.log(`   Статей в RSS: ${posts.length}`);
    
  } catch (error) {
    console.error('❌ Ошибка генерации RSS:', error.message);
    
    // Создаем пустой RSS если API недоступен
    const emptyRSS = generateEmptyRSS();
    const outputPath = path.join(__dirname, '..', 'public', 'rss.xml');
    fs.writeFileSync(outputPath, emptyRSS);
    
    console.log('⚠️  Создан пустой RSS файл (API недоступен)');
  }
}

function generateRSSXML(posts) {
  const now = new Date().toUTCString();
  
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SC Prime - Блог о ремонте техники</title>
    <description>Новости, советы и статьи о ремонте и обслуживании техники в Саранске</description>
    <link>${SITE_URL}/blog</link>
    <language>ru</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
`;

  posts.forEach(post => {
    const pubDate = new Date(post.created_at).toUTCString();
    const description = post.content.length > 500 
      ? post.content.substring(0, 500) + '...' 
      : post.content;
    
    rss += `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid>${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
`;
    
    if (post.tags && post.tags.length > 0) {
      post.tags.forEach(tag => {
        rss += `      <category>${tag}</category>\n`;
      });
    }
    
    rss += `    </item>\n`;
  });
  
  rss += `  </channel>
</rss>`;
  
  return rss;
}

function generateEmptyRSS() {
  const now = new Date().toUTCString();
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SC Prime - Блог о ремонте техники</title>
    <description>Новости, советы и статьи о ремонте и обслуживании техники в Саранске</description>
    <link>${SITE_URL}/blog</link>
    <language>ru</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  </channel>
</rss>`;
}

generateStaticRSS(); 
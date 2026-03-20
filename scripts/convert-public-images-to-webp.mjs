/**
 * Рекурсивно конвертирует PNG/JPEG в WebP в каталоге public/.
 * Запуск: npm run images:webp
 * Исходники не удаляются — рядом появляется .webp
 * При нескольких файлах с одним именем (logo.jpg + logo.png) берётся JPEG в приоритете.
 * Если WebP получился не меньше оригинала — файл .webp не создаётся/удаляется.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', 'public');

const EXT = new Set(['.png', '.jpg', '.jpeg']);
const SKIP_NAME = /^(favicon|apple-touch-icon)/i;

function priority(ext) {
  const e = ext.toLowerCase();
  if (e === '.jpg' || e === '.jpeg') return 1;
  if (e === '.png') return 2;
  return 3;
}

async function loadSharp() {
  const mod = await import('sharp');
  return mod.default;
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

async function main() {
  const sharp = await loadSharp();
  const candidates = walk(ROOT).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    if (!EXT.has(ext)) return false;
    const base = path.basename(f, ext);
    if (SKIP_NAME.test(base)) return false;
    return true;
  });

  /** Один целевой .webp на базовое имя в папке (приоритет JPEG) */
  const byKey = new Map();
  for (const file of candidates) {
    const ext = path.extname(file);
    const dir = path.dirname(file);
    const stem = path.basename(file, ext);
    const key = path.join(dir, stem);
    const p = priority(ext);
    const prev = byKey.get(key);
    if (!prev || p < prev.p) byKey.set(key, { file, p });
  }

  const files = [...byKey.values()].map((x) => x.file);

  if (files.length === 0) {
    console.log('Нет PNG/JPEG для конвертации в public/');
    return;
  }

  for (const file of files) {
    const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp');
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const before = fs.statSync(file).size;
    const underBrandsImg = rel.startsWith('brands-img/');
    const qualities = [85, 75, 65, 55, 45, 35];
    let after = before;
    let usedQ = 85;

    for (const q of qualities) {
      usedQ = q;
      await sharp(file).webp({ quality: q, effort: 6 }).toFile(webpPath);
      after = fs.statSync(webpPath).size;
      if (after < before) {
        console.log(
          `${rel} → ${path.basename(webpPath)} (${before} → ${after} bytes, q=${q})`
        );
        break;
      }
    }

    if (after < before) {
      continue;
    }

    if (underBrandsImg && fs.existsSync(webpPath)) {
      console.log(
        `${rel} → ${path.basename(webpPath)} (${before} → ${after} bytes, q=${usedQ}, brands-img: файл нужен для <picture>)`
      );
      continue;
    }

    if (fs.existsSync(webpPath)) {
      fs.unlinkSync(webpPath);
    }
    console.log(`${rel} — пропуск: WebP не меньше оригинала (${before} vs ${after})`);
  }
  console.log('Готово. В разметке: <picture><source type="image/webp" /> + <img> с оригиналом.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

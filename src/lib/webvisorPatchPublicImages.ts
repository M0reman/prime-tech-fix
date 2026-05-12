/**
 * В плеере Вебвизора document часто на домене Яндекса: пути `/public/...` уходят не на serviceprime13.ru.
 * На боевом хосте не трогаем DOM. В остальных production-сценариях с абсолютным BASE_URL переписываем медиа.
 */
const PRODUCTION_HOSTS = new Set(['serviceprime13.ru', 'www.serviceprime13.ru']);

function getAssetBase(): string | null {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/' || !base.startsWith('http')) return null;
  return base.endsWith('/') ? base : `${base}/`;
}

function absolutizePath(path: string, assetBase: string): string {
  const t = path.trim();
  if (!t || t.startsWith('http') || t.startsWith('data:') || t.startsWith('blob:') || t.startsWith('//')) {
    return path;
  }
  if (!t.startsWith('/')) return path;
  try {
    return new URL(t.replace(/^\//, ''), assetBase).href;
  } catch {
    return path;
  }
}

function patchSrcset(attr: string | null, assetBase: string): string | null {
  if (!attr) return null;
  const next = attr
    .split(',')
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return part;
      const sp = trimmed.search(/\s/);
      const urlPart = sp === -1 ? trimmed : trimmed.slice(0, sp);
      const rest = sp === -1 ? '' : trimmed.slice(sp);
      if (!urlPart.startsWith('/') || urlPart.startsWith('//')) return trimmed;
      return absolutizePath(urlPart, assetBase) + rest;
    })
    .join(', ');
  return next === attr ? null : next;
}

function scanNode(root: ParentNode, assetBase: string): void {
  const imgs = root.querySelectorAll?.('img[src^="/"]');
  imgs?.forEach((node) => {
    const el = node as HTMLImageElement;
    const raw = el.getAttribute('src');
    if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return;
    const href = absolutizePath(raw, assetBase);
    if (href !== raw) el.setAttribute('src', href);
  });

  const sources = root.querySelectorAll?.('source[srcset]');
  sources?.forEach((node) => {
    const el = node as HTMLSourceElement;
    const next = patchSrcset(el.getAttribute('srcset'), assetBase);
    if (next) el.setAttribute('srcset', next);
  });
}

function shouldPatch(): boolean {
  if (!import.meta.env.PROD) return false;
  const assetBase = getAssetBase();
  if (!assetBase) return false;
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (PRODUCTION_HOSTS.has(window.location.hostname)) return false;
  return true;
}

function install(): void {
  const assetBase = getAssetBase();
  if (!assetBase) return;

  let t: ReturnType<typeof setTimeout> | undefined;
  const schedule = () => {
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      t = undefined;
      scanNode(document, assetBase);
    }, 50);
  };

  scanNode(document, assetBase);
  queueMicrotask(() => scanNode(document, assetBase));

  const mo = new MutationObserver(() => schedule());
  mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset'] });
}

if (shouldPatch()) {
  install();
}

// Runs after `vite build` + the SSR build. Writes one static HTML file per public route,
// a real 404.html, sitemap.xml and robots.txt into dist/, so crawlers get full content
// without running JavaScript. Vercel serves dist/about.html at /about (cleanUrls).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const SITE_URL = 'https://www.theparcer.com';

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, pages, notFoundPage } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

function writePage(url, file) {
  const { html, head } = render(url);
  if (!html.trim()) throw new Error(`Prerender produced empty HTML for ${url}`);
  const out = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
  fs.writeFileSync(path.join(distDir, file), out);
  console.log(`  prerendered ${url.padEnd(20)} -> dist/${file}`);
}

for (const page of pages) {
  writePage(page.path, page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`);
}
writePage(notFoundPage.path, '404.html');

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// No logged-in or private routes exist on the marketing site, so nothing is disallowed.
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log(`  wrote sitemap.xml (${pages.length} URLs) and robots.txt`);

fs.rmSync(ssrDir, { recursive: true, force: true });

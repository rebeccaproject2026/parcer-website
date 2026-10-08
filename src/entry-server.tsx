import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { headTags, notFoundPage, pageForPath, pages } from './seo/pages';

export { pages, notFoundPage };

/** Used by scripts/prerender.mjs at build time to produce static HTML for each route. */
export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return { html, head: headTags(pageForPath(url)) };
}

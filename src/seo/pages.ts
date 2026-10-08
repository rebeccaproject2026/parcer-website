import type { View } from '../types';
import { faqs } from '../data/faqs';

export const SITE_URL = 'https://www.theparcer.com';

export const CONTACT = {
  phone: '+91 93165 35015',
  phoneHref: 'tel:+919316535015',
  email: 'support@theparcer.com',
  streetAddress: '607, The Plutus, Sargasan',
  locality: 'Gandhinagar',
  region: 'Gujarat',
  postalCode: '382419',
};

export interface PageMeta {
  view: View;
  path: string;
  title: string;
  description: string;
  /** Name shown in the breadcrumb trail; omitted for the homepage. */
  breadcrumb?: string;
  noindex?: boolean;
}

/** Every public, indexable page. Also drives the prerender step and sitemap.xml. */
export const pages: PageMeta[] = [
  {
    view: 'home',
    path: '/',
    title: 'Goods Transport & Mini Truck Booking in Ahmedabad | Parcer',
    description:
      'Book tempos, mini trucks and bikes for goods transport in Ahmedabad & Gandhinagar. Instant fares, live tracking, verified drivers. Book with Parcer today.',
  },
  {
    view: 'about',
    path: '/about',
    title: 'About Parcer — Smarter Goods Transportation',
    description:
      'Learn who runs Parcer, how our goods transport platform works, and how we keep deliveries safe and on time.',
    breadcrumb: 'About Us',
  },
  {
    view: 'contact',
    path: '/contact',
    title: 'Contact Parcer — Book or Get Support',
    description: 'Call, email or message Parcer for bookings, business accounts and support.',
    breadcrumb: 'Contact',
  },
  {
    view: 'privacy-policy',
    path: '/privacy-policy',
    title: 'Privacy Policy | Parcer',
    description: 'How Parcer collects, uses and protects your personal data.',
    breadcrumb: 'Privacy Policy',
  },
  {
    view: 'terms-conditions',
    path: '/terms-conditions',
    title: 'Terms & Conditions | Parcer',
    description: 'Terms for using the Parcer website and goods transport service.',
    breadcrumb: 'Terms & Conditions',
  },
  {
    view: 'terms-partner',
    path: '/terms-partner',
    title: 'Driver Partner Terms & Conditions | Parcer',
    description:
      'Terms for driver partners and vehicle owners who accept goods transport trips on the Parcer platform.',
    breadcrumb: 'Partner Terms & Conditions',
  },
  {
    view: 'refund-policy',
    path: '/refund-policy',
    title: 'Cancellation & Refund Policy | Parcer',
    description: 'How cancellations, cancellation charges and refunds work for Parcer goods transport bookings.',
    breadcrumb: 'Cancellation & Refund Policy',
  },
];

export const notFoundPage: PageMeta = {
  view: 'not-found',
  path: '/404',
  title: 'Page Not Found | Parcer',
  description: 'The page you are looking for does not exist. Head back to the Parcer homepage.',
  noindex: true,
};

export function pathForView(view: View): string {
  if (view === 'services') return '/#services';
  if (view === 'how-it-works') return '/#how-it-works';
  return pages.find((p) => p.view === view)?.path ?? '/';
}

export function pageForPath(pathname: string): PageMeta {
  const clean = '/' + pathname.toLowerCase().replace(/^\/+|\/+$/g, '');
  if (clean === '/services' || clean === '/how-it-works') {
    return pages.find((p) => p.view === 'home') ?? notFoundPage;
  }
  return pages.find((p) => p.path === clean) ?? notFoundPage;
}

const ORG_ID = `${SITE_URL}/#org`;

function structuredData(page: PageMeta): object | null {
  if (page.noindex) return null;

  if (page.view === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': ORG_ID,
          name: 'Parcer',
          legalName: 'Tiny Script Soft Tech Pvt. Ltd.',
          url: `${SITE_URL}/`,
          logo: `${SITE_URL}/logo-512.png`,
          email: CONTACT.email,
          telephone: '+91-9316535015',
          address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT.streetAddress,
            addressLocality: CONTACT.locality,
            addressRegion: CONTACT.region,
            postalCode: CONTACT.postalCode,
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: 'Parcer',
          publisher: { '@id': ORG_ID },
        },
        {
          '@type': 'Service',
          serviceType: 'Goods transportation',
          provider: { '@id': ORG_ID },
          areaServed: [
            { '@type': 'City', name: 'Ahmedabad' },
            { '@type': 'City', name: 'Gandhinagar' },
          ],
        },
        // The FAQ section is rendered on the homepage, so FAQPage markup is allowed here.
        {
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        },
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.breadcrumb ?? page.title, item: `${SITE_URL}${page.path}` },
    ],
  };
}

function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Page-specific <head> tags. Site-wide tags (icons, og:image, og:site_name…) live in index.html.
 * Every tag carries data-seo so the client can swap them on navigation.
 */
export function headTags(page: PageMeta): string {
  const url = `${SITE_URL}${page.path === '/' ? '/' : page.path}`;
  const title = esc(page.title);
  const description = esc(page.description);
  const tags = [
    `<title data-seo>${title}</title>`,
    `<meta data-seo name="description" content="${description}" />`,
    `<meta data-seo name="robots" content="${page.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<meta data-seo property="og:title" content="${title}" />`,
    `<meta data-seo property="og:description" content="${description}" />`,
    `<meta data-seo name="twitter:title" content="${title}" />`,
    `<meta data-seo name="twitter:description" content="${description}" />`,
  ];
  if (!page.noindex) {
    tags.push(`<link data-seo rel="canonical" href="${url}" />`);
    tags.push(`<meta data-seo property="og:url" content="${url}" />`);
  }
  const ld = structuredData(page);
  if (ld) {
    // Escape "<" so the JSON can never close the script tag early.
    tags.push(`<script data-seo type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n    ');
}

/** Client-side: replace the page-specific head tags after an in-app navigation. */
export function applyHeadTags(page: PageMeta) {
  document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
  document.head.insertAdjacentHTML('beforeend', headTags(page));
}

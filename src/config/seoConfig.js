import { buildStructuredData, defaultDescription, seoRoutes } from './seoRoutes';

const routeKey = (route) => route === '/'
  ? 'HOME'
  : route.replace(/^\//, '').replaceAll('/', '_').replaceAll('-', '_').toUpperCase();

const pages = Object.fromEntries(Object.entries(seoRoutes).map(([path, config]) => [routeKey(path), {
  ...config,
  path,
  canonical: `https://sastrava.com${path === '/' ? '/' : path}`,
  ogImage: '/images/sastrava-social-card.png',
  ogType: 'website',
}]));

export const SEO_CONFIG = {
  DEFAULT: {
    siteName: 'SASTRAVA',
    siteDescription: defaultDescription,
    siteUrl: 'https://sastrava.com',
    logoUrl: 'https://sastrava.com/logo.png',
    socialImage: 'https://sastrava.com/images/sastrava-social-card.png',
    favicon: '/favicon.png?v=20261009',
    language: 'en-IN',
    locale: 'en_IN',
    contactEmail: 'siri@sastrava.com',
  },
  PAGES: pages,
  ROBOTS: {
    userAgent: '*',
    allow: '/',
    sitemap: 'https://sastrava.com/sitemap.xml',
  },
};

export const getPageSEO = (pageName) => {
  const key = String(pageName ?? 'HOME').startsWith('/')
    ? routeKey(String(pageName))
    : String(pageName ?? 'HOME').toUpperCase();
  return SEO_CONFIG.PAGES[key] ?? SEO_CONFIG.PAGES.HOME;
};

export const generateMetaTags = (pageConfig) => ({
  title: pageConfig.title,
  meta: [
    { name: 'description', content: pageConfig.description },
    { property: 'og:title', content: pageConfig.title },
    { property: 'og:description', content: pageConfig.description },
    { property: 'og:image', content: pageConfig.ogImage },
    { property: 'og:type', content: pageConfig.ogType },
    { property: 'og:url', content: pageConfig.canonical },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: pageConfig.title },
    { name: 'twitter:description', content: pageConfig.description },
    { name: 'twitter:image', content: pageConfig.ogImage },
  ],
  link: [{ rel: 'canonical', href: pageConfig.canonical }],
});

export const generateSchemaMarkup = (pageName = '/') => {
  const route = String(pageName).startsWith('/')
    ? String(pageName)
    : SEO_CONFIG.PAGES[String(pageName).toUpperCase()]?.path ?? '/';
  return JSON.stringify(buildStructuredData(route));
};

export default SEO_CONFIG;

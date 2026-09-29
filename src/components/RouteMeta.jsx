import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildStructuredData, getSeoEntry, normalizeSeoPath } from '../config/seoRoutes';

const origin = 'https://sastrava.com';

function upsertMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.append(element);
  }
  element.setAttribute('content', content);
}

export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = normalizeSeoPath(pathname);
    const entry = getSeoEntry(route);
    const canonical = `${origin}${route === '/' ? '/' : route}`;
    const image = `${origin}/images/sastrava-social-card.png`;
    document.title = entry.title;
    upsertMeta('name', 'description', entry.description);
    upsertMeta('property', 'og:title', entry.title);
    upsertMeta('property', 'og:description', entry.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:image:alt', 'SASTRAVA — AI, cybersecurity, and digital growth');
    upsertMeta('property', 'og:site_name', 'SASTRAVA');
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', entry.title);
    upsertMeta('name', 'twitter:description', entry.description);
    upsertMeta('name', 'twitter:image', image);

    if (entry.noindex) upsertMeta('name', 'robots', 'noindex, nofollow');
    else document.head.querySelector('meta[name="robots"]')?.remove();

    let canonicalElement = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.append(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonical);

    let schemaElement = document.head.querySelector('#sastrava-json-ld');
    if (!schemaElement) {
      schemaElement = document.createElement('script');
      schemaElement.id = 'sastrava-json-ld';
      schemaElement.type = 'application/ld+json';
      document.head.append(schemaElement);
    }
    schemaElement.textContent = JSON.stringify(buildStructuredData(route));
  }, [pathname]);

  return null;
}

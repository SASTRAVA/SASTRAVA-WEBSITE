import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const origin = 'https://sastrava.com';
const pages = {
  '/': ['SASTRAVA — Consulting, Innovation & Incubation', 'SASTRAVA partners with startups, businesses, and institutions to diagnose challenges and build progress through consulting, innovation, learning, and incubation.'],
  '/about': ['About SASTRAVA | Consulting, Innovation & Incubation', 'Learn about SASTRAVA and our approach to consulting, innovation, and incubation.'],
  '/services': ['Services | SASTRAVA', 'Explore SASTRAVA consulting, innovation, learning, and incubation services.'],
  '/courses': ['Courses | SASTRAVA', 'Explore SASTRAVA learning and capability-building programmes.'],
  '/portfolio': ['Portfolio | SASTRAVA', 'Explore SASTRAVA work, outcomes, and team capabilities.'],
  '/contact': ['Contact SASTRAVA', 'Talk with SASTRAVA about your next business, innovation, or incubation challenge.'],
  '/privacy': ['Privacy Policy | SASTRAVA', 'Read the SASTRAVA privacy policy.'],
  '/terms': ['Terms | SASTRAVA', 'Read the SASTRAVA terms of use.'],
  '/security': ['Security | SASTRAVA', 'Learn how to report a security concern to SASTRAVA.'],
};

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
    const [title, description] = pages[pathname] || ['Page not found | SASTRAVA', 'The page you requested could not be found.'];
    const canonical = `${origin}${pathname === '/' ? '/' : pathname}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('name', 'twitter:card', 'summary_large_image');

    let canonicalElement = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.append(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonical);
  }, [pathname]);

  return null;
}

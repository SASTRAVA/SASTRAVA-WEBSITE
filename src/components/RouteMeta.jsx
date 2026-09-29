import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const origin = 'https://sastrava.com';
const pages = {
  '/': ['SASTRAVA — Consulting, Innovation & Incubation', 'SASTRAVA partners with startups, businesses, and institutions to diagnose challenges and build progress through consulting, innovation, learning, and incubation.'],
  '/about': ['About SASTRAVA | Consulting, Innovation & Incubation', 'Learn about SASTRAVA and our approach to consulting, innovation, and incubation.'],
  '/domains': ['Industries & Domains | SASTRAVA', 'Explore the industries and domains SASTRAVA supports through consulting, innovation, and incubation.'],
  '/services': ['Services | SASTRAVA', 'Explore SASTRAVA consulting, innovation, learning, and incubation services.'],
  '/services-hub': ['Service Areas | SASTRAVA', 'Explore SASTRAVA service areas and find the right next step for your organization.'],
  '/learn': ['Learning & Training | SASTRAVA', 'Explore practical learning and training programmes from SASTRAVA.'],
  '/build': ['Build Digital Products | SASTRAVA', 'Explore how SASTRAVA helps organizations turn ideas and operational needs into digital products.'],
  '/grow': ['Growth & Incubation | SASTRAVA', 'Explore growth strategy, go-to-market support, and incubation services from SASTRAVA.'],
  '/secure': ['Security Services | SASTRAVA', 'Explore security services and guidance for organizations working with SASTRAVA.'],
  '/courses': ['Courses | SASTRAVA', 'Explore SASTRAVA learning and capability-building programmes.'],
  '/portfolio': ['Portfolio | SASTRAVA', 'Explore SASTRAVA work, outcomes, and team capabilities.'],
  '/blog': ['Insights | SASTRAVA', 'Read perspectives and updates from SASTRAVA.'],
  '/careers': ['Careers | SASTRAVA', 'Explore opportunities to work with SASTRAVA.'],
  '/contact': ['Contact SASTRAVA', 'Talk with SASTRAVA about your next business, innovation, or incubation challenge.'],
  '/privacy': ['Privacy Policy | SASTRAVA', 'Read the SASTRAVA privacy policy.'],
  '/terms': ['Terms | SASTRAVA', 'Read the SASTRAVA terms of use.'],
  '/faq': ['Frequently Asked Questions | SASTRAVA', 'Find answers to common questions about SASTRAVA and its services.'],
  '/support': ['Support | SASTRAVA', 'Get help with SASTRAVA services, learning programmes, or your inquiry.'],
  '/security': ['Security | SASTRAVA', 'Learn how to report a security concern to SASTRAVA.'],
  '/login': ['Login | SASTRAVA', 'Sign in to your SASTRAVA account.'],
  '/student-dashboard': ['Student Dashboard | SASTRAVA', 'Access your SASTRAVA learning dashboard.'],
  '/success-stories': ['Success Stories | SASTRAVA', 'Explore stories about work and learning with SASTRAVA.'],
  '/case-studies': ['Case Studies | SASTRAVA', 'Explore selected SASTRAVA projects and case studies.'],
  '/research': ['Research | SASTRAVA', 'Explore research and publications from SASTRAVA.'],
  '/publications': ['Publications | SASTRAVA', 'Browse publications from SASTRAVA.'],
  '/open-source': ['Open Source | SASTRAVA', 'Explore open-source work from SASTRAVA.'],
  '/achievements': ['Achievements | SASTRAVA', 'Explore achievements and milestones from SASTRAVA.'],
  '/cybersecurity': ['Cybersecurity Services | SASTRAVA', 'Explore cybersecurity services from SASTRAVA.'],
  '/cybersecurity/penetration-testing': ['Penetration Testing | SASTRAVA', 'Learn about penetration testing services from SASTRAVA.'],
  '/cybersecurity/security-audits': ['Security Audits | SASTRAVA', 'Learn about security audit services from SASTRAVA.'],
  '/ai': ['AI Solutions | SASTRAVA', 'Explore AI solutions and services from SASTRAVA.'],
  '/ai/genai': ['Generative AI | SASTRAVA', 'Explore generative AI services from SASTRAVA.'],
  '/digital-marketing': ['Digital Marketing | SASTRAVA', 'Explore digital marketing services from SASTRAVA.'],
  '/digital-marketing/seo': ['SEO Services | SASTRAVA', 'Explore search engine optimization services from SASTRAVA.'],
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
    const isPrivate = pathname === '/student-dashboard' || pathname === '/login' || pathname.startsWith('/login/');
    const route = pathname.startsWith('/services-hub/')
      ? '/services-hub'
      : pathname.startsWith('/login/')
        ? '/login'
        : pathname;
    const [title, description] = pages[route] || ['Page not found | SASTRAVA', 'The page you requested could not be found.'];
    const canonical = `${origin}${pathname === '/' ? '/' : pathname}`;
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', `${origin}/logo.png`);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:image', `${origin}/logo.png`);
    if (isPrivate) {
      upsertMeta('name', 'robots', 'noindex, nofollow');
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }

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

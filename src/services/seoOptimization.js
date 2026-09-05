/**
 * SEO Optimization Service
 * Dynamic meta tag updates and SEO management
 */

import { SEO_CONFIG } from '../config/seoConfig';

/**
 * Update document meta tags
 */
export const updateMetaTags = (pageConfig) => {
  if (typeof document === 'undefined') return;

  // Update title
  document.title = pageConfig.title;

  // Update or create meta tags
  updateOrCreateMetaTag('description', pageConfig.description, 'name');
  updateOrCreateMetaTag('keywords', pageConfig.keywords?.join(', '), 'name');
  
  // Open Graph tags
  updateOrCreateMetaTag('og:title', pageConfig.title, 'property');
  updateOrCreateMetaTag('og:description', pageConfig.description, 'property');
  updateOrCreateMetaTag('og:image', pageConfig.ogImage, 'property');
  updateOrCreateMetaTag('og:type', pageConfig.ogType || 'website', 'property');
  updateOrCreateMetaTag('og:url', pageConfig.canonical, 'property');
  
  // Twitter tags
  updateOrCreateMetaTag('twitter:title', pageConfig.title, 'name');
  updateOrCreateMetaTag('twitter:description', pageConfig.description, 'name');
  updateOrCreateMetaTag('twitter:image', pageConfig.ogImage, 'name');

  // Canonical URL
  updateCanonicalLink(pageConfig.canonical);
};

/**
 * Update or create a meta tag
 */
const updateOrCreateMetaTag = (name, content, attribute = 'name') => {
  if (!content || typeof document === 'undefined') return;

  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.setAttribute('content', content);
};

/**
 * Update canonical link
 */
const updateCanonicalLink = (url) => {
  if (!url || typeof document === 'undefined') return;

  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  
  link.href = url;
};

/**
 * Add schema markup to page
 */
export const addSchemaMarkup = (schemaData) => {
  if (typeof document === 'undefined') return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

/**
 * Get schema markup for page type
 */
export const getSchemaMarkup = (pageType, customData = {}) => {
  const baseSchema = SEO_CONFIG.SCHEMA_MARKUP[pageType.toUpperCase()];
  
  if (!baseSchema) return null;

  // Merge custom data with base schema
  const schema = { ...baseSchema, ...customData };
  
  return schema;
};

/**
 * Generate sitemap URL
 */
export const generateSitemapUrl = (path, priority = 0.8, changeFreq = 'weekly', lastModified = new Date()) => {
  return {
    loc: `${SEO_CONFIG.DEFAULT.siteUrl}${path}`,
    lastmod: lastModified.toISOString().split('T')[0],
    changefreq: changeFreq,
    priority: priority
  };
};

/**
 * Generate sitemap XML
 */
export const generateSitemapXML = (urls = []) => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = () => {
  const config = SEO_CONFIG.ROBOTS;
  let content = `User-agent: ${config.userAgent}\n`;
  content += `Allow: ${config.allow}\n`;
  
  config.disallow.forEach(path => {
    content += `Disallow: ${path}\n`;
  });
  
  content += `Crawl-delay: ${config.crawlDelay}\n`;
  
  config.sitemaps.forEach(sitemap => {
    content += `Sitemap: ${sitemap}\n`;
  });
  
  return content;
};

/**
 * Optimize image for SEO
 */
export const optimizeImageSEO = (imageUrl, altText, title) => {
  return {
    src: imageUrl,
    alt: altText,
    title: title,
    loading: 'lazy',
    decoding: 'async'
  };
};

/**
 * Generate structured data for FAQ
 */
export const generateFAQSchema = (faqs = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

/**
 * Generate structured data for breadcrumbs
 */
export const generateBreadcrumbSchema = (breadcrumbs = []) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

/**
 * Get SEO tips for content
 */
export const getSEOTips = () => {
  return [
    {
      title: 'Use descriptive meta titles',
      description: 'Keep titles under 60 characters and include target keywords'
    },
    {
      title: 'Write compelling meta descriptions',
      description: 'Keep descriptions under 160 characters with clear CTA'
    },
    {
      title: 'Use heading hierarchy (H1, H2, H3)',
      description: 'Structure content with proper heading tags for better readability and SEO'
    },
    {
      title: 'Optimize images',
      description: 'Use descriptive alt text, compress images, and use proper formats'
    },
    {
      title: 'Create quality content',
      description: 'Write original, comprehensive content that answers user queries'
    },
    {
      title: 'Build internal links',
      description: 'Link to relevant pages within your site to improve crawlability'
    },
    {
      title: 'Mobile optimization',
      description: 'Ensure your site is fully responsive and mobile-friendly'
    },
    {
      title: 'Page speed',
      description: 'Optimize images, minify CSS/JS, and use CDN for faster loading'
    }
  ];
};

/**
 * Check SEO score (basic)
 */
export const checkSEOScore = (pageConfig) => {
  let score = 0;
  const maxScore = 100;
  
  // Check title
  if (pageConfig.title && pageConfig.title.length > 30 && pageConfig.title.length < 60) {
    score += 15;
  }
  
  // Check description
  if (pageConfig.description && pageConfig.description.length > 50 && pageConfig.description.length < 160) {
    score += 15;
  }
  
  // Check keywords
  if (pageConfig.keywords && pageConfig.keywords.length > 0) {
    score += 10;
  }
  
  // Check OG tags
  if (pageConfig.ogImage) score += 10;
  if (pageConfig.ogType) score += 10;
  
  // Check canonical
  if (pageConfig.canonical) score += 15;
  
  // Check schema markup
  if (pageConfig.schema) score += 15;
  
  // Check mobile friendly
  score += 10; // Assume modern setup
  
  return Math.min(score, maxScore);
};

export default {
  updateMetaTags,
  addSchemaMarkup,
  getSchemaMarkup,
  generateSitemapUrl,
  generateSitemapXML,
  generateRobotsTxt,
  optimizeImageSEO,
  generateFAQSchema,
  generateBreadcrumbSchema,
  getSEOTips,
  checkSEOScore
};

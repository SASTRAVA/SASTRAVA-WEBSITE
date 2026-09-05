/**
 * SEO Helpers Utility Functions
 * Helper functions for SEO metadata formatting and generation
 */

/**
 * Format meta tags for page
 */
export const formatMetaTags = ({
  title = '',
  description = '',
  keywords = [],
  ogImage = '',
  ogType = 'website',
  canonical = '',
  author = 'SASTRAVA',
  locale = 'en_IN'
} = {}) => {
  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    ogImage,
    ogType,
    canonical,
    author,
    locale
  };
};

/**
 * Generate schema markup for different content types
 */
export const generateSchemaMarkup = (type, data = {}) => {
  const schemas = {
    course: () => ({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: data.name || '',
      description: data.description || '',
      provider: {
        '@type': 'Organization',
        name: 'SASTRAVA',
        url: 'https://www.sastrava.com'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.rating || 4.9,
        ratingCount: data.ratingCount || 1000
      }
    }),
    
    service: () => ({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: data.name || '',
      description: data.description || '',
      image: data.image || '',
      telephone: data.phone || '',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      }
    }),
    
    article: () => ({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title || '',
      description: data.description || '',
      image: data.image || '',
      datePublished: data.publishedDate || new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'SASTRAVA'
      }
    }),
    
    faq: () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: (data.items || []).map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    }),
    
    breadcrumb: () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: (data.items || []).map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    })
  };
  
  const schemaGenerator = schemas[type.toLowerCase()];
  return schemaGenerator ? schemaGenerator() : null;
};

/**
 * Create canonical URL
 */
export const createCanonicalUrl = (path = '', baseUrl = 'https://www.sastrava.com') => {
  return path ? `${baseUrl}${path}` : baseUrl;
};

/**
 * Format keywords for SEO
 */
export const formatKeywords = (keywords = []) => {
  if (typeof keywords === 'string') {
    return keywords.split(',').map(k => k.trim());
  }
  return keywords.filter(k => k && typeof k === 'string').map(k => k.trim());
};

/**
 * Get SEO-friendly slug from text
 */
export const generateSlug = (text = '') => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-');      // Replace multiple hyphens with single hyphen
};

/**
 * Truncate text to character limit
 */
export const truncateText = (text = '', limit = 160, suffix = '...') => {
  if (text.length <= limit) return text;
  return text.substring(0, limit - suffix.length) + suffix;
};

/**
 * Check if text is suitable for meta description
 */
export const isValidMetaDescription = (text = '') => {
  const length = text.length;
  return length >= 50 && length <= 160;
};

/**
 * Check if title is suitable for SEO
 */
export const isValidPageTitle = (title = '') => {
  const length = title.length;
  return length >= 30 && length <= 60;
};

/**
 * Extract primary keyword from text
 */
export const extractPrimaryKeyword = (text = '', keywords = []) => {
  const lowerText = text.toLowerCase();
  for (const keyword of keywords) {
    if (lowerText.includes(keyword.toLowerCase())) {
      return keyword;
    }
  }
  return keywords[0] || '';
};

/**
 * Generate SEO metadata from content
 */
export const generateSEOMetadata = (content = {}) => {
  const {
    title = '',
    body = '',
    keywords = [],
    image = ''
  } = content;

  // Generate description from body
  const description = truncateText(body.replace(/\s+/g, ' ').trim(), 160);

  // Generate keywords if not provided
  const finalKeywords = keywords.length > 0 ? keywords : generateDefaultKeywords(title);

  // Generate slug
  const slug = generateSlug(title);

  return {
    title: isValidPageTitle(title) ? title : truncateText(title, 60),
    description: isValidMetaDescription(description) ? description : truncateText(body, 160),
    keywords: finalKeywords,
    slug,
    image,
    canonical: `https://www.sastrava.com/${slug}`,
    ogType: 'article'
  };
};

/**
 * Generate default keywords from title
 */
const generateDefaultKeywords = (title = '') => {
  const words = title.toLowerCase().split(/\s+/);
  return words
    .filter(word => word.length > 4) // Filter words longer than 4 characters
    .slice(0, 5);                     // Take first 5 words
};

/**
 * Get keyword density in text
 */
export const calculateKeywordDensity = (text = '', keyword = '') => {
  if (!text || !keyword) return 0;
  
  const lowerText = text.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();
  
  const matches = lowerText.match(new RegExp(lowerKeyword, 'g'));
  const wordCount = text.split(/\s+/).length;
  
  return matches ? (matches.length / wordCount) * 100 : 0;
};

/**
 * Check heading hierarchy
 */
export const checkHeadingHierarchy = (headings = []) => {
  if (!headings.length) return false;
  
  // Should start with h1
  if (headings[0].level !== 1) return false;
  
  // Each heading level should not jump more than 1
  for (let i = 1; i < headings.length; i++) {
    if (headings[i].level - headings[i - 1].level > 1) {
      return false;
    }
  }
  
  return true;
};

/**
 * Get reading time in minutes
 */
export const calculateReadingTime = (text = '', wordsPerMinute = 200) => {
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export default {
  formatMetaTags,
  generateSchemaMarkup,
  createCanonicalUrl,
  formatKeywords,
  generateSlug,
  truncateText,
  isValidMetaDescription,
  isValidPageTitle,
  extractPrimaryKeyword,
  generateSEOMetadata,
  calculateKeywordDensity,
  checkHeadingHierarchy,
  calculateReadingTime
};

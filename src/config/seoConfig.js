/**
 * SEO Configuration
 * Meta tags, schema markup, and SEO metadata for all pages
 * Used for dynamic meta tag generation and structured data
 */

export const SEO_CONFIG = {
  DEFAULT: {
    siteName: 'SASTRAVA',
    siteDescription: 'Learn. Build. Grow. Secure. Your complete ecosystem for education, development, growth, and security.',
    siteUrl: 'https://www.sastrava.com',
    logoUrl: 'https://www.sastrava.com/logo.png',
    favicon: '/favicon.ico',
    language: 'en',
    locale: 'en_IN',
    twitterHandle: '@SASTRAVA',
    contactEmail: 'hello@sastrava.com'
  },

  PAGES: {
    HOME: {
      path: '/',
      title: 'SASTRAVA | Learn. Build. Grow. Secure.',
      description: 'Transform your career with our complete ecosystem for education, software development, business growth, and cybersecurity. 10,000+ learners, 500+ projects, 300+ businesses served.',
      keywords: ['education', 'web development', 'cybersecurity', 'digital marketing', 'skill training', 'career growth'],
      ogImage: '/og-home.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com',
      priority: 1.0,
      changeFreq: 'weekly'
    },

    LEARN: {
      path: '/learn',
      title: 'Learn | SASTRAVA - Master In-Demand Skills',
      description: 'Get industry-certified training in Python, Web Development, Data Science, Cybersecurity, Cloud Computing, and AI/ML. 10,000+ students trained. 85% job placement rate.',
      keywords: ['online courses', 'tech training', 'programming', 'cybersecurity courses', 'data science', 'cloud computing'],
      ogImage: '/og-learn.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/learn',
      priority: 0.9,
      changeFreq: 'monthly'
    },

    BUILD: {
      path: '/build',
      title: 'Build | SASTRAVA - Custom Software Solutions',
      description: 'Custom development, mobile apps, web applications, APIs, and DevOps solutions. 500+ projects delivered. Starting ₹50,000.',
      keywords: ['custom software', 'web development', 'mobile apps', 'API development', 'DevOps', 'startup tech'],
      ogImage: '/og-build.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/build',
      priority: 0.9,
      changeFreq: 'monthly'
    },

    GROW: {
      path: '/grow',
      title: 'Grow | SASTRAVA - Digital Marketing & Growth Solutions',
      description: 'SEO, social media marketing, content strategy, PPC, email marketing, and brand positioning. 300+ businesses grown.',
      keywords: ['digital marketing', 'SEO services', 'social media marketing', 'content marketing', 'PPC ads', 'brand strategy'],
      ogImage: '/og-grow.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/grow',
      priority: 0.9,
      changeFreq: 'monthly'
    },

    SECURE: {
      path: '/secure',
      title: 'Secure | SASTRAVA - Cybersecurity & Compliance',
      description: 'Penetration testing, security audits, incident response, compliance management, and managed security services. 24/7 protection.',
      keywords: ['cybersecurity', 'penetration testing', 'security audit', 'compliance', 'incident response', 'managed security'],
      ogImage: '/og-secure.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/secure',
      priority: 0.9,
      changeFreq: 'monthly'
    },

    SERVICES_HUB: {
      path: '/services-hub',
      title: 'Services | SASTRAVA - Complete Service Ecosystem',
      description: 'Explore all services across Learn, Build, Grow, and Secure pillars. 24+ services designed for your success.',
      keywords: ['services', 'courses', 'development', 'marketing', 'security', 'software'],
      ogImage: '/og-services.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/services-hub',
      priority: 0.8,
      changeFreq: 'monthly'
    },

    ABOUT: {
      path: '/about',
      title: 'About SASTRAVA | Mission, Vision & Values',
      description: 'Meet the team behind SASTRAVA. Founded to democratize quality tech education and services. 20+ years combined experience.',
      keywords: ['about us', 'company', 'team', 'mission', 'vision', 'SASTRAVA'],
      ogImage: '/og-about.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/about',
      priority: 0.7,
      changeFreq: 'yearly'
    },

    CONTACT: {
      path: '/contact',
      title: 'Contact SASTRAVA | Get In Touch',
      description: 'Contact SASTRAVA for courses, services, or inquiries. Multiple office locations in India. Available 24/7.',
      keywords: ['contact', 'support', 'inquiry', 'phone', 'email', 'office locations'],
      ogImage: '/og-contact.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/contact',
      priority: 0.8,
      changeFreq: 'monthly'
    },

    COURSES: {
      path: '/courses',
      title: 'All Courses | SASTRAVA - Tech Training Programs',
      description: 'Browse all 30+ courses. Python, Web Development, Data Science, Cybersecurity, Cloud, AI/ML and more.',
      keywords: ['courses', 'training', 'certification', 'bootcamp', 'programming', 'tech courses'],
      ogImage: '/og-courses.jpg',
      ogType: 'website',
      canonical: 'https://www.sastrava.com/courses',
      priority: 0.9,
      changeFreq: 'weekly'
    }
  },

  SCHEMA_MARKUP: {
    ORGANIZATION: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'SASTRAVA',
      url: 'https://www.sastrava.com',
      logo: 'https://www.sastrava.com/logo.png',
      description: 'Tech education and services company',
      sameAs: [
        'https://www.facebook.com/SASTRAVA',
        'https://www.linkedin.com/company/SASTRAVA',
        'https://twitter.com/SASTRAVA'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-xxx-xxx-xxxx',
        contactType: 'Customer Service',
        email: 'hello@sastrava.com',
        availableLanguage: ['en', 'hi']
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bangalore, Delhi, Mumbai',
        addressCountry: 'IN'
      }
    },

    COURSE_SCHEMA: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Course Title',
      description: 'Course description',
      provider: {
        '@type': 'Organization',
        name: 'SASTRAVA',
        url: 'https://www.sastrava.com'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '5000',
        bestRating: '5',
        worstRating: '1'
      }
    },

    BREADCRUMB: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.sastrava.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://www.sastrava.com/services'
        }
      ]
    },

    LOCAL_BUSINESS: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'SASTRAVA',
      image: 'https://www.sastrava.com/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office Address',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'Postal Code',
        addressCountry: 'IN'
      },
      telephone: '+91-xxx-xxx-xxxx'
    }
  },

  SOCIAL_MEDIA: {
    FACEBOOK: {
      appId: 'YOUR_FB_APP_ID',
      pageUrl: 'https://www.facebook.com/SASTRAVA',
      pixels: ['YOUR_FB_PIXEL_ID']
    },
    TWITTER: {
      handle: '@SASTRAVA',
      card: 'summary_large_image'
    },
    LINKEDIN: {
      companyUrl: 'https://www.linkedin.com/company/SASTRAVA',
      tagId: 'YOUR_LINKEDIN_TAG_ID'
    },
    INSTAGRAM: {
      handle: '@SASTRAVA',
      businessAccount: true
    }
  },

  ANALYTICS: {
    GOOGLE_ANALYTICS: {
      measurementId: 'G-YOUR_MEASUREMENT_ID',
      trackingId: 'UA-YOUR_TRACKING_ID'
    },
    GOOGLE_TAG_MANAGER: {
      containerId: 'GTM-YOUR_CONTAINER_ID'
    },
    HOTJAR: {
      siteId: 'YOUR_HOTJAR_SITE_ID'
    }
  },

  ROBOTS: {
    userAgent: '*',
    allow: '/',
    disallow: ['/admin', '/private', '/temp'],
    crawlDelay: 0,
    sitemaps: ['https://www.sastrava.com/sitemap.xml']
  }
};

/**
 * Helper function to get page SEO config
 */
export const getPageSEO = (pageName) => {
  return SEO_CONFIG.PAGES[pageName.toUpperCase()] || SEO_CONFIG.PAGES.HOME;
};

/**
 * Helper function to generate meta tags HTML
 */
export const generateMetaTags = (pageConfig) => {
  const tags = {
    title: pageConfig.title,
    meta: [
      { name: 'description', content: pageConfig.description },
      { name: 'keywords', content: pageConfig.keywords?.join(', ') },
      { property: 'og:title', content: pageConfig.title },
      { property: 'og:description', content: pageConfig.description },
      { property: 'og:image', content: pageConfig.ogImage },
      { property: 'og:type', content: pageConfig.ogType },
      { property: 'og:url', content: pageConfig.canonical },
      { name: 'twitter:title', content: pageConfig.title },
      { name: 'twitter:description', content: pageConfig.description },
      { name: 'twitter:image', content: pageConfig.ogImage }
    ],
    link: [
      { rel: 'canonical', href: pageConfig.canonical }
    ]
  };
  return tags;
};

/**
 * Helper function to generate schema markup
 */
export const generateSchemaMarkup = (schemaType) => {
  const schema = SEO_CONFIG.SCHEMA_MARKUP[schemaType.toUpperCase()];
  return schema ? JSON.stringify(schema) : null;
};

export default SEO_CONFIG;

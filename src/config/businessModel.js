/**
 * SASTRAVA Business Model Configuration
 * 4-Pillar Ecosystem: Learn, Build, Grow, Secure
 * 24 Services organized by pillar
 */

export const ECOSYSTEM_PILLARS = {
  LEARN: {
    id: 'learn',
    name: 'Learn',
    tagline: 'Master In-Demand Skills',
    description: 'Comprehensive education, certifications, and skill development programs',
    color: {
      primary: '#C9A84C',      // Gold
      light: '#FFF3B0',        // Light Gold
      dark: '#9d7f3a'
    },
    icon: 'BookOpen',
    count: 7,
    services: [
      'Specialized Courses',
      'Professional Certifications',
      'Interactive Workshops',
      'Industry Internships',
      'Expert Mentorship',
      'Career Roadmaps',
      'Skill Assessment'
    ],
    callout: 'Join 10,000+ learners transforming their careers',
    cta: 'Explore Learning Paths',
    featured: [
      { name: 'Cybersecurity Essentials', price: '₹15,000' },
      { name: 'AI/ML Fundamentals', price: '₹18,000' },
      { name: 'Web Development Pro', price: '₹16,000' }
    ]
  },

  BUILD: {
    id: 'build',
    name: 'Build',
    tagline: 'Transform Ideas Into Reality',
    description: 'Custom solutions, AI products, and innovative development services',
    color: {
      primary: '#1ECDB0',      // Peacock
      light: '#4dd9c4',
      dark: '#0f8f7f'
    },
    icon: 'Code',
    count: 6,
    services: [
      'Custom Software Development',
      'AI & Automation Solutions',
      'Product Development',
      'Research & Innovation',
      'Startup Incubation',
      'Open Source Projects'
    ],
    callout: 'Enterprise-grade solutions built by industry experts',
    cta: 'Discuss Your Project',
    featured: [
      { name: 'Full-Stack Development', from: '₹2,00,000' },
      { name: 'AI Implementation', from: '₹3,50,000' },
      { name: 'MVP Development', from: '₹1,50,000' }
    ]
  },

  GROW: {
    id: 'grow',
    name: 'Grow',
    tagline: 'Accelerate Your Growth Exponentially',
    description: 'Digital marketing, branding, and strategic growth services',
    color: {
      primary: '#FFF3B0',      // Light Gold
      light: '#fffae0',
      dark: '#ccc28c'
    },
    icon: 'TrendingUp',
    count: 6,
    services: [
      'Digital Marketing Strategies',
      'Brand Building & Identity',
      'SEO & SEM',
      'Content Creation & Distribution',
      'Social Media Management',
      'Growth Consulting'
    ],
    callout: 'Average 3x growth in 6 months',
    cta: 'Start Your Growth Journey',
    featured: [
      { name: 'Complete Digital Marketing', from: '₹50,000/month' },
      { name: 'SEO Excellence Package', from: '₹35,000/month' },
      { name: 'Content Strategy', from: '₹40,000/month' }
    ]
  },

  SECURE: {
    id: 'secure',
    name: 'Secure',
    tagline: 'Protect What Matters Most',
    description: 'Enterprise-grade cybersecurity and compliance solutions',
    color: {
      primary: '#0F3D3E',      // Peacock Dark
      light: '#1a5a5c',
      dark: '#072625'
    },
    icon: 'Shield',
    count: 5,
    services: [
      'Security Audits & Assessments',
      'Penetration Testing & VAPT',
      'Compliance & Risk Management',
      'Security Consulting',
      'Incident Response & Recovery'
    ],
    callout: 'Protect your business with certified security experts',
    cta: 'Schedule Security Audit',
    featured: [
      { name: 'Full Security Audit', from: '₹1,00,000' },
      { name: 'Penetration Testing', from: '₹2,50,000' },
      { name: 'Security Training', from: '₹30,000' }
    ]
  }
};

export const PILLAR_NAMES = ['LEARN', 'BUILD', 'GROW', 'SECURE'];
export const PILLAR_IDS = ['learn', 'build', 'grow', 'secure'];

/**
 * Get pillar by ID or name
 */
export const getPillar = (identifier) => {
  if (typeof identifier === 'string') {
    const key = identifier.toUpperCase();
    return ECOSYSTEM_PILLARS[key] || 
           Object.values(ECOSYSTEM_PILLARS).find(p => p.id === identifier.toLowerCase());
  }
  return ECOSYSTEM_PILLARS[identifier];
};

/**
 * Get all pillars with metadata
 */
export const getAllPillars = () => Object.values(ECOSYSTEM_PILLARS);

/**
 * Get pillar color
 */
export const getPillarColor = (pillarId, type = 'primary') => {
  const pillar = getPillar(pillarId);
  if (!pillar) return '#C9A84C';
  return pillar.color[type] || pillar.color.primary;
};

/**
 * Statistics for Each Pillar
 */
export const PILLAR_STATISTICS = {
  LEARN: {
    students: '10,000+',
    courses: '50+',
    certifications: '25+',
    satisfaction: '98%'
  },
  BUILD: {
    projects: '500+',
    clients: '200+',
    success: '95%',
    uptime: '99.9%'
  },
  GROW: {
    clients: '300+',
    growth: '3x avg',
    campaigns: '1000+',
    roi: '400%+'
  },
  SECURE: {
    audits: '150+',
    threats_prevented: '10,000+',
    uptime: '99.99%',
    compliance: 'ISO 27001, SOC 2'
  }
};

/**
 * Why Choose SASTRAVA - Key Value Propositions
 */
export const VALUE_PROPOSITIONS = [
  {
    id: 'industry-experts',
    title: 'Industry Experts',
    description: 'Learn from professionals with 15+ years experience in tech industry',
    icon: 'Users',
    stat: '50+ Expert Instructors'
  },
  {
    id: 'hands-on-training',
    title: 'Hands-On Training',
    description: 'Real projects, real problems, real-world solutions',
    icon: 'Zap',
    stat: '100+ Live Projects'
  },
  {
    id: 'career-focused',
    title: 'Career Outcomes',
    description: '85% students secure jobs within 3 months of completion',
    icon: 'Target',
    stat: '8,500+ Placements'
  },
  {
    id: 'innovation-driven',
    title: 'Innovation Hub',
    description: 'We stay ahead of industry trends and technology',
    icon: 'Lightbulb',
    stat: '50+ Patents/Publications'
  }
];

/**
 * Service Categories with Hierarchy
 */
export const SERVICE_HIERARCHY = {
  learn: {
    displayName: 'Learning & Development',
    subcategories: [
      { id: 'courses', name: 'Courses', icon: 'BookOpen', count: 12 },
      { id: 'certifications', name: 'Certifications', icon: 'Award', count: 8 },
      { id: 'workshops', name: 'Workshops', icon: 'Users', count: 15 },
      { id: 'internships', name: 'Internships', icon: 'Briefcase', count: 20 },
      { id: 'mentorship', name: 'Mentorship', icon: 'User', count: 30 },
      { id: 'learning-paths', name: 'Learning Paths', icon: 'Map', count: 10 },
      { id: 'assessments', name: 'Skill Assessment', icon: 'CheckCircle', count: 25 }
    ]
  },

  build: {
    displayName: 'Building & Development',
    subcategories: [
      { id: 'web-dev', name: 'Web Development', icon: 'Globe', count: 30 },
      { id: 'mobile-dev', name: 'Mobile Development', icon: 'Smartphone', count: 20 },
      { id: 'ai-ml', name: 'AI & Machine Learning', icon: 'Cpu', count: 15 },
      { id: 'cloud', name: 'Cloud Solutions', icon: 'Cloud', count: 12 },
      { id: 'devops', name: 'DevOps', icon: 'Settings', count: 10 },
      { id: 'research', name: 'R&D Projects', icon: 'Microscope', count: 8 }
    ]
  },

  grow: {
    displayName: 'Growth & Marketing',
    subcategories: [
      { id: 'digital-marketing', name: 'Digital Marketing', icon: 'Megaphone', count: 25 },
      { id: 'seo', name: 'SEO & SEM', icon: 'Search', count: 20 },
      { id: 'content', name: 'Content Creation', icon: 'PenTool', count: 30 },
      { id: 'social', name: 'Social Media', icon: 'Share2', count: 25 },
      { id: 'branding', name: 'Branding', icon: 'Palette', count: 15 },
      { id: 'analytics', name: 'Analytics & Analytics', icon: 'BarChart2', count: 10 }
    ]
  },

  secure: {
    displayName: 'Security & Compliance',
    subcategories: [
      { id: 'audits', name: 'Security Audits', icon: 'CheckSquare', count: 12 },
      { id: 'penetration', name: 'Penetration Testing', icon: 'Shield', count: 10 },
      { id: 'compliance', name: 'Compliance', icon: 'Lock', count: 8 },
      { id: 'consulting', name: 'Security Consulting', icon: 'AlertCircle', count: 15 },
      { id: 'incident', name: 'Incident Response', icon: 'Zap', count: 5 }
    ]
  }
};

/**
 * Business Metrics for Homepage
 */
export const BUSINESS_METRICS = {
  totalStudents: '10,000+',
  totalProjects: '500+',
  clientsServed: '300+',
  expertTeam: '50+',
  yearsExperience: '20+',
  employmentRate: '85%',
  courseCompletion: '92%',
  clientSatisfaction: '4.9/5'
};

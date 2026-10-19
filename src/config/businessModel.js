/**
 * SASTRAVA Business Model Configuration
 * 4-Pillar Ecosystem: Learn, Build, Grow, Secure
 * 24 Services organized by pillar
 */

export const ECOSYSTEM_PILLARS = {
  LEARN: {
    id: 'learn',
    name: 'Learn',
    tagline: 'Build Practical Skills',
    description: 'Practical learning, workshops, and skill development shaped around learner goals',
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
    callout: 'Explore practical learning and mentoring options',
    cta: 'Explore Learning Paths',
    featured: [
      { name: 'Technical learning', description: 'Workshops, mentorship, and project guidance tailored to the learner and context.' },
      { name: 'Skills development', description: 'A practical learning path aligned to current experience and intended goals.' },
      { name: 'Institutional programs', description: 'Discuss a learning format and scope for a team or educational institution.' }
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
    callout: 'Plan a solution around your users and technical requirements',
    cta: 'Discuss Your Project',
    featured: [
      { name: 'Software and digital products', description: 'Define user needs, technical approach, milestones, and deliverables together.' },
      { name: 'AI and workflow automation', description: 'Identify suitable workflows, integrations, review points, and success measures.' },
      { name: 'Startup and product advisory', description: 'Explore idea validation, MVP planning, and practical delivery support.' }
    ]
  },

  GROW: {
    id: 'grow',
    name: 'Grow',
    tagline: 'Make Growth More Measurable',
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
    callout: 'Plan growth around clear goals and measurement',
    cta: 'Start Your Growth Journey',
    featured: [
      { name: 'Search and digital visibility', description: 'Plan content, technical SEO, local signals, and measurement for your audience.' },
      { name: 'Brand and performance marketing', description: 'Align positioning, creative, channel plans, and campaign measurement.' },
      { name: 'Growth consulting', description: 'Prioritize experiments and execution based on business goals and capacity.' }
    ]
  },

  SECURE: {
    id: 'secure',
    name: 'Secure',
    tagline: 'Protect What Matters Most',
    description: 'Cybersecurity reviews, testing, remediation, and risk-management support',
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
    callout: 'Scope security reviews around your systems and risks',
    cta: 'Schedule Security Audit',
    featured: [
      { name: 'Security assessment', description: 'Agree the assets, authorization, methodology, and reporting scope before review.' },
      { name: 'Remediation and patching', description: 'Prioritize findings, plan fixes, and verify agreed changes through retesting.' },
      { name: 'Security readiness', description: 'Review selected control requirements and plan measurable follow-up actions.' }
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
export const PILLAR_STATISTICS = {};

/**
 * Why Choose SASTRAVA - Key Value Propositions
 */
export const VALUE_PROPOSITIONS = [
  {
    id: 'industry-experts',
    title: 'Practical Guidance',
    description: 'Work through focused learning, implementation, or advisory sessions aligned to your goals',
    icon: 'Users',
    stat: 'Goal-aligned support'
  },
  {
    id: 'hands-on-training',
    title: 'Hands-On Training',
    description: 'Shape practical deliverables around real project requirements and constraints',
    icon: 'Zap',
    stat: 'Practical deliverables'
  },
  {
    id: 'career-focused',
    title: 'Outcome-focused work',
    description: 'Define success measures before the engagement and review progress against them',
    icon: 'Target',
    stat: 'Clear success measures'
  },
  {
    id: 'innovation-driven',
    title: 'Innovation Hub',
    description: 'We stay ahead of industry trends and technology',
    icon: 'Lightbulb',
    stat: 'Evidence-led practice'
  }
];

/**
 * Service Categories with Hierarchy
 */
export const SERVICE_HIERARCHY = {
  learn: {
    displayName: 'Learning & Development',
    subcategories: [
      { id: 'courses', name: 'Courses', icon: 'BookOpen' },
      { id: 'certifications', name: 'Certification preparation', icon: 'Award' },
      { id: 'workshops', name: 'Workshops', icon: 'Users' },
      { id: 'internships', name: 'Internship guidance', icon: 'Briefcase' },
      { id: 'mentorship', name: 'Mentorship', icon: 'User' },
      { id: 'learning-paths', name: 'Learning Paths', icon: 'Map' },
      { id: 'assessments', name: 'Skill Assessment', icon: 'CheckCircle' }
    ]
  },

  build: {
    displayName: 'Building & Development',
    subcategories: [
      { id: 'web-dev', name: 'Web Development', icon: 'Globe' },
      { id: 'mobile-dev', name: 'Mobile Development', icon: 'Smartphone' },
      { id: 'ai-ml', name: 'AI & Machine Learning', icon: 'Cpu' },
      { id: 'cloud', name: 'Cloud Solutions', icon: 'Cloud' },
      { id: 'devops', name: 'DevOps', icon: 'Settings' },
      { id: 'research', name: 'Research & Development', icon: 'Microscope' }
    ]
  },

  grow: {
    displayName: 'Growth & Marketing',
    subcategories: [
      { id: 'digital-marketing', name: 'Digital Marketing', icon: 'Megaphone' },
      { id: 'seo', name: 'SEO & SEM', icon: 'Search' },
      { id: 'content', name: 'Content Creation', icon: 'PenTool' },
      { id: 'social', name: 'Social Media', icon: 'Share2' },
      { id: 'branding', name: 'Branding', icon: 'Palette' },
      { id: 'analytics', name: 'Marketing Analytics', icon: 'BarChart2' }
    ]
  },

  secure: {
    displayName: 'Security & Compliance',
    subcategories: [
      { id: 'audits', name: 'Security Audits', icon: 'CheckSquare' },
      { id: 'penetration', name: 'Penetration Testing', icon: 'Shield' },
      { id: 'compliance', name: 'Compliance reviews', icon: 'Lock' },
      { id: 'consulting', name: 'Security Consulting', icon: 'AlertCircle' },
      { id: 'incident', name: 'Incident Response planning', icon: 'Zap' }
    ]
  }
};

/**
 * Business Metrics for Homepage
 */
export const BUSINESS_METRICS = {};

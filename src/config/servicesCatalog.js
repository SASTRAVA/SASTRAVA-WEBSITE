/**
 * Services Catalog
 * Detailed definitions for all 24 services across 4 pillars
 * Single source of truth for service information
 */

export const SERVICES_CATALOG = {
  LEARN: {
    PYTHON_PROGRAMMING: {
      id: 'python-programming',
      name: 'Python Programming Bootcamp',
      description: 'Master Python from basics to advanced concepts',
      icon: 'Code',
      category: 'Programming',
      duration: '12 weeks',
      level: 'Beginner to Intermediate',
      features: [
        'Core Python syntax and data structures',
        'Object-oriented programming',
        'Functional programming',
        '30+ hands-on projects',
        'Industry mentorship'
      ],
      price: '₹15,000',
      curriculum: ['Basics', 'OOP', 'Advanced', 'Projects'],
      outcomes: ['Python Certification', 'Job Ready', 'Portfolio Projects']
    },
    WEB_DEVELOPMENT: {
      id: 'web-development',
      name: 'Full Stack Web Development',
      description: 'Build modern web applications with React and Node.js',
      icon: 'Globe',
      category: 'Web Development',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      features: [
        'Frontend: React, TailwindCSS, JavaScript ES6+',
        'Backend: Node.js, Express, MongoDB',
        'Database design and optimization',
        '15+ real-world projects',
        'Git and deployment workflows'
      ],
      price: '₹20,000',
      curriculum: ['Frontend Basics', 'React Advanced', 'Backend APIs', 'Full Stack Projects'],
      outcomes: ['Full Stack Certification', 'Portfolio Website', 'Job Placement Support']
    },
    DATA_SCIENCE: {
      id: 'data-science',
      name: 'Data Science & Analytics',
      description: 'Learn data analysis, visualization, and machine learning',
      icon: 'BarChart2',
      category: 'Data Science',
      duration: '14 weeks',
      level: 'Intermediate',
      features: [
        'Python for data analysis (Pandas, NumPy)',
        'Data visualization (Matplotlib, Seaborn)',
        'Statistics and probability',
        'Machine learning basics',
        '20+ datasets and projects'
      ],
      price: '₹18,000',
      curriculum: ['Python Basics', 'Data Analysis', 'Visualization', 'ML Intro'],
      outcomes: ['Data Science Certification', 'Portfolio Projects', 'Career Readiness']
    },
    CYBERSECURITY_FUNDAMENTALS: {
      id: 'cybersecurity-fundamentals',
      name: 'Cybersecurity Fundamentals',
      description: 'Foundation course in network security and ethical hacking',
      icon: 'Shield',
      category: 'Cybersecurity',
      duration: '10 weeks',
      level: 'Beginner',
      features: [
        'Network fundamentals',
        'Common vulnerabilities and attacks',
        'Encryption and cryptography',
        'Hands-on labs and penetration testing basics',
        'Industry best practices'
      ],
      price: '₹16,000',
      curriculum: ['Networking', 'Threats', 'Defense', 'Practical Labs'],
      outcomes: ['Security Certification', 'Lab Exercises', 'Resume Boost']
    },
    CLOUD_COMPUTING_AWS: {
      id: 'cloud-computing-aws',
      name: 'AWS Cloud Computing',
      description: 'Master Amazon Web Services and cloud infrastructure',
      icon: 'Cloud',
      category: 'Cloud & Infrastructure',
      duration: '10 weeks',
      level: 'Intermediate',
      features: [
        'EC2, S3, RDS fundamentals',
        'VPC and networking',
        'Load balancing and auto-scaling',
        'Cost optimization',
        'Hands-on AWS labs'
      ],
      price: '₹14,000',
      curriculum: ['Core Services', 'Networking', 'Databases', 'Best Practices'],
      outcomes: ['AWS Certification Ready', 'Practical Labs', 'Portfolio Projects']
    },
    ARTIFICIAL_INTELLIGENCE: {
      id: 'artificial-intelligence',
      name: 'AI & Machine Learning',
      description: 'Deep dive into artificial intelligence and neural networks',
      icon: 'Cpu',
      category: 'AI & ML',
      duration: '16 weeks',
      level: 'Advanced',
      features: [
        'Machine learning algorithms',
        'Deep learning fundamentals',
        'TensorFlow and PyTorch',
        'NLP and computer vision',
        '10+ AI projects'
      ],
      price: '₹25,000',
      curriculum: ['ML Basics', 'Deep Learning', 'NLP', 'Computer Vision'],
      outcomes: ['AI Specialization', 'Research Papers', 'Industry Projects']
    },
    DIGITAL_MARKETING_FUNDAMENTALS: {
      id: 'digital-marketing-fundamentals',
      name: 'Digital Marketing Fundamentals',
      description: 'Complete guide to modern digital marketing strategies',
      icon: 'Megaphone',
      category: 'Digital Marketing',
      duration: '8 weeks',
      level: 'Beginner',
      features: [
        'SEO and SEM strategies',
        'Social media marketing',
        'Email marketing and automation',
        'Analytics and tracking',
        'Campaign planning and execution'
      ],
      price: '₹12,000',
      curriculum: ['Digital Strategy', 'SEO/SEM', 'Social Media', 'Analytics'],
      outcomes: ['Marketing Certification', 'Campaign Portfolio', 'Job Ready']
    }
  },
  BUILD: {
    CUSTOM_SOFTWARE_DEVELOPMENT: {
      id: 'custom-software',
      name: 'Custom Software Development',
      description: 'Tailored solutions for your business needs',
      icon: 'Code',
      category: 'Development',
      deliverables: [
        'Requirements analysis and planning',
        'Architecture design',
        'Full development and testing',
        'Deployment and maintenance',
        'Post-launch support'
      ],
      timeframe: 'Project-based',
      startingPrice: '₹50,000',
      technologies: ['Python', 'Node.js', 'React', 'Angular', 'Cloud Services']
    },
    MOBILE_APP_DEVELOPMENT: {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      icon: 'Smartphone',
      category: 'Mobile Development',
      deliverables: [
        'iOS and Android apps',
        'Cross-platform solutions (React Native)',
        'UI/UX design',
        'Backend integration',
        'App store deployment'
      ],
      timeframe: '3-6 months',
      startingPrice: '₹1,00,000',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    WEB_APPLICATION_DEVELOPMENT: {
      id: 'web-application',
      name: 'Web Application Development',
      description: 'Scalable, high-performance web applications',
      icon: 'Globe',
      category: 'Web Development',
      deliverables: [
        'Front-end development',
        'Back-end APIs',
        'Database design',
        'Performance optimization',
        'Security implementation'
      ],
      timeframe: '2-4 months',
      startingPrice: '₹75,000',
      technologies: ['React', 'Vue', 'Node.js', 'MongoDB', 'PostgreSQL']
    },
    ECOMMERCE_SOLUTIONS: {
      id: 'ecommerce-solutions',
      name: 'E-Commerce Platform Development',
      description: 'Complete e-commerce stores with payment integration',
      icon: 'ShoppingCart',
      category: 'E-Commerce',
      deliverables: [
        'Store setup and customization',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking',
        'SEO optimization'
      ],
      timeframe: '2-3 months',
      startingPrice: '₹60,000',
      technologies: ['Shopify', 'WooCommerce', 'Custom Solutions']
    },
    API_DEVELOPMENT_INTEGRATION: {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'RESTful APIs and third-party integrations',
      icon: 'Zap',
      category: 'Backend Services',
      deliverables: [
        'RESTful API design',
        'API documentation',
        'Third-party integrations',
        'Authentication and security',
        'Performance optimization'
      ],
      timeframe: '4-8 weeks',
      startingPrice: '₹40,000',
      technologies: ['Node.js', 'Python', 'GraphQL', 'REST']
    },
    DEVOPS_INFRASTRUCTURE: {
      id: 'devops-infrastructure',
      name: 'DevOps & Cloud Infrastructure',
      description: 'CI/CD pipelines, containerization, and cloud setup',
      icon: 'Settings',
      category: 'DevOps',
      deliverables: [
        'CI/CD pipeline setup',
        'Docker containerization',
        'Kubernetes orchestration',
        'Cloud infrastructure',
        'Monitoring and logging'
      ],
      timeframe: '4-8 weeks',
      startingPrice: '₹45,000',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure']
    }
  },
  GROW: {
    SEO_SERVICES: {
      id: 'seo-services',
      name: 'Search Engine Optimization',
      description: 'Drive organic traffic and improve search rankings',
      icon: 'Search',
      category: 'SEO',
      services: [
        'Keyword research and strategy',
        'On-page optimization',
        'Technical SEO audit',
        'Backlink building',
        'Monthly performance reports'
      ],
      monthlyPrice: '₹20,000',
      duration: 'Ongoing',
      timeline: '3-6 months for results'
    },
    SOCIAL_MEDIA_MARKETING: {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      description: 'Build and engage your social media presence',
      icon: 'Share2',
      category: 'Social Media',
      services: [
        'Content calendar creation',
        'Post design and copywriting',
        'Community management',
        'Paid advertising (Facebook, Instagram)',
        'Analytics and reporting'
      ],
      monthlyPrice: '₹15,000',
      duration: 'Ongoing',
      platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok']
    },
    CONTENT_MARKETING: {
      id: 'content-marketing',
      name: 'Content Marketing Strategy',
      description: 'Engaging content that drives conversions',
      icon: 'Pen',
      category: 'Content',
      services: [
        'Content strategy and planning',
        'Blog writing and optimization',
        'Video script creation',
        'Email newsletter design',
        'Content distribution'
      ],
      monthlyPrice: '₹18,000',
      duration: 'Ongoing',
      deliverables: ['4 blogs/month', 'Email campaigns', 'Video scripts']
    },
    PPC_ADVERTISING: {
      id: 'ppc-advertising',
      name: 'PPC & Paid Advertising',
      description: 'Immediate traffic and lead generation',
      icon: 'Target',
      category: 'Paid Ads',
      services: [
        'Google Ads management',
        'Facebook/Instagram ads',
        'Keyword bidding strategy',
        'Conversion optimization',
        'Weekly optimization reports'
      ],
      monthlyPrice: '₹25,000',
      duration: 'Variable',
      adBudget: 'Flexible'
    },
    EMAIL_MARKETING: {
      id: 'email-marketing',
      name: 'Email Marketing & Automation',
      description: 'Build relationships and nurture leads via email',
      icon: 'Mail',
      category: 'Email',
      services: [
        'Email list building',
        'Campaign design',
        'Automation workflows',
        'A/B testing',
        'Performance analytics'
      ],
      monthlyPrice: '₹12,000',
      duration: 'Ongoing',
      tools: ['Mailchimp', 'HubSpot', 'ConvertKit']
    },
    BRAND_STRATEGY_POSITIONING: {
      id: 'brand-strategy',
      name: 'Brand Strategy & Positioning',
      description: 'Define and establish your unique brand identity',
      icon: 'Palette',
      category: 'Branding',
      services: [
        'Brand audit and research',
        'Positioning strategy',
        'Brand guidelines development',
        'Logo and visual identity',
        'Brand messaging framework'
      ],
      projectPrice: '₹60,000',
      duration: '6-8 weeks',
      deliverables: ['Brand Guide', 'Logo', 'Messaging', 'Visual Assets']
    }
  },
  SECURE: {
    PENETRATION_TESTING: {
      id: 'penetration-testing',
      name: 'Penetration Testing & Ethical Hacking',
      description: 'Identify security vulnerabilities before attackers do',
      icon: 'AlertCircle',
      category: 'Security Testing',
      scope: [
        'Network penetration testing',
        'Web application testing',
        'Social engineering assessment',
        'Vulnerability assessment',
        'Detailed findings report'
      ],
      pricing: 'Starting ₹40,000',
      duration: '2-4 weeks',
      deliverables: ['Executive Report', 'Technical Details', 'Remediation Guide']
    },
    SECURITY_AUDITS: {
      id: 'security-audits',
      name: 'Security Audits & Compliance',
      description: 'Ensure compliance with security standards',
      icon: 'Lock',
      category: 'Compliance',
      services: [
        'Security policy review',
        'Compliance assessment (ISO, SOC2)',
        'Security infrastructure audit',
        'Risk assessment',
        'Remediation planning'
      ],
      pricing: '₹30,000 - ₹1,00,000',
      standards: ['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI-DSS']
    },
    INCIDENT_RESPONSE: {
      id: 'incident-response',
      name: '24/7 Incident Response',
      description: 'Rapid response to security breaches and incidents',
      icon: 'AlertTriangle',
      category: 'Incident Management',
      services: [
        '24/7 monitoring and alerting',
        'Incident containment',
        'Forensic analysis',
        'Recovery and remediation',
        'Post-incident reporting'
      ],
      monthlyPrice: '₹50,000',
      availability: '24/7/365',
      responseTime: '1 hour'
    },
    SECURITY_TRAINING: {
      id: 'security-training',
      name: 'Security Awareness Training',
      description: 'Educate employees on security best practices',
      icon: 'BookOpen',
      category: 'Training',
      modules: [
        'Phishing awareness',
        'Password management',
        'Data protection',
        'Incident reporting',
        'Compliance guidelines'
      ],
      pricing: '₹5,000 per employee',
      delivery: ['Online', 'In-person', 'Hybrid']
    },
    MANAGED_SECURITY_SERVICES: {
      id: 'managed-security',
      name: 'Managed Security Services (MSS)',
      description: 'End-to-end security management outsourcing',
      icon: 'Shield',
      category: 'Managed Services',
      services: [
        'Firewall management',
        'Intrusion detection',
        'Antivirus and malware protection',
        'Security updates and patching',
        'Monthly reports and reviews'
      ],
      monthlyPrice: '₹75,000',
      duration: 'Ongoing',
      sla: '99.9% Uptime'
    }
  }
};

/**
 * Helper function to get all services from a pillar
 */
export const getServicesByPillar = (pillar) => {
  return SERVICES_CATALOG[pillar.toUpperCase()] || {};
};

/**
 * Helper function to get a specific service
 */
export const getService = (pillar, serviceId) => {
  const pillarServices = SERVICES_CATALOG[pillar.toUpperCase()];
  return Object.values(pillarServices).find(service => service.id === serviceId);
};

/**
 * Get all services across all pillars
 */
export const getAllServices = () => {
  let allServices = [];
  Object.values(SERVICES_CATALOG).forEach(pillarServices => {
    allServices = [...allServices, ...Object.values(pillarServices)];
  });
  return allServices;
};

export default SERVICES_CATALOG;

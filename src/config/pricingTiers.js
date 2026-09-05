/**
 * Pricing Tiers Configuration
 * All service pricing, plans, and discount structures
 * Used by landing pages, pricing pages, and checkout flows
 */

export const PRICING_TIERS = {
  COURSES: {
    INDIVIDUAL_COURSES: {
      name: 'Individual Course',
      description: 'Single course enrollment',
      tier: 'basic',
      pricing: {
        INR: {
          monthly: 0,
          oneTime: 12000,
          symbol: '₹'
        }
      },
      includes: [
        'Full course access',
        'Video lectures',
        'Course materials',
        'Assignments and quizzes',
        'Certificate of completion',
        'Email support'
      ],
      bestFor: 'Individuals learning specific skills'
    },
    COURSE_BUNDLE: {
      name: 'Course Bundle (3 Courses)',
      description: 'Bundle of 3 related courses at discount',
      tier: 'standard',
      pricing: {
        INR: {
          monthly: 0,
          oneTime: 30000,
          regularPrice: 36000,
          discount: '17%'
        }
      },
      includes: [
        'All Individual Course benefits',
        'Priority support',
        'Live Q&A sessions',
        'Portfolio projects',
        'Networking with cohort'
      ],
      bestFor: 'Learners pursuing a specialization'
    },
    LIFETIME_ACADEMY: {
      name: 'SASTRAVA Academy (Lifetime)',
      description: 'Unlimited access to all current and future courses',
      tier: 'premium',
      pricing: {
        INR: {
          monthly: 999,
          annual: 9999,
          oneTime: 49999,
          regularPrice: 59999,
          discount: '17%'
        }
      },
      includes: [
        'All courses (current + future)',
        '1-on-1 mentoring',
        'Live workshops monthly',
        'Job placement assistance',
        'Career guidance',
        'Priority support 24/7',
        'Community access'
      ],
      bestFor: 'Career changers and serious learners'
    }
  },
  DEVELOPMENT: {
    STARTUP_PACKAGE: {
      name: 'Startup Package',
      description: 'Perfect for launching your MVP',
      tier: 'basic',
      projectSize: 'Small (4-6 weeks)',
      pricing: {
        INR: {
          fixed: 50000,
          symbol: '₹'
        }
      },
      includes: [
        'Up to 3 core features',
        'Basic API endpoints',
        'Single database',
        'Responsive design',
        'Basic deployment',
        'Code documentation'
      ],
      notIncluded: [
        'Advanced features',
        'Third-party integrations',
        'Load balancing',
        'Advanced analytics'
      ],
      bestFor: 'Startups with limited budget'
    },
    SCALE_PACKAGE: {
      name: 'Scale Package',
      description: 'Growing business needs',
      tier: 'standard',
      projectSize: 'Medium (8-12 weeks)',
      pricing: {
        INR: {
          fixed: 125000,
          symbol: '₹'
        }
      },
      includes: [
        'Up to 8 features',
        'Complete API suite',
        'Database optimization',
        'Admin dashboard',
        'User authentication',
        'Email integration',
        'Advanced deployment',
        '3 months support'
      ],
      notIncluded: [
        'ML/AI features',
        'Advanced analytics',
        'Legacy system integration'
      ],
      bestFor: 'Growing businesses'
    },
    ENTERPRISE_PACKAGE: {
      name: 'Enterprise Package',
      description: 'Full-scale custom solutions',
      tier: 'premium',
      projectSize: 'Large (16+ weeks)',
      pricing: {
        INR: {
          custom: 'Contact us',
          symbol: '₹'
        }
      },
      includes: [
        'Unlimited features',
        'Advanced integrations',
        'Microservices architecture',
        'Load balancing',
        'Advanced security',
        'AI/ML capabilities',
        'Analytics dashboard',
        'Ongoing support',
        'Dedicated team'
      ],
      bestFor: 'Enterprise and large-scale projects'
    }
  },
  DIGITAL_MARKETING: {
    STARTER_PLAN: {
      name: 'Starter Plan',
      description: 'Get started with digital marketing',
      tier: 'basic',
      pricing: {
        INR: {
          monthly: 15000,
          symbol: '₹'
        }
      },
      includes: [
        'SEO optimization',
        'Social media management (1 platform)',
        'Basic analytics',
        'Email newsletter setup',
        '2 blog posts/month',
        'Weekly reporting'
      ],
      notIncluded: [
        'PPC campaigns',
        'Content creation',
        'Video marketing',
        'Advanced analytics'
      ],
      billingCycle: 'Monthly',
      commitment: 'Minimum 3 months',
      bestFor: 'Small businesses just starting'
    },
    GROWTH_PLAN: {
      name: 'Growth Plan',
      description: 'Accelerate your business growth',
      tier: 'standard',
      pricing: {
        INR: {
          monthly: 40000,
          symbol: '₹'
        }
      },
      includes: [
        'SEO and SEM',
        'Social media management (all platforms)',
        'PPC campaign management',
        'Content creation (4 blogs, 8 socials)',
        'Video marketing basics',
        'Email marketing automation',
        'Analytics dashboard',
        'Bi-weekly calls'
      ],
      notIncluded: [
        'Influencer marketing',
        'Brand strategy',
        'Design services'
      ],
      billingCycle: 'Monthly',
      commitment: 'Minimum 6 months',
      bestFor: 'Growing businesses',
      savings: '15% for annual commitment'
    },
    SCALE_PLAN: {
      name: 'Scale Plan',
      description: 'Enterprise marketing solutions',
      tier: 'premium',
      pricing: {
        INR: {
          monthly: 100000,
          symbol: '₹'
        }
      },
      includes: [
        'All Growth Plan services',
        'Influencer marketing',
        'Brand strategy & positioning',
        'Custom content calendar',
        'Video production',
        'Conversion optimization',
        'Advanced CRM integration',
        'Weekly strategy calls',
        'Dedicated account manager'
      ],
      billingCycle: 'Monthly',
      commitment: 'Project-based or retainer',
      bestFor: 'Enterprises and agencies',
      savings: '20% for 6-month commitment'
    }
  },
  CYBERSECURITY: {
    BASIC_PROTECTION: {
      name: 'Basic Protection',
      description: 'Essential security for SMBs',
      tier: 'basic',
      pricing: {
        INR: {
          monthly: 25000,
          symbol: '₹'
        }
      },
      includes: [
        'Monthly security audit',
        'Vulnerability scanning',
        'Antivirus and malware protection',
        'Monthly reports',
        'Email support'
      ],
      sla: '24 hour response',
      bestFor: 'Small businesses'
    },
    ADVANCED_SECURITY: {
      name: 'Advanced Security',
      description: 'Comprehensive security management',
      tier: 'standard',
      pricing: {
        INR: {
          monthly: 75000,
          symbol: '₹'
        }
      },
      includes: [
        'All Basic Protection features',
        'Quarterly penetration testing',
        'Firewall management',
        'Intrusion detection',
        ' 24/7 monitoring',
        'Incident response',
        'Weekly reports',
        'Phone support'
      ],
      sla: '2 hour response',
      bestFor: 'Medium businesses'
    },
    ENTERPRISE_SHIELD: {
      name: 'Enterprise Shield',
      description: 'Maximum security and compliance',
      tier: 'premium',
      pricing: {
        INR: {
          monthly: 200000,
          symbol: '₹'
        }
      },
      includes: [
        'All Advanced Security features',
        'Monthly penetration testing',
        'Compliance management (SOC2, ISO27001)',
        'Advanced threat intelligence',
        '24/7/365 security operations center',
        'Dedicated security team',
        'Custom policies',
        'Executive reports',
        'Dedicated phone support'
      ],
      sla: '15 minute response',
      uptime: '99.99%',
      bestFor: 'Enterprise and regulated industries'
    }
  },
  DISCOUNTS: {
    BULK_COURSE_DISCOUNT: {
      name: 'Team Training Discount',
      description: 'When buying courses for teams',
      quantity_thresholds: [
        { count: 5, discount: 10 },
        { count: 10, discount: 15 },
        { count: 20, discount: 20 },
        { count: 50, discount: 25 }
      ]
    },
    ANNUAL_COMMITMENT: {
      name: 'Annual Commitment Discount',
      description: 'Services paid annually',
      discount: 15
    },
    REFERRAL_DISCOUNT: {
      name: 'Referral Program',
      description: 'Refer someone and get discount',
      discount: 10,
      referrerBonus: 15
    },
    LOYALTY_DISCOUNT: {
      name: 'Loyalty Discount',
      description: 'For returning customers',
      discount: 12
    },
    NONPROFIT_DISCOUNT: {
      name: 'Non-Profit Discount',
      description: 'For registered non-profits',
      discount: 40
    },
    STARTUP_DISCOUNT: {
      name: 'Startup Program',
      description: 'For registered startups',
      discount: 30,
      duration: '12 months'
    }
  }
};

/**
 * Helper functions for pricing
 */
export const getPricingTier = (category, tierName) => {
  const categoryPricing = PRICING_TIERS[category.toUpperCase()];
  return categoryPricing ? categoryPricing[tierName.toUpperCase()] : null;
};

export const getAllPricingTiers = () => {
  const tiers = [];
  Object.values(PRICING_TIERS).forEach(category => {
    if (typeof category === 'object') {
      Object.values(category).forEach(tier => {
        if (tier.name && tier.pricing) {
          tiers.push(tier);
        }
      });
    }
  });
  return tiers;
};

export const calculateDiscount = (originalPrice, discountType) => {
  const discount = PRICING_TIERS.DISCOUNTS[discountType.toUpperCase()];
  if (discount && discount.discount) {
    return originalPrice * (1 - discount.discount / 100);
  }
  return originalPrice;
};

export const getMonthlyPrice = (tier) => {
  return tier.pricing?.INR?.monthly || 0;
};

export const getAnnualPrice = (tier) => {
  return tier.pricing?.INR?.annual || (tier.pricing?.INR?.monthly * 12) || 0;
};

export default PRICING_TIERS;

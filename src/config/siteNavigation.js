export const serviceNavigation = [
  { name: 'Business consulting & incubation', href: '/grow' },
  { name: 'AI & automation', href: '/ai' },
  { name: 'Generative AI', href: '/ai/genai' },
  { name: 'Software & digital products', href: '/build' },
  { name: 'Cybersecurity', href: '/cybersecurity' },
  { name: 'Security audits & testing', href: '/cybersecurity/security-audits' },
  { name: 'Penetration testing', href: '/cybersecurity/penetration-testing' },
  { name: 'Cybersecurity services', href: '/secure' },
  { name: 'Brand & performance marketing', href: '/digital-marketing' },
  { name: 'SEO, AEO & GEO', href: '/digital-marketing/seo' },
  { name: 'Digital learning', href: '/learn' },
];

export const primaryNavigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', children: serviceNavigation },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Insights', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const footerSections = [
  {
    title: 'Services',
    links: [
      ...serviceNavigation,
      { name: 'All services', href: '/services' },
      { name: 'Industries & domains', href: '/domains' },
    ],
  },
  {
    title: 'Work & resources',
    links: [
      { name: 'Portfolio & team', href: '/portfolio' },
      { name: 'Case studies', href: '/case-studies' },
      { name: 'Learning stories', href: '/success-stories' },
      { name: 'Insights & guides', href: '/blog' },
      { name: 'Research', href: '/research' },
      { name: 'Publications', href: '/publications' },
      { name: 'Open source', href: '/open-source' },
      { name: 'Achievements', href: '/achievements' },
      { name: 'Frequently asked questions', href: '/faq' },
      { name: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Free planning tools',
    links: [
      { name: 'SEO, AEO & GEO readiness checker', href: '/tools/seo-aeo-checker' },
      { name: 'Automation ROI calculator', href: '/tools/ai-roi-calculator' },
      { name: 'Website security checklist', href: '/tools/security-checklist' },
      { name: 'Careers & collaboration', href: '/careers' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About SASTRAVA', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy policy', href: '/privacy' },
      { name: 'Terms of use', href: '/terms' },
      { name: 'Report a security concern', href: '/security' },
    ],
  },
];

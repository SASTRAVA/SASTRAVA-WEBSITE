const organizationName = 'SASTRAVA';
const defaultDescription = 'SASTRAVA is a business consultant, innovator, and incubator helping organizations with business strategy, startup growth, AI and digital products, cybersecurity, and digital marketing in India.';

export const seoRoutes = {
  '/': {
    title: 'Business Consultant | SASTRAVA',
    description: defaultDescription,
    keywords: ['business consultant India', 'business consulting services', 'business innovator', 'startup incubator India', 'AI solutions for business', 'cybersecurity services India', 'digital marketing services India'],
  },
  '/about': { title: 'About SASTRAVA | Technology, Learning & Growth', description: 'Learn about SASTRAVA, our work across technology, learning, cybersecurity, and business growth, and how to start a conversation.' },
  '/domains': { title: 'Industries & Technology Domains | SASTRAVA', description: 'Explore the technology domains and business challenges SASTRAVA supports through learning, digital product development, AI, and security.' },
  '/services': { title: 'Technology & Business Services | SASTRAVA', description: 'Explore SASTRAVA services in AI, cybersecurity, digital marketing, software development, technology learning, and business growth.' },
  '/services-hub': { title: 'Explore SASTRAVA Services | AI, Build, Grow & Secure', description: 'Find SASTRAVA services for learning new technology, building digital products, growing a business, or improving security.' },
  '/services-hub/learn': { title: 'Technology Learning & Training Services | SASTRAVA', description: 'Explore SASTRAVA practical technology courses, skills training, and learning support across software, AI, data, and cybersecurity.' },
  '/services-hub/build': { title: 'Software & Digital Product Services | SASTRAVA', description: 'Explore SASTRAVA software development and digital product services for turning product goals into useful technology.' },
  '/services-hub/grow': { title: 'Business Consulting, Innovation & Incubation | SASTRAVA', description: 'Explore SASTRAVA business consulting, innovation, growth strategy, go-to-market, and startup incubation support for founders and organizations.' },
  '/services-hub/secure': { title: 'Cybersecurity & Security Services | SASTRAVA', description: 'Explore SASTRAVA cybersecurity services, including security guidance, vulnerability testing, and audit support.' },
  '/learn': { title: 'Technology Courses & Practical Training | SASTRAVA', description: 'Explore practical technology learning and training in software development, AI, data, and cybersecurity with SASTRAVA.' },
  '/build': { title: 'Software & Digital Product Development | SASTRAVA', description: 'Explore software and digital product development support from SASTRAVA, from shaping a product idea to building useful technology.' },
  '/grow': { title: 'Business Consulting, Innovation & Incubation | SASTRAVA', description: 'Explore business consulting, innovation, growth strategy, go-to-market, and startup incubation support from SASTRAVA for founders and organizations.' },
  '/secure': { title: 'Cybersecurity & Application Security | SASTRAVA', description: 'Explore cybersecurity guidance, security testing, and audit support for applications and organizations.' },
  '/courses': { title: 'Technology Courses & Learning Programs | SASTRAVA', description: 'Browse SASTRAVA courses and practical learning programs across software, AI, data, and cybersecurity.' },
  '/portfolio': { title: 'Projects & Team Portfolio | SASTRAVA', description: 'Explore selected projects and team portfolios that show SASTRAVA capabilities across technology and learning.' },
  '/blog': { title: 'Technology & Business Insights | SASTRAVA', description: 'Read SASTRAVA insights on AI, cybersecurity, software development, digital marketing, and technology learning.' },
  '/careers': { title: 'Careers & Opportunities | SASTRAVA', description: 'Explore career and collaboration opportunities with SASTRAVA across technology, learning, and business.' },
  '/contact': { title: 'Contact SASTRAVA | Vijayawada, Andhra Pradesh, India', description: 'Contact SASTRAVA in Vijayawada, Andhra Pradesh, to discuss AI, cybersecurity, software, digital marketing, learning, or business growth.' },
  '/privacy': { title: 'Privacy Policy | SASTRAVA', description: 'Read how SASTRAVA handles personal information and privacy on this website.' },
  '/terms': { title: 'Terms of Use | SASTRAVA', description: 'Read the terms that apply when using the SASTRAVA website and its services.' },
  '/security': { title: 'Report a Security Concern | SASTRAVA', description: 'Find how to contact SASTRAVA about a security concern involving this website.' },
  '/faq': { title: 'Frequently Asked Questions | SASTRAVA', description: 'Find answers to common questions about SASTRAVA services, learning programs, and contacting the team.' },
  '/support': { title: 'SASTRAVA Support | Services & Learning', description: 'Get support for SASTRAVA services, learning programs, or an existing inquiry.' },
  '/success-stories': { title: 'Success Stories | SASTRAVA', description: 'Explore published SASTRAVA stories about technology projects, learning, and business outcomes.' },
  '/case-studies': { title: 'Technology Case Studies | SASTRAVA', description: 'Explore SASTRAVA case studies describing project context, approach, and outcomes.' },
  '/research': { title: 'Technology Research | SASTRAVA', description: 'Explore research topics and work shared by SASTRAVA across emerging technology and learning.' },
  '/publications': { title: 'Research & Technology Publications | SASTRAVA', description: 'Browse research and technology publications shared by SASTRAVA.' },
  '/open-source': { title: 'Open-Source Projects | SASTRAVA', description: 'Explore open-source projects and tools shared by SASTRAVA.' },
  '/achievements': { title: 'Milestones & Achievements | SASTRAVA', description: 'Explore verified milestones and achievements shared by SASTRAVA.' },
  '/cybersecurity': {
    title: 'Cybersecurity Services in India | SASTRAVA',
    description: 'Explore SASTRAVA cybersecurity services, including application penetration testing, vulnerability assessment, and security audits.',
    keywords: ['cybersecurity services India', 'VAPT services India', 'application security testing', 'security audit services'],
    serviceType: 'Cybersecurity services',
    faqs: [
      ['What cybersecurity services does SASTRAVA offer?', 'SASTRAVA provides cybersecurity guidance, vulnerability assessment and penetration testing, and security audit support. Scope is agreed for each engagement.'],
      ['What is VAPT?', 'Vulnerability assessment and penetration testing combines finding security weaknesses with controlled testing to help confirm and prioritize risk.'],
      ['How do I request a security assessment?', 'Contact SASTRAVA with the systems you want assessed, your goals, and any timing or compliance requirements. Testing scope and written authorization should be agreed before work begins.'],
    ],
  },
  '/cybersecurity/penetration-testing': {
    title: 'VAPT & Penetration Testing Services in India | SASTRAVA',
    description: 'Learn about vulnerability assessment and penetration testing for web applications, APIs, and infrastructure with SASTRAVA.',
    keywords: ['VAPT services India', 'penetration testing services', 'web application penetration testing', 'API security testing'],
    serviceType: 'Vulnerability assessment and penetration testing',
    faqs: [
      ['What does a penetration test assess?', 'A penetration test assesses agreed systems for exploitable weaknesses using controlled testing, then reports findings and practical remediation guidance.'],
      ['What is the difference between vulnerability scanning and penetration testing?', 'A vulnerability scan identifies potential weaknesses. Penetration testing adds manual validation to assess whether selected weaknesses can be exploited within the agreed scope.'],
      ['Do you need written authorization before testing?', 'Yes. Security testing should only begin after the system owner has approved the targets, methods, schedule, and rules of engagement in writing.'],
    ],
  },
  '/cybersecurity/security-audits': {
    title: 'Cybersecurity Audit Services | SASTRAVA',
    description: 'Explore cybersecurity audit support to review security controls, identify gaps, and prioritize remediation for your organization.',
    keywords: ['cybersecurity audit services', 'information security audit', 'security controls assessment', 'security audit India'],
    serviceType: 'Cybersecurity audit services',
    faqs: [
      ['What does a cybersecurity audit review?', 'A cybersecurity audit reviews agreed policies, controls, systems, and evidence against the objectives and framework defined in the audit scope.'],
      ['What do I receive after an audit?', 'Deliverables depend on the agreed scope and can include documented findings, risk priorities, evidence gaps, and a remediation plan.'],
      ['Can an audit guarantee compliance?', 'No audit can guarantee compliance by itself. Compliance depends on the applicable requirements, evidence, implementation, and the organization’s ongoing practices.'],
    ],
  },
  '/ai': {
    title: 'AI Development & Consulting Services in India | SASTRAVA',
    description: 'Explore AI development and consulting for business workflows, machine learning, data products, and generative AI with SASTRAVA.',
    keywords: ['AI development services India', 'AI consulting for businesses', 'machine learning solutions', 'business process AI automation'],
    serviceType: 'Artificial intelligence development and consulting',
    faqs: [
      ['What can AI help a business do?', 'AI can support tasks such as classification, forecasting, search, recommendations, and workflow assistance when the data, risks, and business case are suitable.'],
      ['How should a business start an AI project?', 'Start by defining the user problem, available data, success measure, privacy and security needs, and a small test that can validate feasibility.'],
      ['Does every AI use case need a large language model?', 'No. The right approach depends on the problem. Rules, traditional machine learning, search, or generative AI may each be suitable in different cases.'],
    ],
  },
  '/ai/genai': {
    title: 'Generative AI Development & RAG Solutions | SASTRAVA',
    description: 'Explore generative AI development, LLM integrations, retrieval-augmented generation (RAG), and AI assistants with SASTRAVA.',
    keywords: ['generative AI development India', 'RAG development services', 'LLM integration services', 'AI chatbot development'],
    serviceType: 'Generative AI and large language model solutions',
    faqs: [
      ['What is retrieval-augmented generation (RAG)?', 'RAG connects a language model to selected reference material so its responses can use relevant information retrieved for a question.'],
      ['When should a business use a custom AI assistant?', 'An assistant may help when users need a conversational way to find information or complete a bounded workflow, with access controls and evaluation suited to the data involved.'],
      ['Does generative AI always return correct answers?', 'No. Generative AI can produce inaccurate responses. Testing, clear source material, suitable guardrails, human review, and monitoring are important for production use.'],
    ],
  },
  '/digital-marketing': {
    title: 'Digital Marketing Consultant & Services in India | SASTRAVA',
    description: 'Explore organic digital marketing, SEO, content and social media alongside paid search, Google Ads, paid social, and campaign measurement with SASTRAVA.',
    keywords: ['digital marketing consultant India', 'digital marketing services India', 'organic digital marketing', 'SEO and content marketing', 'AEO and GEO', 'Google Ads management', 'PPC and paid search', 'paid social campaigns', 'remarketing', 'performance marketing', 'social media marketing services'],
    serviceType: 'Digital marketing services',
    faqs: [
      ['What does a digital marketing plan include?', 'A plan can combine search optimization, useful content, social media, paid campaigns, and conversion measurement based on the audience and business goal.'],
      ['Which digital marketing channel should a business start with?', 'Choose channels based on how customers discover and evaluate the offer, available budget and skills, and the time horizon for results.'],
      ['How should digital marketing performance be measured?', 'Measure outcomes tied to the goal, such as qualified inquiries or sales, alongside channel metrics that help explain how those outcomes were reached.'],
    ],
  },
  '/digital-marketing/seo': {
    title: 'SEO Services in India | Technical, Content & Local SEO | SASTRAVA',
    description: 'Explore technical SEO, keyword research, on-page optimization, content strategy, and local search support from SASTRAVA.',
    keywords: ['SEO services India', 'technical SEO services', 'keyword research and content strategy', 'local SEO Vijayawada'],
    serviceType: 'Search engine optimization services',
    faqs: [
      ['How long before we see SEO results?', 'Typically 3-6 months to see meaningful improvements. Competitive keywords may take 6-12 months. We focus on sustainable growth.'],
      ['Do you guarantee rankings?', 'No legitimate SEO company guarantees rankings. We guarantee effort, transparency, and best practices. Results depend on market competition.'],
      ['What is your SEO approach?', 'We follow Google guidelines using white-hat techniques: quality content, technical optimization, authority building, and user experience.'],
      ['Can you improve existing rankings?', 'Yes, we analyze current rankings, identify gaps, and develop strategies to improve positions for underperforming keywords.'],
      ['What is the difference between SEO, AEO, and GEO?', 'SEO helps people discover useful pages in search. Answer engine optimization (AEO) makes clear answers easy to find and understand. Generative engine optimization (GEO) helps generative search systems interpret trustworthy, useful information. None can guarantee inclusion or a particular ranking.'],
    ],
  },
  '/login': { title: 'Login | SASTRAVA', description: 'Sign in to your SASTRAVA account.', noindex: true },
  '/student-dashboard': { title: 'Student Dashboard | SASTRAVA', description: 'Access your SASTRAVA learning dashboard.', noindex: true },
};

export const normalizeSeoPath = (pathname) => {
  if (pathname.startsWith('/services-hub/') && !seoRoutes[pathname]) return '/services-hub';
  if (pathname.startsWith('/login/')) return '/login';
  return pathname;
};

export const getSeoEntry = (pathname) => seoRoutes[normalizeSeoPath(pathname)] ?? {
  title: 'Page not found | SASTRAVA',
  description: 'The page you requested could not be found.',
  noindex: true,
};

export const buildStructuredData = (pathname) => {
  const path = normalizeSeoPath(pathname);
  const entry = getSeoEntry(path);
  const canonical = `https://sastrava.com${path === '/' ? '/' : path}`;
  const organization = {
    '@type': 'Organization',
    '@id': 'https://sastrava.com/#organization',
    name: organizationName,
    url: 'https://sastrava.com/',
    logo: 'https://sastrava.com/logo.png',
    description: defaultDescription,
    email: 'siri@sastrava.com',
    telephone: '+91 7981 576083',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vijayawada',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    sameAs: [
      'https://www.linkedin.com/in/sastrava-aa3097429/',
      'https://x.com/SASTRAVA_',
      'https://www.instagram.com/sastrava_/',
    ],
  };
  const graph = [
    organization,
    { '@type': 'WebSite', '@id': 'https://sastrava.com/#website', url: 'https://sastrava.com/', name: organizationName, publisher: { '@id': organization['@id'] }, inLanguage: 'en-IN' },
    { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: entry.title, description: entry.description, isPartOf: { '@id': 'https://sastrava.com/#website' }, inLanguage: 'en-IN' },
  ];
  if (entry.serviceType) {
    graph.push({ '@type': 'Service', '@id': `${canonical}#service`, name: entry.serviceType, serviceType: entry.serviceType, description: entry.description, url: canonical, provider: { '@id': organization['@id'] }, areaServed: { '@type': 'Country', name: 'India' } });
  }
  if (entry.faqs) {
    graph.push({ '@type': 'FAQPage', '@id': `${canonical}#faq`, url: canonical, mainEntity: entry.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
};

export { defaultDescription };

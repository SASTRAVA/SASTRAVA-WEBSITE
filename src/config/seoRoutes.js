const organizationName = 'SASTRAVA';
const defaultDescription = 'Tadepalli business consultant, innovator and incubator for digital marketing, software, AI automation, security audits and digital learning.';

export const seoRoutes = {
  '/': {
    title: 'Business Consultant | SASTRAVA — Digital Growth & AI',
    ogTitle: 'SASTRAVA | Strategy, technology and digital growth',
    description: defaultDescription,
    keywords: ['business consultant Tadepalli', 'business consulting India', 'business innovator', 'startup incubator India', 'AI and business automation', 'software development India', 'cybersecurity audit and testing', 'SEO and digital marketing'],
  },
  '/about': { title: 'About SASTRAVA | Business Consulting & Innovation', description: 'Learn how SASTRAVA supports founders, businesses, and institutions through consulting, incubation, technology, security, digital growth, and practical learning.' },
  '/domains': { title: 'Industries & Technology Domains | SASTRAVA', description: 'Explore the technology domains and business challenges SASTRAVA supports through learning, digital product development, AI, and security.' },
  '/services': { title: 'Business, Technology & Growth Services | SASTRAVA', description: 'Explore SASTRAVA business consulting and incubation, software, AI and automation, security reviews, digital marketing, content, and technical learning services.' },
  '/services-hub': { title: 'Explore SASTRAVA Services | AI, Build, Grow & Secure', description: 'Find SASTRAVA services for learning new technology, building digital products, growing a business, or improving security.' },
  '/services-hub/learn': { title: 'Technology Learning & Training Services | SASTRAVA', description: 'Explore SASTRAVA practical technology courses, skills training, and learning support across software, AI, data, and cybersecurity.' },
  '/services-hub/build': { title: 'Software & Digital Product Services | SASTRAVA', description: 'Explore SASTRAVA software development and digital product services for turning product goals into useful technology.' },
  '/services-hub/grow': { title: 'Business Consulting, Innovation & Incubation | SASTRAVA', description: 'Explore SASTRAVA business consulting, innovation, growth strategy, go-to-market, and startup incubation support for founders and organizations.' },
  '/services-hub/secure': { title: 'Cybersecurity & Security Services | SASTRAVA', description: 'Explore SASTRAVA cybersecurity services, including security guidance, vulnerability testing, and audit support.' },
  '/learn': {
    title: 'Digital Learning & Technology Training | SASTRAVA',
    description: 'Build practical software, AI, data, and cybersecurity skills with SASTRAVA workshops, mentoring, and project-based digital learning.',
    serviceType: 'Digital learning and technology training',
    sections: [
      { heading: 'Learning built around practical work', paragraph: 'SASTRAVA supports learners and teams who want to understand technology by applying it to useful tasks and projects.', items: ['Software development and digital product foundations', 'Artificial intelligence, data, and automation concepts', 'Cybersecurity awareness and secure development practices'] },
      { heading: 'Flexible formats for learners and teams', paragraph: 'Learning can be shaped around the audience, available time, and goals agreed before a program begins.', items: ['Interactive workshops and guided practice', 'Project mentoring and structured learning plans', 'Team sessions aligned to an agreed technology need'] },
    ],
    process: ['Set the audience, outcomes, and starting level.', 'Choose topics, format, and practical exercises.', 'Review progress and recommend useful next steps.'],
    faqs: [
      ['What topics can a learning program cover?', 'Programs can cover software, AI, data, automation, cybersecurity, and related digital skills based on the learner’s goals and the agreed scope.'],
      ['Are courses currently available for direct enrollment?', 'The public course catalog is being updated. Contact SASTRAVA to ask about workshops, mentoring, or a team learning program.'],
    ],
  },
  '/build': {
    title: 'Software & Digital Product Development | SASTRAVA',
    description: 'Shape and build websites, software, and digital products with SASTRAVA, from discovery and prototypes to integrations and ongoing improvement.',
    serviceType: 'Software and digital product development',
    sections: [
      { heading: 'Build around a real user need', paragraph: 'Start with the problem, users, constraints, and success measures so the product scope stays focused and understandable.', items: ['Websites, web applications, and digital tools', 'Prototypes and product discovery', 'API integrations and workflow improvements'] },
      { heading: 'A clear delivery scope', paragraph: 'The project plan, responsibilities, and deliverables are agreed before implementation begins.', items: ['Requirements and technical approach', 'Incremental build and review', 'Launch support and a prioritized next-step plan'] },
    ],
    process: ['Understand users, goals, and constraints.', 'Agree a prioritized scope and delivery plan.', 'Build, review, launch, and plan improvements.'],
    faqs: [
      ['What can SASTRAVA build?', 'Depending on the project scope, SASTRAVA can help with websites, web applications, prototypes, digital products, and integrations.'],
      ['How does a software engagement begin?', 'It begins with a discussion of the users, problem, constraints, existing systems, and the outcome the project should support.'],
    ],
  },
  '/grow': {
    title: 'Business Consultant, Innovation & Incubation | SASTRAVA',
    description: 'Business consulting and startup incubation support in Tadepalli: clarify priorities, strengthen your business model, and plan practical growth.',
    serviceType: 'Business consulting and startup incubation support',
    sections: [
      { heading: 'Turn an open-ended challenge into a plan', paragraph: 'Work with SASTRAVA to understand the current position, identify constraints, and decide which opportunities deserve attention first.', items: ['Business model and positioning reviews', 'Growth, go-to-market, and operating priorities', 'Startup orientation, mentoring, and incubation support'] },
      { heading: 'Advice grounded in your context', paragraph: 'Recommendations should fit the organization, customers, resources, and evidence available. Deliverables and measures are agreed for each engagement.', items: ['Discovery and stakeholder conversations', 'A prioritized roadmap with clear assumptions', 'Review points to learn and adjust the plan'] },
    ],
    process: ['Describe the decision or business challenge.', 'Agree the scope, evidence, and working priorities.', 'Review recommendations and decide the next actions.'],
    faqs: [
      ['Who can use SASTRAVA consulting?', 'Founders, small businesses, and institutions can discuss a defined business, innovation, or growth challenge.'],
      ['Does incubation support guarantee funding or growth?', 'No. Incubation and consulting support can help with planning and execution, but funding, customer demand, and business outcomes are not guaranteed.'],
    ],
  },
  '/secure': {
    title: 'Cybersecurity, Security Audits & Testing | SASTRAVA',
    description: 'Plan authorized security audits, application testing, vulnerability reviews, and remediation support with SASTRAVA in Tadepalli and across India.',
    serviceType: 'Cybersecurity assessment and remediation support',
    sections: [
      { heading: 'Find and prioritize security gaps', paragraph: 'Security work starts with written authorization, agreed assets, testing boundaries, and a clear point of contact.', items: ['Application and configuration security reviews', 'Vulnerability assessment and scoped penetration testing', 'Risk-ranked findings and remediation guidance'] },
      { heading: 'Support practical remediation', paragraph: 'Testing can identify issues; fixes are applied only within an explicitly agreed remediation scope.', items: ['Patch planning and secure configuration guidance', 'Retesting of agreed findings', 'A concise report for technical and business stakeholders'] },
    ],
    process: ['Confirm authorization, scope, and testing safeguards.', 'Assess the agreed systems and document findings.', 'Prioritize fixes and retest agreed remediations.'],
    faqs: [
      ['Do you test systems without written permission?', 'No. Security testing requires clear authorization and an agreed scope before any assessment begins.'],
      ['Can a security audit guarantee that a system is secure?', 'No audit can prove that a system is completely secure. Findings reflect the scope and evidence available during the assessment.'],
    ],
  },
  '/digital-marketing': {
    title: 'Digital Marketing Consultant | Brand & Performance | SASTRAVA',
    description: 'Build your brand and demand with SASTRAVA: performance marketing, SEO, AEO, GEO, paid campaigns, content, and conversion measurement.',
    keywords: ['digital marketing consultant India', 'brand marketing strategy', 'performance marketing', 'SEO AEO GEO', 'paid media management', 'conversion optimization'],
    serviceType: 'Brand and performance digital marketing services',
    sections: [
      { heading: 'Brand and performance work together', paragraph: 'Clear positioning helps people understand why your offer matters; well-measured campaigns help you learn which messages and channels lead to useful actions.', items: ['Brand positioning, message, and campaign planning', 'Paid search, paid social, and performance campaign support', 'SEO, answer-focused content, and local search improvements'] },
      { heading: 'Measure useful outcomes', paragraph: 'Agree the audience, budget, conversion definition, and reporting before campaigns begin. Search rankings, reach, and commercial results cannot be guaranteed.', items: ['Keyword and intent research', 'Landing page and conversion journey review', 'Campaign reporting and prioritized experiments'] },
    ],
    process: ['Define the audience, offer, and business goal.', 'Select channels, measurement, and a focused test plan.', 'Review quality and results before scaling investment.'],
    faqs: [
      ['What is the difference between brand and performance marketing?', 'Brand work builds recognition and preference over time; performance work tracks defined actions. Strong plans often use both.'],
      ['Can SASTRAVA guarantee search rankings or campaign results?', 'No. Results depend on competition, offer, budget, audience, and execution. Work is planned and reported against agreed measures.'],
      ['How are SEO, AEO, and GEO related?', 'SEO improves discoverability in search, AEO structures useful answers clearly, and GEO helps generative search systems interpret trustworthy information. None guarantees placement.'],
    ],
  },
  '/cybersecurity': {
    title: 'Cybersecurity Audit & Testing Services | SASTRAVA',
    description: 'SASTRAVA provides scoped cybersecurity reviews, vulnerability testing, security audits, remediation planning, and retesting support.',
    serviceType: 'Cybersecurity audit and testing services',
    sections: [
      { heading: 'A scoped, authorized assessment', paragraph: 'Agree what is in scope, what is excluded, and how sensitive findings will be handled before any testing starts.', items: ['Application and infrastructure review', 'Vulnerability assessment and penetration testing', 'Control and configuration review against agreed criteria'] },
      { heading: 'From findings to fixes', paragraph: 'A useful audit explains impact and next steps so teams can prioritize work without overstating what a test proves.', items: ['Risk-ranked findings with supporting evidence', 'Patch and remediation guidance', 'Retesting and closure notes for agreed findings'] },
    ],
    process: ['Agree authorization, assets, and assessment boundaries.', 'Perform the agreed review and validate findings.', 'Present priorities, remediation options, and retest scope.'],
    faqs: [
      ['What does a security audit review?', 'A security audit reviews agreed systems, controls, and evidence against the goals and criteria defined in its scope.'],
      ['Does an audit guarantee security or compliance?', 'No. An assessment reflects its scope and evidence at a point in time and cannot guarantee complete security or compliance.'],
    ],
  },
  '/ai': {
    title: 'AI & Business Automation Consulting | SASTRAVA',
    description: 'Identify practical AI and automation opportunities, validate a focused use case, and plan secure workflows with SASTRAVA.',
    serviceType: 'AI development and business automation consulting',
    sections: [
      { heading: 'Start with the workflow', paragraph: 'Identify repetitive work, decision points, data requirements, and failure costs before selecting an AI or automation approach.', items: ['Workflow discovery and automation opportunity mapping', 'AI assistants and business process integrations', 'Prototype planning and evaluation criteria'] },
      { heading: 'Design for responsible use', paragraph: 'Privacy, security, human review, and fallback behavior are considered as part of the use case and delivery scope.', items: ['Data and risk review for the selected use case', 'A bounded pilot with measurable acceptance criteria', 'Operational handover and improvement recommendations'] },
    ],
    process: ['Map the user problem, process, and data.', 'Validate feasibility and define a bounded pilot.', 'Evaluate the result and agree whether to expand.'],
    faqs: [
      ['How should a business start an AI project?', 'Define the user problem, data access, privacy and security needs, and a measurable pilot before selecting a model or tool.'],
      ['Does every automation need generative AI?', 'No. Rules, integrations, standard software, or machine learning may be more suitable depending on the task.'],
    ],
  },
  '/courses': { title: 'Courses Temporarily Unavailable | SASTRAVA', description: 'SASTRAVA is updating its course catalog. Explore learning and training services or contact the team.', noindex: true },
  '/portfolio': { title: 'SASTRAVA Capabilities & Team Portfolio', description: 'Explore SASTRAVA capabilities across consulting, incubation, software, automation, security, digital marketing, and technical learning, plus team portfolios.' },
  '/blog': { title: 'Technology & Business Insights | SASTRAVA', description: 'Read SASTRAVA insights on AI, cybersecurity, software development, digital marketing, and technology learning.' },
  '/careers': { title: 'Careers & Opportunities | SASTRAVA', description: 'Explore career and collaboration opportunities with SASTRAVA across technology, learning, and business.' },
  '/contact': { title: 'Contact SASTRAVA | Business Consulting & Technology', description: 'Contact SASTRAVA in Tadepalli, Andhra Pradesh, to discuss consulting, incubation, software, automation, security, digital marketing, or technical learning.' },
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
  '/digital-marketing/seo': {
    title: 'SEO Services in India | Technical & Local SEO | SASTRAVA',
    description: 'Explore technical SEO, keyword research, on-page optimization, content strategy, and local search support from SASTRAVA.',
    keywords: ['SEO services India', 'technical SEO services', 'keyword research and content strategy', 'local SEO Tadepalli'],
    serviceType: 'Search engine optimization services',
    faqs: [
      ['How long before we see SEO results?', 'Timing varies with the site’s current condition, competition, content, budget, and implementation pace. We agree measures and review progress over time; no fixed timeline can be promised.'],
      ['Do you guarantee rankings?', 'No. Search rankings and business results depend on competition, the offer, budget, audience, and execution. We agree a plan, report progress, and refine work using available evidence.'],
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
    email: 'neeraj@sastrava.com',
    telephone: '+91 7981 576083',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tadepalli',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: [
      'Business consulting',
      'Innovation strategy',
      'Startup incubation',
      'Artificial intelligence',
      'Business process automation',
      'Software and digital product development',
      'Cybersecurity assessment and security audits',
      'Search engine optimization',
      'Digital marketing',
      'Digital learning and technology training',
      'Content and media production',
    ],
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
  if (path !== '/') {
    const labels = path.split('/').filter(Boolean).map((part) => part
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '));
    const itemListElement = [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sastrava.com/' }];
    labels.forEach((name, index) => {
      const itemPath = `/${path.split('/').filter(Boolean).slice(0, index + 1).join('/')}`;
      itemListElement.push({ '@type': 'ListItem', position: index + 2, name, item: `https://sastrava.com${itemPath}` });
    });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement });
  }
  if (entry.serviceType) {
    graph.push({ '@type': 'Service', '@id': `${canonical}#service`, name: entry.serviceType, serviceType: entry.serviceType, description: entry.description, url: canonical, provider: { '@id': organization['@id'] }, areaServed: { '@type': 'Country', name: 'India' } });
  }
  if (entry.faqs) {
    graph.push({ '@type': 'FAQPage', '@id': `${canonical}#faq`, url: canonical, mainEntity: entry.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
};

export { defaultDescription };

import { faqSchemaEntries } from './faqContent.js';
import { insights } from './insights.js';
import { downloadTemplates } from './downloadTemplates.js';
import { googleMapsListingAddress, googleMapsListingUrl } from './businessProfile.js';
import { teamProfiles } from './teamProfiles.js';
import { learningDomainGroups, edutechInstagramUrl, allLearningDomains } from './learningCatalog.js';
import { researchBlueprints } from './researchBlueprints.js';

const organizationName = 'SASTRAVA';
const defaultDescription = 'Grow with SASTRAVA in Tadepalli, Vijayawada and across India. Business consulting, SEO, AI automation, software and authorized security reviews.';

export const seoRoutes = {
  '/': {
    title: 'Business Consultant & SEO Agency in Tadepalli | SASTRAVA',
    ogTitle: 'Business Consulting, SEO & AI Automation | SASTRAVA',
    ogImage: '/images/sastrava-social-card.png',
    ogImageAlt: 'SASTRAVA business consulting and digital growth in Tadepalli, Andhra Pradesh',
    description: defaultDescription,
    keywords: ['business consultant Tadepalli', 'business consulting India', 'business innovator', 'startup incubator India', 'AI and business automation', 'software development India', 'cybersecurity audit and testing', 'SEO and digital marketing'],
  },
  '/about': {
    title: 'About SASTRAVA | Business Consulting & Innovation',
    ogImage: '/images/og/sastrava-about.png',
    ogImageAlt: 'SASTRAVA team and its business consulting and technology work',
    pageHeading: 'Business consulting, innovation and technology with purpose',
    intro: 'SASTRAVA partners with founders, businesses, and institutions to make complex work clearer and more achievable. Based in Tadepalli, the team brings together business consulting, startup support, digital products, automation, security, marketing, and learning.',
    description: 'Meet SASTRAVA, a Tadepalli consulting team supporting founders with incubation, software, AI automation, security, marketing, and practical learning.',
    sections: [
      { heading: 'A partner for turning challenges into progress', paragraph: 'SASTRAVA works with founders, businesses, and institutions to understand what is getting in the way and identify a useful next step. Our work connects business consulting and incubation support with digital products, AI and workflow automation, cybersecurity, marketing, and digital learning.', items: ['Start with the organization’s goals, people, and constraints', 'Agree priorities, scope, and the evidence needed to guide decisions', 'Bring the right mix of strategy and delivery support to the work'] },
      { heading: 'Local perspective, flexible collaboration', paragraph: 'SASTRAVA is based in Tadepalli, Andhra Pradesh, and works with teams locally and across India. Engagements are shaped to the client’s context, whether the need is a focused advisory conversation, a defined technical project, or a learning program.', items: ['Business and startup guidance grounded in the brief', 'Technology and security work with a clear scope', 'Remote and in-person collaboration arranged around the engagement'] },
    ],
    process: ['Listen to the challenge and understand the context.', 'Set a clear scope, priorities, and expected deliverables.', 'Review progress and agree practical next steps together.'],
    teamProfiles,
  },
  '/domains': {
    title: 'Industries & Technology Domains | SASTRAVA',
    pageHeading: 'Business and technology domains we support',
    intro: 'SASTRAVA works with founders, businesses, and institutions facing practical challenges in growth, software, automation, security, marketing, and digital learning. This page describes the kinds of context our services can support; it does not imply sector-specific certifications or client results.',
    description: 'Explore the business and technology domains SASTRAVA supports, from startups and education to software, AI, cybersecurity, and digital growth across India.',
    sections: [
      { heading: 'Business and innovation', paragraph: 'Early-stage founders and established teams may need help understanding customers, prioritizing opportunities, planning a product, or improving an operating workflow. Consulting begins with the goals, evidence, and constraints of each organization.', items: ['Business model discovery and startup support', 'Product and go-to-market planning', 'Workflow improvement and automation opportunity mapping'] },
      { heading: 'Digital products and emerging technology', paragraph: 'Technology work is scoped around the user need, data, systems, and delivery capacity. AI is considered where it adds value; simpler software, integrations, or process changes may be a better fit.', items: ['Websites, applications, and digital products', 'AI, generative AI, and business process automation', 'Data-aware implementation and integration planning'] },
      { heading: 'Trust, visibility, and skills', paragraph: 'Organizations also need secure systems, clear communication, discoverable services, and practical skills. SASTRAVA can discuss scoped assessments, content and marketing, and learning programs aligned to an agreed audience.', items: ['Authorized security reviews and remediation planning', 'Brand, SEO, local search, content, and campaign measurement', 'Technology workshops and project-based learning'] },
      ...learningDomainGroups.map((group) => ({ heading: `Sastrava Edutech: ${group.title}`, paragraph: group.description, items: group.domains.map(({ name, href }) => `${name} — ${href}`) })),
    ],
    process: ['Describe the audience, challenge, and desired change.', 'Agree the scope, evidence, and capabilities that fit.', 'Review progress and next steps with the people responsible for delivery.'],
  },
  '/services': {
    title: 'Business Consulting, AI & Marketing Services | SASTRAVA',
    ogImage: '/images/og/sastrava-services.png',
    ogImageAlt: 'SASTRAVA consulting, AI, software, cybersecurity, marketing, and learning services',
    pageHeading: 'Practical business and technology services for measurable progress',
    intro: 'Bring strategy and delivery together around the challenge you need to solve. SASTRAVA works across business consulting, incubation, software, automation, cybersecurity, marketing, media, and practical digital learning.',
    description: 'Explore SASTRAVA consulting, incubation, software, AI automation, security, digital marketing, content, and practical learning services for organizations.',
    serviceType: 'Business consulting and technology services',
    sections: [
      { heading: 'Strategy, consulting and incubation', paragraph: 'Clarify the problem, customer, and opportunity before committing resources. Consulting and incubation support can help founders and teams review business models, set priorities, and plan practical routes to market.', items: ['Business model and market discovery', 'Startup orientation, mentoring, and incubation support', 'Positioning, go-to-market, and operating priorities'] },
      { heading: 'Digital products, automation and security', paragraph: 'Build around real user needs and the systems people rely on. Work may include software development, integrations, workflow automation, authorized security assessment, and remediation planning.', items: ['Websites, applications, prototypes, and integrations', 'AI and workflow automation scoped to a real use case', 'Security audits, testing, patching guidance, and retesting'] },
      { heading: 'Marketing, media and digital learning', paragraph: 'Make an offer easier to understand and discover with clear brand communication, useful content, and coordinated organic and paid activity. Learning support helps teams and institutions build practical digital skills.', items: ['Brand and performance marketing, SEO, AEO, and local search', 'Content planning, creative production, and campaign measurement', 'Workshops, mentoring, and project-based technology learning'] },
    ],
    process: ['Discuss the goal, audience, and current constraints.', 'Agree a focused scope, roles, and success measures.', 'Deliver in reviewable steps and adjust using evidence.'],
  },
  '/learn': {
    title: 'Digital Learning & Technology Training | SASTRAVA',
    ogImage: '/images/og/sastrava-learning.png',
    ogImageAlt: 'SASTRAVA digital learning workshops and technology mentoring',
    pageHeading: 'Digital learning workshops and technology mentoring',
    intro: 'SASTRAVA plans practical workshops and mentoring for learners, teams, and institutions. Programs can cover software, AI, data, automation, and cybersecurity, with the format and exercises matched to the audience and agreed goals.',
    description: 'Build practical software, AI, data, and security skills through SASTRAVA workshops, mentoring, and project-based learning for teams and learners.',
    serviceType: 'Digital learning and technology training',
    sections: [
      { heading: 'Learning built around practical work', paragraph: 'SASTRAVA supports learners and teams who want to understand technology by applying it to useful tasks and projects.', items: ['Software development and digital product foundations', 'Artificial intelligence, data, and automation concepts', 'Cybersecurity awareness and secure development practices'] },
      { heading: 'Flexible formats for learners and teams', paragraph: 'Learning can be shaped around the audience, available time, and goals agreed before a program begins.', items: ['Interactive workshops and guided practice', 'Project mentoring and structured learning plans', 'Team sessions aligned to an agreed technology need'] },
      ...learningDomainGroups.map((group) => ({ heading: group.title, paragraph: group.description, items: group.domains.map(({ name, href }) => `${name} — ${href}`) })),
    ],
    process: ['Set the audience, outcomes, and starting level.', 'Choose topics, format, and practical exercises.', 'Review progress and recommend useful next steps.'],
    faqs: [
      ['What topics can a learning program cover?', 'Programs can cover software, AI, data, automation, cybersecurity, and related digital skills based on the learner’s goals and the agreed scope.'],
      ['What learning areas can be discussed?', `SASTRAVA Edutech lists ${allLearningDomains.length} learning and career topic areas. Contact the team to discuss current availability, audience, format, and scope.`],
      ['How are workshops planned?', 'The audience, starting level, intended outcomes, format, and practical exercises are agreed before a workshop or mentoring program begins.'],
    ],
  },
  '/build': {
    title: 'Software & Digital Product Development | SASTRAVA',
    ogImage: '/images/og/sastrava-software.png',
    ogImageAlt: 'SASTRAVA software development and digital product services',
    pageHeading: 'Software and digital product development',
    intro: 'Plan and build websites, applications, prototypes, and integrations around a defined user need. SASTRAVA works with you to understand requirements, agree an achievable scope, and review delivery in clear steps.',
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
      ['How is project scope agreed?', 'The team reviews requirements, priorities, dependencies, and acceptance criteria with the client before agreeing deliverables and a delivery plan.'],
    ],
  },
  '/grow': {
    title: 'Business Consultant, Innovation & Incubation | SASTRAVA',
    ogImage: '/images/og/sastrava-consulting.png',
    ogImageAlt: 'SASTRAVA business consulting, startup planning, and incubation support',
    pageHeading: 'Business consulting and startup incubation support',
    intro: 'SASTRAVA helps founders and organizations clarify business challenges, review opportunities, and choose practical priorities. Consulting and incubation support is shaped around your stage, customers, resources, and available evidence.',
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
      ['What happens in an initial consulting discussion?', 'The first conversation clarifies the decision or challenge, relevant context, and whether a focused scope or follow-up discovery would be useful.'],
    ],
  },
  '/secure': {
    title: 'Secure-by-Design Software & Digital Hygiene | SASTRAVA',
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA secure product engineering and digital hygiene guidance',
    pageHeading: 'Secure-by-design product engineering for founders and SMBs',
    intro: 'Strengthen everyday engineering practices across identity, secrets, cloud configuration, application defaults, and controlled releases. SASTRAVA helps founders and growing teams build a practical security baseline around their products.',
    description: 'Secure-by-design software and digital hygiene guidance for founders and SMB teams in Tadepalli and across India.',
    serviceType: 'Secure product engineering and digital hygiene guidance',
    sections: [
      { heading: 'Build a secure operating baseline', paragraph: 'A manageable product baseline helps teams understand access, environments, and recovery before incidents or scale increase complexity.', items: ['MFA and least-privilege account practices', 'Environment separation and server-side secret handling', 'Backups, recovery steps, and controlled releases'] },
      { heading: 'Put secure defaults into delivery', paragraph: 'Security practice can be included in product design, implementation, and release routines.', items: ['Input validation and safe error handling', 'Dependency and configuration review', 'CI/CD checks, rollback planning, and team handover'] },
    ],
    process: ['Map the product, environments, and access model.', 'Prioritize practical engineering and configuration improvements.', 'Document ownership, release, and recovery steps.'],
    faqs: [
      ['What does secure-by-design support cover?', 'It can cover product access, secrets, cloud configuration, dependency practices, release checks, and recovery planning within an agreed engineering scope.'],
      ['Does this page offer penetration testing?', 'No. Authorized penetration testing and enterprise security audits are described on the separate Cybersecurity services page.'],
      ['Can you review our Vercel or Supabase setup?', 'Configuration and access guidance can be scoped around the environment, current architecture, and permissions available to the team.'],
    ],
  },
  '/digital-marketing': {
    title: 'Digital Marketing & Performance Growth | SASTRAVA',
    ogImage: '/images/og/sastrava-marketing.png',
    ogImageAlt: 'SASTRAVA brand and performance marketing services',
    pageHeading: 'Brand and performance marketing for sustainable digital growth',
    intro: 'Connect clear brand positioning with useful content, organic discovery, paid campaigns, and conversion measurement. The channel mix and success measures should fit the audience, offer, and available budget.',
    description: 'Build your brand and demand with SASTRAVA through performance marketing, SEO, AEO, GEO, paid campaigns, content, and conversion measurement for India.',
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
    title: 'Enterprise Cybersecurity Audit & VAPT | SASTRAVA',
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA cybersecurity reviews, remediation, and retesting',
    pageHeading: 'Enterprise VAPT, security audits, and penetration testing',
    intro: 'A useful security review starts with written authorization and a defined scope. SASTRAVA can assess agreed applications, APIs, infrastructure, and controls, then help teams prioritize fixes and retesting.',
    description: 'Plan authorized security audits, VAPT, application testing, and remediation support in Vijayawada and across India. Define scope before testing.',
    serviceType: 'Cybersecurity audit and testing services',
    sections: [
      { heading: 'A scoped, authorized assessment', paragraph: 'Agree what is in scope, what is excluded, and how sensitive findings will be handled before any testing starts.', items: ['Application and infrastructure review', 'Vulnerability assessment and penetration testing', 'Control and configuration review against agreed criteria'] },
      { heading: 'From findings to fixes', paragraph: 'A useful audit explains impact and next steps so teams can prioritize work without overstating what a test proves.', items: ['Risk-ranked findings with supporting evidence', 'Patch and remediation guidance', 'Retesting and closure notes for agreed findings'] },
    ],
    process: ['Agree authorization, assets, and assessment boundaries.', 'Perform the agreed review and validate findings.', 'Present priorities, remediation options, and retest scope.'],
    faqs: [
      ['What does a security audit review?', 'A security audit reviews agreed systems, controls, and evidence against the goals and criteria defined in its scope.'],
      ['Does an audit guarantee security or compliance?', 'No. An assessment reflects its scope and evidence at a point in time and cannot guarantee complete security or compliance.'],
      ['Can SASTRAVA help with remediation?', 'Remediation planning, patch guidance, and retesting can be included when they are explicitly agreed as part of the engagement scope.'],
    ],
  },
  '/ai': {
    title: 'AI Automation Services & ROI Calculator | SASTRAVA India',
    ogImage: '/images/og/sastrava-ai.png',
    ogImageAlt: 'SASTRAVA AI and workflow automation consulting',
    pageHeading: 'AI and workflow automation consulting',
    intro: 'Identify a repetitive workflow or user problem before choosing an AI tool. SASTRAVA helps teams map processes, assess data and risk, define a bounded pilot, and evaluate whether an automation is useful enough to expand.',
    description: 'Plan AI workflows, CRM automation and GenAI pilots for Indian startups and SMBs. Estimate time and labor value with our free calculator.',
    serviceType: 'AI development and business automation consulting',
    downloads: [downloadTemplates.find(({ id }) => id === 'automation')],
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
  '/portfolio': {
    title: 'Project Blueprints & Interactive Demos | SASTRAVA',
    ogImage: '/images/og/sastrava-portfolio.png',
    ogImageAlt: 'Interactive project blueprints and browser-based demonstrations from SASTRAVA',
    pageHeading: 'Explore project blueprints and interactive demos',
    intro: 'Review practical project blueprints and browser-based demonstrations that show how SASTRAVA approaches discovery, planning, and delivery. These examples explain a possible process; they do not claim client results.',
    description: 'Explore SASTRAVA project blueprints and interactive browser demos for business, software, AI automation, cybersecurity, marketing, and digital learning.',
    sections: [
      { heading: 'Explore a delivery blueprint', paragraph: 'Each blueprint breaks a broad challenge into a clearer sequence of decisions, work areas, and review points. Use them to understand the shape of a possible engagement before discussing your own context.', items: ['Review a sample workflow or project structure', 'Explore browser-based tools and interactive demonstrations', 'Discuss scope, responsibilities, and constraints with SASTRAVA'] },
      { heading: 'Examples are not client claims', paragraph: 'Blueprints and demos are illustrative planning resources. Published client outcomes, testimonials, and metrics require evidence and permission; no result is implied by an example on this page.', items: ['Confirm assumptions against the real project context', 'Agree success measures before delivery begins', 'Contact SASTRAVA to discuss a suitable next step'] },
    ],
  },
  '/blog': {
    title: 'Business, Technology & Growth Insights | SASTRAVA',
    ogImage: '/images/og/sastrava-insights.png',
    ogImageAlt: 'SASTRAVA practical guides about AI, security, marketing, and business',
    pageHeading: 'Insights for better business and technology decisions',
    intro: 'These practical guides help founders and business teams think through AI automation, cybersecurity, local marketing, and early-stage business decisions. Each guide explains a useful starting point, trade-offs, and next steps without promising specific results.',
    description: 'Read practical SASTRAVA guides on AI, cybersecurity, software, digital marketing, business planning, and technology learning, with useful next steps.',
    localSummaryTelugu: 'స్థానిక శోధనలో కనిపించడానికి వ్యాపార పేరు, చిరునామా, ఫోన్ వివరాలను వెబ్‌సైట్ మరియు అధికారిక వ్యాపార ప్రొఫైల్‌లో ఒకేలా ఉంచండి. ప్రతి సేవా పేజీ వినియోగదారుల ప్రశ్నలకు స్పష్టంగా సమాధానం ఇవ్వాలి. SEO/AEO/GEO ఫలితాలకు హామీ లేదు; Search Consoleలో కవరేజ్ మరియు సంబంధిత సంప్రదింపు చర్యలను కొలవండి.',
    sections: [
      { heading: 'Practical guidance, grounded in real questions', paragraph: 'SASTRAVA’s insights focus on decisions that founders, business teams, and learners face when adopting technology or planning growth. Useful topics include choosing an automation use case, preparing for a security review, building a digital product, and measuring marketing activity.', items: ['Business consulting, startup planning, and innovation', 'AI, automation, software delivery, and cybersecurity', 'Brand strategy, SEO, digital marketing, and digital learning'] },
      { heading: 'Editorial standards', paragraph: 'Advice should explain its assumptions, distinguish general information from a project-specific recommendation, and avoid promises about rankings, security, or commercial outcomes. New guides are published when they are ready for review.', items: ['Use clear sources and explain technical terms', 'Keep recommendations proportionate to the evidence', 'Contact SASTRAVA to discuss a specific organizational context'] },
    ],
    articles: insights,
  },
  '/careers': { title: 'Careers & Opportunities | SASTRAVA', description: 'Explore career and collaboration opportunities across SASTRAVA technology, learning, and business work. Contact the team about current openings.' },
  '/contact': {
    title: 'Contact SASTRAVA | Business Consultant in Tadepalli',
    ogImage: '/images/og/sastrava-contact.png',
    ogImageAlt: 'Contact SASTRAVA in Tadepalli, Andhra Pradesh',
    pageHeading: 'Talk with SASTRAVA about your next business or technology step',
    intro: 'Tell SASTRAVA what you want to change, build, or understand. Contact the Tadepalli-based team by phone, email, WhatsApp, or the inquiry form to discuss scope and next steps.',
    description: 'Contact SASTRAVA in Tadepalli, Andhra Pradesh, to discuss consulting, incubation, software, automation, security, digital marketing, or technical learning.',
    sections: [
      { heading: 'Start with the challenge', paragraph: 'Tell us what you are trying to accomplish, who the work is for, and what constraints or deadlines matter. SASTRAVA can discuss business consulting, startup incubation, software, AI automation, security audits, marketing, content, and digital learning.', items: ['Describe the goal and the current situation', 'Share the service area or decision where support is needed', 'Include a preferred way and time to follow up'] },
      { heading: 'Based in Tadepalli, Andhra Pradesh', paragraph: 'SASTRAVA is based in Tadepalli and works with clients in the surrounding region, including Vijayawada, Guntur, and Amaravati, as well as teams elsewhere in India. These are service areas; meetings and delivery formats are agreed for each engagement.', items: ['Email: neeraj@sastrava.com or siri@sastrava.com', 'Phone and WhatsApp: +91 7981 576083', 'Use the contact form or message the team directly'] },
    ],
  },
  '/privacy': {
    title: 'Privacy & Data Protection Notice | SASTRAVA', pageHeading: 'Privacy & Data Protection Notice',
    description: 'Learn what SASTRAVA collects through its contact form and optional analytics, how browser tools work, and how to request access, correction, or erasure.',
    intro: 'This notice describes the information SASTRAVA handles through sastrava.com, the reasons it is used, and how visitors can make a privacy request.',
    sections: [
      { heading: 'Digital Personal Data Protection Act, 2023', paragraph: 'The DPDP Act and DPDP Rules have phased commencement dates. This notice describes current website practices and practical request channels; it does not claim every provision is already in force or that SASTRAVA has a formally appointed statutory Data Protection Officer.', items: ['Organization: SASTRAVA', 'Listed business contact location: Tadepalli, Andhra Pradesh 522501, India', 'Privacy contact: siri@sastrava.com; copy neeraj@sastrava.com'] },
      { heading: 'Contact information and purpose', paragraph: 'When you submit the contact form, SASTRAVA processes the name, email, phone, optional company, and inquiry message you provide to respond to that request. A server timestamp and source page are also recorded. Submission is not a marketing subscription.', items: ['The form requires an affirmative checkbox before submission', 'Consent time is recorded with each inquiry', 'You may request access, correction, or erasure by contacting us'] },
      { heading: 'Browser tools, analytics, and sharing', paragraph: 'The SEO/AEO/GEO checker, AI and workflow estimate, and security checklist calculate results in your browser. SASTRAVA does not send tool answers or scores to its contact API or analytics events. Optional GA4 loads only after permission and receives limited page and interaction events, never form values or tool results. Choosing download saves a report to your device; using Share or WhatsApp can disclose its contents to the selected app or recipient.', items: ['Analytics can be accepted or withdrawn in the preferences control', 'Shared tool URLs contain only a generic completion marker', 'Third-party links follow the provider’s own privacy terms'] },
      { heading: 'Requests, retention, and children', paragraph: 'Inquiry records are retained for follow-up and ordinary business recordkeeping; no automatic deletion period is promised. Ask us about information held, corrections, or erasure, subject to lawful retention needs. The public form is intended for adults and organizations; for a learning program involving a person under 18, an authorized institution or parent/guardian should contact us first.', items: ['SASTRAVA aims to acknowledge privacy requests within two business days', 'Target response update: within 15 business days; this is a service target, not a statutory SLA', 'Email siri@sastrava.com or call +91 7981 576083'] },
    ],
  },
  '/terms': {
    title: 'Terms of Use | SASTRAVA', pageHeading: 'Terms of Use',
    description: 'Read SASTRAVA website terms for planning tools, consulting, authorized security testing, learning programs, intellectual property, and use of this website.',
    intro: 'These terms describe the general conditions for browsing sastrava.com and using its free planning resources. A separate written agreement governs a specific engagement.',
    sections: [
      { heading: 'Website information and planning tools', paragraph: 'Guides and calculators are general educational resources, not legal, financial, security, or professional advice. Estimates depend on visitor-entered assumptions and do not guarantee results.', items: ['Verify information before making consequential decisions', 'External links and services are operated under third-party terms'] },
      { heading: 'Consulting and security testing', paragraph: 'Engagement scope, responsibilities, fees, timeline, and deliverables are confirmed in a written agreement. Security scanning, VAPT, or other testing requires prior written system-owner authorization and agreed rules of engagement.', items: ['No testing begins without approved targets, methods, schedule, and exclusions', 'Only the agreed assets and test methods may be used'] },
      { heading: 'Digital learning', paragraph: 'Learning programs support skill development and do not guarantee employment, placement, certification, income, or admission. Program-specific eligibility, fees, schedules, supervision, and completion terms are shared separately.', items: ['Learners and institutions are responsible for meeting program requirements', 'Use of a completion record is subject to program-specific terms'] },
      { heading: 'Intellectual property and governing law', paragraph: 'SASTRAVA or its licensors own the site’s branding, original text, and design except where otherwise identified. Do not reuse these materials commercially without permission. These terms are governed by Indian law; subject to mandatory jurisdiction rules, courts with competent jurisdiction in Guntur or Vijayawada, Andhra Pradesh may hear disputes.', items: ['Contact neeraj@sastrava.com or siri@sastrava.com with questions'] },
    ],
  },
  '/security': {
    title: 'Responsible Security Disclosure | SASTRAVA', pageHeading: 'Responsible Security Disclosure',
    description: 'Report a potential website security issue to SASTRAVA. Review safe disclosure scope, reporting contacts, and our coordinated response approach.',
    intro: 'SASTRAVA welcomes responsible reports of potential vulnerabilities affecting systems we operate. Do not test systems without written authorization.',
    sections: [
      { heading: 'Contact and safe reporting', paragraph: 'Email neeraj@sastrava.com or siri@sastrava.com with the affected URL, a concise description, and safe reproduction steps. Do not include credentials, personal data, or weaponized files.', items: ['Report only issues affecting assets you are authorized to assess', 'Avoid accessing, modifying, or retaining another person’s information', 'We aim to acknowledge within two business days; this is a response target, not a reward or statutory commitment'] },
      { heading: 'Testing boundaries', paragraph: 'Do not run high-volume automation, denial-of-service tests, social engineering, authentication attacks, or tests against third-party systems. Coordinate any validation with SASTRAVA first.', items: ['Written scope is required before any security testing', 'Findings are reviewed and remediation decisions are coordinated with the system owner'] },
    ],
  },
  '/faq': { title: 'Frequently Asked Questions | SASTRAVA', pageHeading: 'Frequently asked questions about SASTRAVA', description: 'Get practical answers about SASTRAVA consulting, AI, software, marketing, security, digital learning, engagement scope, and how to contact the team.', faqs: faqSchemaEntries },
  '/support': { title: 'SASTRAVA Support | Services & Learning', description: 'Contact SASTRAVA for help with a service, learning program, or existing inquiry. Share what you need so the team can guide your next step.' },
  '/success-stories': { title: 'SASTRAVA Learning Stories & Outcomes', pageHeading: 'Learning programs, experiences, and outcomes', description: 'Explore SASTRAVA digital learning workshops, mentoring, and learning approach. Stories and outcomes are published only when verified and approved.' },
  '/case-studies': { title: 'Project Case Studies & Delivery | SASTRAVA', pageHeading: 'Project case studies and delivery approach', description: 'Explore SASTRAVA consulting, software, automation, security, and marketing approaches. Client outcomes are shared only with evidence and permission.' },
  '/research': { title: 'Technology Research | SASTRAVA', description: 'Explore SASTRAVA research themes in emerging technology, software, AI, cybersecurity, and digital learning, with context for practical application.' },
  '/publications': { title: 'Research & Technology Publications | SASTRAVA', description: 'Browse SASTRAVA technology publications, with authorship, subject matter, publication details, and project context for items shared here.' },
  '/open-source': { title: 'Open-Source Projects | SASTRAVA', description: 'Explore SASTRAVA open-source projects, purpose, documentation, licenses, and contribution guidance for tools shared with the community.' },
  '/achievements': { title: 'Milestones & Achievements | SASTRAVA', description: 'Review milestones and achievements shared by SASTRAVA, with supporting details and context. Only verified accomplishments are presented here.' },
  '/cybersecurity/penetration-testing': {
    title: 'VAPT & Penetration Testing Services in India | SASTRAVA',
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA authorized vulnerability assessment and penetration testing',
    pageHeading: 'Authorized vulnerability assessment and penetration testing',
    intro: 'Assess agreed web applications, APIs, and infrastructure for potential weaknesses through controlled, authorized testing. The scope, methods, schedule, and rules of engagement are agreed in writing before testing begins.',
    description: 'Plan authorized VAPT for web applications, APIs, and infrastructure with SASTRAVA, including clear scope, evidence-led findings, fixes, and retesting.',
    keywords: ['VAPT services India', 'penetration testing services', 'web application penetration testing', 'API security testing'],
    serviceType: 'Vulnerability assessment and penetration testing',
    sections: [
      { heading: 'A safe, defined scope', paragraph: 'Written authorization defines the systems, methods, test window, contacts, and exclusions. This keeps assessment activity controlled and helps protect production services and sensitive data.', items: ['Web application and API testing', 'Infrastructure and configuration review', 'Clear rules of engagement and escalation contacts'] },
      { heading: 'Actionable findings', paragraph: 'A useful report explains evidence, likely impact, and remediation options. Retesting can be scoped to confirm whether specific findings have been addressed.', items: ['Risk-ranked findings with supporting detail', 'Practical mitigation and patch guidance', 'Retesting notes for agreed fixes'] },
    ],
    process: ['Confirm written authorization, assets, and rules of engagement.', 'Test the agreed targets and validate potential findings.', 'Present remediation priorities and retest agreed fixes.'],
    faqs: [
      ['What does a penetration test assess?', 'A penetration test assesses agreed systems for exploitable weaknesses using controlled testing, then reports findings and practical remediation guidance.'],
      ['What is the difference between vulnerability scanning and penetration testing?', 'A vulnerability scan identifies potential weaknesses. Penetration testing adds manual validation to assess whether selected weaknesses can be exploited within the agreed scope.'],
      ['Do you need written authorization before testing?', 'Yes. Security testing should only begin after the system owner has approved the targets, methods, schedule, and rules of engagement in writing.'],
    ],
  },
  '/cybersecurity/security-audits': {
    title: 'Cybersecurity Audit Services | SASTRAVA',
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA cybersecurity reviews, remediation, and retesting',
    pageHeading: 'Cybersecurity audits and security control reviews',
    intro: 'A security audit can help an organization understand whether selected policies, controls, configurations, and evidence match its requirements. SASTRAVA agrees audit goals and boundaries first, then documents observations and practical next steps.',
    description: 'Review cybersecurity controls, identify gaps, and prioritize remediation with a defined scope and practical findings for your organization.',
    keywords: ['cybersecurity audit services', 'information security audit', 'security controls assessment', 'security audit India'],
    serviceType: 'Cybersecurity audit services',
    downloads: [downloadTemplates.find(({ id }) => id === 'security')],
    sections: [
      { heading: 'Review the controls that matter', paragraph: 'The review can focus on agreed applications, infrastructure, operational practices, and supporting documentation. Criteria and evidence sources are selected with the organization before work starts.', items: ['Application and infrastructure security review', 'Access, configuration, backup, and incident process checks', 'Control evidence mapped to agreed criteria'] },
      { heading: 'Prioritize remediation', paragraph: 'Findings should distinguish observed evidence from assumptions and explain practical actions. An audit describes the scope reviewed at a point in time; it cannot guarantee complete security or compliance.', items: ['Documented gaps and supporting evidence', 'Risk-based remediation priorities', 'Optional patch guidance and retesting scope'] },
    ],
    process: ['Agree objectives, systems, criteria, and evidence handling.', 'Review controls and validate documented observations.', 'Share findings, priorities, and remediation options.'],
    faqs: [
      ['What does a cybersecurity audit review?', 'A cybersecurity audit reviews agreed policies, controls, systems, and evidence against the objectives and framework defined in the audit scope.'],
      ['What do I receive after an audit?', 'Deliverables depend on the agreed scope and can include documented findings, risk priorities, evidence gaps, and a remediation plan.'],
      ['Can an audit guarantee compliance?', 'No audit can guarantee compliance by itself. Compliance depends on the applicable requirements, evidence, implementation, and the organization’s ongoing practices.'],
    ],
  },
  '/ai/genai': {
    title: 'Generative AI Development & RAG Solutions | SASTRAVA',
    ogImage: '/images/og/sastrava-ai.png',
    ogImageAlt: 'SASTRAVA generative AI and retrieval-augmented generation services',
    pageHeading: 'Generative AI and retrieval-augmented generation',
    intro: 'Explore whether a language model or AI assistant fits your users and information needs. SASTRAVA can help scope a bounded prototype, connect selected reference material, and plan evaluation, privacy, and human review.',
    description: 'Plan generative AI, LLM integrations, RAG, and assistant prototypes with SASTRAVA, including evaluation, data safeguards, and human review.',
    keywords: ['generative AI development India', 'RAG development services', 'LLM integration services', 'AI chatbot development'],
    serviceType: 'Generative AI and large language model solutions',
    sections: [
      { heading: 'Connect answers to selected information', paragraph: 'A retrieval-augmented generation system retrieves relevant material from an approved source collection and provides it to a language model when responding. Access, freshness, source quality, and evaluation all affect usefulness.', items: ['Information and user workflow discovery', 'Source selection and access requirements', 'A bounded prototype with review criteria'] },
      { heading: 'Plan for limitations and oversight', paragraph: 'Generative AI may return inaccurate or incomplete answers. Testing, clear source references, access controls, user feedback, human review, and fallback paths should be considered before wider use.', items: ['Privacy and security review for selected data', 'Evaluation for representative questions', 'Operational and human-review plan'] },
    ],
    process: ['Choose a user problem and approved source material.', 'Define prototype scope, access controls, and evaluation.', 'Review results and decide whether a wider rollout is justified.'],
    faqs: [
      ['What is retrieval-augmented generation (RAG)?', 'RAG connects a language model to selected reference material so its responses can use relevant information retrieved for a question.'],
      ['When should a business use a custom AI assistant?', 'An assistant may help when users need a conversational way to find information or complete a bounded workflow, with access controls and evaluation suited to the data involved.'],
      ['Does generative AI always return correct answers?', 'No. Generative AI can produce inaccurate responses. Testing, clear source material, suitable guardrails, human review, and monitoring are important for production use.'],
    ],
  },
  '/digital-marketing/seo': {
    title: 'SEO, AEO & GEO Services in Vijayawada | SASTRAVA',
    ogImage: '/images/og/sastrava-marketing.png',
    ogImageAlt: 'SASTRAVA technical, content, and local search optimization services',
    pageHeading: 'Search engine optimization and local search services',
    intro: 'Improve how people discover and understand your site with technical review, query research, useful content, and consistent local business information. SEO work is prioritized against your audience, competition, and implementation capacity; rankings cannot be guaranteed.',
    description: 'Improve local search and AI discovery with technical SEO, keyword research, and useful content for Tadepalli, Vijayawada, Amaravati, and India.',
    localSummaryHeading: 'తెలుగులో సమాచారం: విజయవాడ, తాడేపల్లి, గుంటూరు & అమరావతి వ్యాపారాల కోసం SEO మరియు డిజిటల్ మార్కెటింగ్',
    localSummaryTelugu: 'మీ వ్యాపారం గూగుల్ సెర్చ్ (Google Search), గూగుల్ మ్యాప్స్ (Google Maps), మరియు AI సెర్చ్ ఇంజన్లలో (ChatGPT, Perplexity, Gemini) మెరుగ్గా కనిపించేలా SASTRAVA SEO, AEO & GEO సేవలతో సహాయపడుతుంది. స్థానిక కస్టమర్లను ఆకర్షించడానికి మరియు మీ బ్రాండ్ డిజిటల్ గుర్తింపును బలోపేతం చేయడానికి మాతో సంప్రదించండి. శోధన ఫలితాల్లో స్థానం లేదా వ్యాపార ఫలితాలకు హామీ ఉండదు.',
    keywords: ['SEO services India', 'technical SEO services', 'keyword research and content strategy', 'local SEO Tadepalli'],
    serviceType: 'Search engine optimization services',
    downloads: [downloadTemplates.find(({ id }) => id === 'localSeo')],
    sections: [
      { heading: 'Fix crawlability and page foundations', paragraph: 'Start with indexable, useful pages, consistent canonicals, descriptive titles, clear headings, fast mobile experiences, and internal links that help visitors move through relevant content.', items: ['Technical crawl and indexability review', 'Page titles, descriptions, headings, and structured data', 'Mobile experience and internal-link improvements'] },
      { heading: 'Create content for real search intent', paragraph: 'Query research can reveal what customers are trying to solve. Build focused service pages and genuinely useful answers rather than repeating keywords or making unsupported claims.', items: ['Keyword and audience-intent research', 'Service and editorial content planning', 'Local business information consistency'] },
    ],
    process: ['Review the site, audience, and current search opportunities.', 'Prioritize technical fixes and useful content.', 'Measure discovery and conversion signals and refine over time.'],
    faqs: [
      ['How long before we see SEO results?', 'Timing varies with the site’s current condition, competition, content, budget, and implementation pace. We agree measures and review progress over time; no fixed timeline can be promised.'],
      ['Do you guarantee rankings?', 'No. Search rankings and business results depend on competition, the offer, budget, audience, and execution. We agree a plan, report progress, and refine work using available evidence.'],
      ['What is your SEO approach?', 'We follow Google guidelines using white-hat techniques: quality content, technical optimization, authority building, and user experience.'],
      ['Can you improve existing rankings?', 'Yes, we analyze current rankings, identify gaps, and develop strategies to improve positions for underperforming keywords.'],
      ['What is the difference between SEO, AEO, and GEO?', 'SEO helps people discover useful pages in search. Answer engine optimization (AEO) makes clear answers easy to find and understand. Generative engine optimization (GEO) helps generative search systems interpret trustworthy, useful information. None can guarantee inclusion or a particular ranking.'],
    ],
  },
  '/tools/seo-aeo-checker': {
    title: 'Free SEO, AEO & GEO Readiness Checker | SASTRAVA',
    pageHeading: 'SEO, AEO & GEO readiness checker',
    intro: 'Use this ten-point self-check to spot practical search-readiness gaps across technical SEO, local visibility, useful answers, mobile experience, and measurement. Mark items only when you can verify them.',
    description: 'Review ten practical SEO, AEO, and local search checks for your website. Get an instant readiness score and a prioritized checklist to copy and use.',
    ogImage: '/images/og/sastrava-marketing.png',
    sections: [
      { heading: 'Check the foundations first', paragraph: 'Crawl access, a useful page structure, clear titles, and mobile usability help search systems and people understand your website. The checker makes a short list of these fundamentals visible in one place.', items: ['Review indexability, canonicals, titles, and headings', 'Connect useful pages with descriptive internal links', 'Check mobile layout, image quality, and local information'] },
      { heading: 'Use the result as a practical action plan', paragraph: 'A higher checklist score does not guarantee a ranking, AI answer, or number of leads. Use any unchecked items to decide what to validate or improve next, then review Search Console and relevant conversion data.', items: ['Mark only items you have confirmed', 'Copy the remaining actions for your planning notes', 'Recheck after updates and measure meaningful outcomes'] },
    ],
    faqs: [
      ['Does the readiness score predict Google rankings?', 'No. The score is an educational checklist, not a ranking prediction or technical audit. Search visibility depends on many factors and cannot be guaranteed.'],
      ['Does this tool send my website or answers to SASTRAVA?', 'No. The checklist runs in your browser. It does not crawl a website or transmit your answers.'],
    ],
  },
  '/tools/ai-roi-calculator': {
    title: 'AI Automation ROI Calculator | SASTRAVA',
    pageHeading: 'AI & workflow automation ROI calculator',
    intro: 'Estimate the time and labor value a bounded automation might return. Enter the team size, time spent on a recurring workflow, labor cost, and your expected reduction; adjust assumptions before making a decision.',
    description: 'Estimate monthly hours and labor value from a workflow automation using your team size, time spent, hourly cost, and an adjustable assumption.',
    ogImage: '/images/og/sastrava-ai.png',
    sections: [
      { heading: 'How the estimate is calculated', paragraph: 'The calculator multiplies people involved by weekly hours and 4.33 weeks per month, then applies the percentage of time you think automation could reduce. Estimated labor value is the returned hours multiplied by your hourly cost.', items: ['Potential hours returned = people × hours per week × 4.33 × reduction rate', 'Illustrative monthly labor value = potential hours × hourly labor cost', 'Annual value is a simple monthly estimate multiplied by twelve'] },
      { heading: 'Treat ROI as a hypothesis to test', paragraph: 'The estimate does not include implementation, integration, hosting, support, exception handling, quality checks, or change-management costs. A pilot should measure actual time saved and error rates while protecting customer data and retaining human review where needed.', items: ['Start with a repeatable, bounded process', 'Include exception handling and ongoing operating costs', 'Compare measured results with the initial assumptions'] },
    ],
    faqs: [
      ['Is the calculator a guaranteed savings forecast?', 'No. It is a scenario estimate based on values you enter. Actual benefits and costs depend on the process, implementation, adoption, and quality controls.'],
      ['Are my numbers saved or sent to SASTRAVA?', 'No. The calculation runs locally in your browser and does not send your inputs to SASTRAVA.'],
    ],
  },
  '/tools/security-checklist': {
    title: 'Website Security Readiness Checklist | SASTRAVA',
    pageHeading: 'Website security readiness checklist',
    intro: 'Review eight foundational controls for a website or small application. Your answers create a preliminary priority tier in your browser; this tool does not scan or test any system.',
    description: 'Review eight website security controls, identify items for follow-up, and get a preliminary priority tier. This checklist does not scan your site.',
    ogImage: '/images/og/sastrava-security.png',
    sections: [
      { heading: 'Controls included in the self-check', paragraph: 'The questions cover common operational foundations: administrative MFA, patching, backups, least-privilege access, form and API protections, server-side secrets, logging, and security response planning.', items: ['Mark “Not sure” when a control has not been verified', 'Give each gap an owner and a review date', 'Confirm backup restoration and incident contacts periodically'] },
      { heading: 'A self-check is not a security test', paragraph: 'This checklist does not access a website or assess its code, configuration, or defenses. A security assessment requires the system owner’s written authorization, a defined scope, controlled testing, and appropriate handling of findings.', items: ['Do not enter credentials, domains, or sensitive information', 'Use written permission before any security testing', 'Request remediation support only for systems you own or are authorized to assess'] },
    ],
    faqs: [
      ['Does this tool perform a vulnerability scan?', 'No. It only scores the answers you select in your browser and never connects to your website.'],
      ['Can a completed checklist prove a website is secure?', 'No. It covers selected foundational practices and cannot prove that a system is secure or compliant.'],
    ],
  },
  '/login': { title: 'Login | SASTRAVA', description: 'Sign in to your SASTRAVA account.', noindex: true },
  '/student-dashboard': { title: 'Student Dashboard | SASTRAVA', description: 'Access your SASTRAVA learning dashboard.', noindex: true },
};

export const normalizeSeoPath = (pathname) => {
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
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://sastrava.com/#organization',
    name: organizationName,
    url: 'https://sastrava.com/',
    logo: { '@type': 'ImageObject', url: 'https://sastrava.com/logo.png', width: 512, height: 512 },
    description: defaultDescription,
    email: 'neeraj@sastrava.com',
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'business inquiries', email: 'siri@sastrava.com', availableLanguage: ['English'] }],
    telephone: '+91 7981 576083',
    address: {
      '@type': 'PostalAddress',
      streetAddress: googleMapsListingAddress.split(', Tadepalli,')[0],
      addressLocality: 'Tadepalli',
      addressRegion: 'Andhra Pradesh',
      postalCode: '522501',
      addressCountry: 'IN',
    },
    hasMap: googleMapsListingUrl,
    areaServed: [
      { '@type': 'City', name: 'Tadepalli' },
      { '@type': 'City', name: 'Vijayawada' },
      { '@type': 'City', name: 'Guntur' },
      { '@type': 'City', name: 'Amaravati' },
      { '@type': 'Country', name: 'India' },
    ],
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
      edutechInstagramUrl,
      googleMapsListingUrl,
    ],
  };
  const graph = [
    organization,
    { '@type': 'WebSite', '@id': 'https://sastrava.com/#website', url: 'https://sastrava.com/', name: organizationName, publisher: { '@id': organization['@id'] }, inLanguage: 'en-IN' },
    { '@type': 'WebPage', '@id': `${canonical}#webpage`, url: canonical, name: entry.title, description: entry.description, isPartOf: { '@id': 'https://sastrava.com/#website' }, inLanguage: 'en-IN' },
  ];
  if (path === '/blog') {
    graph.push(...insights.map((article) => ({
      '@type': 'BlogPosting',
      '@id': `${canonical}#${article.slug}`,
      headline: article.title,
      description: article.summary,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      mainEntityOfPage: `${canonical}#${article.slug}`,
      author: { '@type': 'Organization', '@id': organization['@id'], name: organizationName },
      publisher: { '@type': 'Organization', '@id': organization['@id'], name: organizationName, logo: { '@type': 'ImageObject', url: 'https://sastrava.com/logo.png' } },
    })));
  }
  if (path === '/research') {
    graph.push(...researchBlueprints.map((guide) => ({
      '@type': 'TechArticle',
      '@id': `${canonical}#${guide.slug}`,
      headline: guide.title,
      description: guide.problem,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      mainEntityOfPage: `${canonical}#${guide.slug}`,
      author: { '@type': 'Organization', '@id': organization['@id'], name: organizationName },
      publisher: { '@type': 'Organization', '@id': organization['@id'], name: organizationName, logo: { '@type': 'ImageObject', url: 'https://sastrava.com/logo.png' } },
    })));
  }
  if (path !== '/') {
    const labels = path.split('/').filter(Boolean).map((part) => part
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '));
    const itemListElement = [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sastrava.com/' }];
    labels.forEach((name, index) => {
      const itemPath = `/${path.split('/').filter(Boolean).slice(0, index + 1).join('/')}`;
      if (seoRoutes[itemPath]) itemListElement.push({ '@type': 'ListItem', position: itemListElement.length + 1, name, item: `https://sastrava.com${itemPath}` });
    });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`, itemListElement });
  }
  if (entry.serviceType) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: entry.serviceType,
      serviceType: entry.serviceType,
      description: entry.description,
      url: canonical,
      provider: { '@id': organization['@id'] },
      areaServed: [
        { '@type': 'City', name: 'Tadepalli' },
        { '@type': 'City', name: 'Vijayawada' },
        { '@type': 'City', name: 'Guntur' },
        { '@type': 'City', name: 'Amaravati' },
        { '@type': 'Country', name: 'India' },
      ],
    });
  }
  if (path === '/learn') {
    graph.push({
      '@type': 'EducationalOrganization',
      '@id': `${canonical}#educational-organization`,
      name: 'SASTRAVA Edutech',
      url: canonical,
      sameAs: [edutechInstagramUrl],
      parentOrganization: { '@id': organization['@id'] },
      hasCourse: allLearningDomains.map(({ name, href }) => ({ '@type': 'Course', name, url: `https://sastrava.com${href}`, provider: { '@id': `${canonical}#educational-organization` } })),
    });
  }
  if (entry.teamProfiles) {
    graph.push(...entry.teamProfiles.map((member) => ({
      '@type': 'Person',
      '@id': `https://sastrava.com${member.profile}#person`,
      name: member.name,
      jobTitle: member.designation,
      image: `https://sastrava.com${member.image}`,
      url: `https://sastrava.com${member.profile}`,
      worksFor: { '@id': organization['@id'] },
    })));
  }
  if (entry.faqs) {
    graph.push({ '@type': 'FAQPage', '@id': `${canonical}#faq`, url: canonical, mainEntity: entry.faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
};

export { defaultDescription };

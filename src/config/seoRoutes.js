import { faqSchemaEntries } from './faqContent.js';
import { insights } from './insights.js';
import { googleMapsListingAddress, googleMapsListingUrl } from './businessProfile.js';
import { teamProfiles } from './teamProfiles.js';

const organizationName = 'SASTRAVA';
const defaultDescription = 'Tadepalli business consultant, innovator and incubator for digital marketing, software, AI automation, security audits and digital learning.';

export const seoRoutes = {
  '/': {
    title: 'Business Consultant in Tadepalli | SASTRAVA',
    ogTitle: 'Business Consultant in Tadepalli | SASTRAVA',
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
    description: 'Learn how SASTRAVA supports founders, businesses, and institutions through consulting, incubation, technology, security, digital growth, and practical learning.',
    sections: [
      { heading: 'A partner for turning challenges into progress', paragraph: 'SASTRAVA works with founders, businesses, and institutions to understand what is getting in the way and identify a useful next step. Our work connects business consulting and incubation support with digital products, AI and workflow automation, cybersecurity, marketing, and digital learning.', items: ['Start with the organization’s goals, people, and constraints', 'Agree priorities, scope, and the evidence needed to guide decisions', 'Bring the right mix of strategy and delivery support to the work'] },
      { heading: 'Local perspective, flexible collaboration', paragraph: 'SASTRAVA is based in Tadepalli, Andhra Pradesh, and works with teams locally and across India. Engagements are shaped to the client’s context, whether the need is a focused advisory conversation, a defined technical project, or a learning program.', items: ['Business and startup guidance grounded in the brief', 'Technology and security work with a clear scope', 'Remote and in-person collaboration arranged around the engagement'] },
    ],
    process: ['Listen to the challenge and understand the context.', 'Set a clear scope, priorities, and expected deliverables.', 'Review progress and agree practical next steps together.'],
    teamProfiles,
  },
  '/domains': { title: 'Industries & Technology Domains | SASTRAVA', description: 'Explore the technology domains and business challenges SASTRAVA supports through learning, digital product development, AI, and security.' },
  '/services': {
    title: 'Business Consulting, AI, Software & Marketing Services | SASTRAVA',
    ogImage: '/images/og/sastrava-services.png',
    ogImageAlt: 'SASTRAVA consulting, AI, software, cybersecurity, marketing, and learning services',
    pageHeading: 'Practical business and technology services for measurable progress',
    intro: 'Bring strategy and delivery together around the challenge you need to solve. SASTRAVA works across business consulting, incubation, software, automation, cybersecurity, marketing, media, and practical digital learning.',
    description: 'Explore SASTRAVA business consulting and incubation, software, AI and automation, security reviews, digital marketing, content, and technical learning services.',
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
    title: 'Cybersecurity, Security Audits & Testing | SASTRAVA',
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA cybersecurity reviews, remediation, and retesting',
    pageHeading: 'Cybersecurity audits, testing, and remediation support',
    intro: 'Review agreed systems with written authorization, clear testing boundaries, and practical reporting. SASTRAVA can help teams prioritize security findings, plan remediation, and retest addressed issues within the agreed scope.',
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
      ['What does a security assessment deliver?', 'Depending on the agreed scope, the work can provide documented findings, risk priorities, remediation guidance, and retesting notes for addressed issues.'],
    ],
  },
  '/digital-marketing': {
    title: 'Digital Marketing Consultant | Brand & Performance | SASTRAVA',
    ogImage: '/images/og/sastrava-marketing.png',
    ogImageAlt: 'SASTRAVA brand and performance marketing services',
    pageHeading: 'Brand and performance marketing for sustainable digital growth',
    intro: 'Connect clear brand positioning with useful content, organic discovery, paid campaigns, and conversion measurement. The channel mix and success measures should fit the audience, offer, and available budget.',
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
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA cybersecurity reviews, remediation, and retesting',
    pageHeading: 'Cybersecurity audits, testing and remediation support',
    intro: 'A useful security review starts with written authorization and a defined scope. SASTRAVA can assess agreed applications, APIs, infrastructure, and controls, then help teams prioritize fixes and retesting.',
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
      ['Can SASTRAVA help with remediation?', 'Remediation planning, patch guidance, and retesting can be included when they are explicitly agreed as part of the engagement scope.'],
    ],
  },
  '/ai': {
    title: 'AI & Business Automation Consulting | SASTRAVA',
    ogImage: '/images/og/sastrava-ai.png',
    ogImageAlt: 'SASTRAVA AI and workflow automation consulting',
    pageHeading: 'AI and workflow automation consulting',
    intro: 'Identify a repetitive workflow or user problem before choosing an AI tool. SASTRAVA helps teams map processes, assess data and risk, define a bounded pilot, and evaluate whether an automation is useful enough to expand.',
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
  '/portfolio': {
    title: 'SASTRAVA Capabilities & Team Portfolio | Consulting and Technology',
    ogImage: '/images/og/sastrava-portfolio.png',
    ogImageAlt: 'SASTRAVA team members and professional portfolio profiles',
    pageHeading: 'People and capabilities behind the work',
    intro: 'Meet the people and capabilities behind SASTRAVA’s business, technology, security, marketing, and learning work. Individual profiles describe team members; project outcomes are published only when their details are verified and approved.',
    description: 'Explore SASTRAVA capabilities across consulting, incubation, software, automation, security, digital marketing, and technical learning, plus team portfolios.',
    sections: [
      { heading: 'A multidisciplinary team portfolio', paragraph: 'The portfolio introduces SASTRAVA’s team and the capabilities connected to its work: business consulting, startup support, software and digital products, automation, cybersecurity, marketing, media, and learning.', items: ['Meet team members and review their areas of focus', 'Explore service capabilities and the kinds of work they support', 'Use the contact page to discuss a project or collaboration'] },
      { heading: 'Clear evidence matters', paragraph: 'Project outcomes and client details are shared only when they are documented and approved for publication. If a case study is not available for a capability, this page describes the service scope without inventing metrics, client endorsements, or results.', items: ['Published work should state the challenge and agreed scope', 'Results should include context and a verifiable source', 'Client names, quotes, and visuals require permission'] },
    ],
    teamProfiles,
  },
  '/blog': {
    title: 'Business, Technology & Digital Growth Insights | SASTRAVA',
    ogImage: '/images/og/sastrava-insights.png',
    ogImageAlt: 'SASTRAVA practical guides about AI, security, marketing, and business',
    pageHeading: 'Insights for better business and technology decisions',
    intro: 'These practical guides help founders and business teams think through AI automation, cybersecurity, local marketing, and early-stage business decisions. Each guide explains a useful starting point, trade-offs, and next steps without promising specific results.',
    description: 'Read SASTRAVA insights on AI, cybersecurity, software development, digital marketing, and technology learning.',
    sections: [
      { heading: 'Practical guidance, grounded in real questions', paragraph: 'SASTRAVA’s insights focus on decisions that founders, business teams, and learners face when adopting technology or planning growth. Useful topics include choosing an automation use case, preparing for a security review, building a digital product, and measuring marketing activity.', items: ['Business consulting, startup planning, and innovation', 'AI, automation, software delivery, and cybersecurity', 'Brand strategy, SEO, digital marketing, and digital learning'] },
      { heading: 'Editorial standards', paragraph: 'Advice should explain its assumptions, distinguish general information from a project-specific recommendation, and avoid promises about rankings, security, or commercial outcomes. New guides are published when they are ready for review.', items: ['Use clear sources and explain technical terms', 'Keep recommendations proportionate to the evidence', 'Contact SASTRAVA to discuss a specific organizational context'] },
    ],
    articles: insights,
  },
  '/careers': { title: 'Careers & Opportunities | SASTRAVA', description: 'Explore career and collaboration opportunities with SASTRAVA across technology, learning, and business.' },
  '/contact': {
    title: 'Contact SASTRAVA | Business Consultant in Tadepalli',
    ogImage: '/images/og/sastrava-contact.png',
    ogImageAlt: 'Contact SASTRAVA in Tadepalli, Andhra Pradesh',
    pageHeading: 'Talk with SASTRAVA about your next business or technology step',
    intro: 'Tell SASTRAVA what you want to change, build, or understand. Contact the Tadepalli-based team by phone, email, WhatsApp, or the inquiry form to discuss scope and next steps.',
    description: 'Contact SASTRAVA in Tadepalli, Andhra Pradesh, to discuss consulting, incubation, software, automation, security, digital marketing, or technical learning.',
    sections: [
      { heading: 'Start with the challenge', paragraph: 'Tell us what you are trying to accomplish, who the work is for, and what constraints or deadlines matter. SASTRAVA can discuss business consulting, startup incubation, software, AI automation, security audits, marketing, content, and digital learning.', items: ['Describe the goal and the current situation', 'Share the service area or decision where support is needed', 'Include a preferred way and time to follow up'] },
      { heading: 'Based in Tadepalli, Andhra Pradesh', paragraph: 'SASTRAVA is based in Tadepalli and works with clients in the surrounding region, including Vijayawada, Guntur, and Amaravati, as well as teams elsewhere in India. These are service areas; meetings and delivery formats are agreed for each engagement.', items: ['Email: neeraj@sastrava.com', 'Phone and WhatsApp: +91 7981 576083', 'Use the contact form or message the team directly'] },
    ],
  },
  '/privacy': { title: 'Privacy Policy | SASTRAVA', description: 'Read how SASTRAVA handles personal information and privacy on this website.' },
  '/terms': { title: 'Terms of Use | SASTRAVA', description: 'Read the terms that apply when using the SASTRAVA website and its services.' },
  '/security': { title: 'Report a Security Concern | SASTRAVA', description: 'Find how to contact SASTRAVA about a security concern involving this website.' },
  '/faq': { title: 'Frequently Asked Questions | SASTRAVA', pageHeading: 'Frequently asked questions about SASTRAVA', description: 'Find answers to common questions about SASTRAVA services, learning programs, and contacting the team.', faqs: faqSchemaEntries },
  '/support': { title: 'SASTRAVA Support | Services & Learning', description: 'Get support for SASTRAVA services, learning programs, or an existing inquiry.' },
  '/success-stories': { title: 'Digital Learning Approach | SASTRAVA', pageHeading: 'Learning and engagement approach', description: 'Explore SASTRAVA digital learning workshops and mentoring. Learner stories and outcomes are published only when verified and shared with permission.' },
  '/case-studies': { title: 'Project Capabilities & Approach | SASTRAVA', pageHeading: 'Project capabilities', description: 'Learn how SASTRAVA scopes consulting, software, marketing, automation, and security work. Client names, results, and testimonials are published only with evidence and permission.' },
  '/research': { title: 'Technology Research | SASTRAVA', description: 'Explore research topics and work shared by SASTRAVA across emerging technology and learning.' },
  '/publications': { title: 'Research & Technology Publications | SASTRAVA', description: 'Browse research and technology publications shared by SASTRAVA.' },
  '/open-source': { title: 'Open-Source Projects | SASTRAVA', description: 'Explore open-source projects and tools shared by SASTRAVA.' },
  '/achievements': { title: 'Milestones & Achievements | SASTRAVA', description: 'Explore verified milestones and achievements shared by SASTRAVA.' },
  '/cybersecurity/penetration-testing': {
    title: 'VAPT & Penetration Testing Services in India | SASTRAVA',
    ogImage: '/images/og/sastrava-security.png',
    ogImageAlt: 'SASTRAVA authorized vulnerability assessment and penetration testing',
    pageHeading: 'Authorized vulnerability assessment and penetration testing',
    intro: 'Assess agreed web applications, APIs, and infrastructure for potential weaknesses through controlled, authorized testing. The scope, methods, schedule, and rules of engagement are agreed in writing before testing begins.',
    description: 'Learn about vulnerability assessment and penetration testing for web applications, APIs, and infrastructure with SASTRAVA.',
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
    description: 'Explore cybersecurity audit support to review security controls, identify gaps, and prioritize remediation for your organization.',
    keywords: ['cybersecurity audit services', 'information security audit', 'security controls assessment', 'security audit India'],
    serviceType: 'Cybersecurity audit services',
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
    description: 'Explore generative AI development, LLM integrations, retrieval-augmented generation (RAG), and AI assistants with SASTRAVA.',
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
    title: 'SEO Services in India | Technical & Local SEO | SASTRAVA',
    ogImage: '/images/og/sastrava-marketing.png',
    ogImageAlt: 'SASTRAVA technical, content, and local search optimization services',
    pageHeading: 'Search engine optimization and local search services',
    intro: 'Improve how people discover and understand your site with technical review, query research, useful content, and consistent local business information. SEO work is prioritized against your audience, competition, and implementation capacity; rankings cannot be guaranteed.',
    description: 'Explore technical SEO, keyword research, on-page optimization, content strategy, and local search support from SASTRAVA.',
    keywords: ['SEO services India', 'technical SEO services', 'keyword research and content strategy', 'local SEO Tadepalli'],
    serviceType: 'Search engine optimization services',
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
    '@type': ['Organization', 'ProfessionalService'],
    '@id': 'https://sastrava.com/#organization',
    name: organizationName,
    url: 'https://sastrava.com/',
    logo: { '@type': 'ImageObject', url: 'https://sastrava.com/logo.png', width: 512, height: 512 },
    description: defaultDescription,
    email: 'neeraj@sastrava.com',
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

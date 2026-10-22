export const edutechInstagramUrl = 'https://www.instagram.com/sastrava_edutech/';

export const learningPrograms = [
  {
    service: 'Specialized Courses',
    title: 'Specialized multi-domain courses',
    description: 'Build from core concepts to applied practice in technology and business topics selected for the learner group.',
    deliverables: ['Topic and level map', 'Guided labs or exercises', 'Learning review and next-step plan'],
  },
  {
    service: 'Professional Certifications',
    title: 'Certification-oriented skill bootcamps',
    description: 'Short, focused learning sprints can prepare participants for selected certification topics without promising an exam result or credential.',
    deliverables: ['Baseline and study plan', 'Topic practice and review', 'Exam-readiness checklist'],
  },
  {
    service: 'Interactive Workshops',
    title: 'Institutional and corporate workshops',
    description: 'Hands-on sessions are planned around the audience’s starting level, available time, and agreed learning goals.',
    deliverables: ['Audience and topic brief', 'Facilitated exercises', 'Feedback and follow-up suggestions'],
  },
  {
    service: 'Industry Internships',
    title: 'Project-based internships',
    description: 'A scoped project can help learners practice collaboration and technical problem-solving with regular guidance.',
    deliverables: ['Defined project brief', 'Mentor review checkpoints', 'Completion record when agreed in advance'],
  },
  {
    service: 'Expert Mentorship',
    title: 'One-to-one mentorship and project guidance',
    description: 'Mentoring can support capstone planning, prototype development, research exploration, or a career transition.',
    deliverables: ['Goal and milestone plan', 'Feedback on project decisions', 'Next-step recommendations'],
  },
  {
    service: 'Career Roadmaps',
    title: 'Campus-to-career readiness',
    description: 'A practical pathway can combine portfolio work, interview practice, communication, and role-focused preparation.',
    deliverables: ['Skills and role map', 'Resume and portfolio review', 'Mock interview practice'],
  },
  {
    service: 'Skill Assessment',
    title: 'Baseline skill assessment and learning roadmaps',
    description: 'A structured discussion and diagnostic exercise can identify useful learning priorities for an individual or team.',
    deliverables: ['Starting-level snapshot', 'Priority skill-gap list', 'Recommended learning sequence'],
  },
];

export const learningDomainGroups = [
  {
    id: 'technology-ai',
    title: 'Technology & AI',
    description: 'Core computing and digital systems, from foundational concepts to applied delivery.',
    domains: [
      { number: '01', name: 'Computer Science & IT', href: '/learn', icon: 'Cpu' },
      { number: '02', name: 'Artificial Intelligence & Generative AI', href: '/ai', icon: 'BrainCircuit' },
      { number: '03', name: 'Data & Analytics', href: '/learn', icon: 'ChartNoAxesCombined' },
      { number: '04', name: 'Cybersecurity', href: '/cybersecurity', icon: 'ShieldCheck' },
      { number: '05', name: 'Cloud Computing', href: '/build', icon: 'Cloud' },
      { number: '06', name: 'DevOps & Infrastructure', href: '/build', icon: 'Workflow' },
      { number: '07', name: 'Software Development', href: '/build', icon: 'CodeXml' },
      { number: '08', name: 'Web & Digital Technologies', href: '/build', icon: 'Globe2' },
    ],
  },
  {
    id: 'core-engineering',
    title: 'Core Engineering',
    description: 'Engineering and industrial technology themes for applied learning and project exploration.',
    domains: [
      { number: '09', name: 'Electronics & Embedded Systems', href: '/learn', icon: 'CircuitBoard' },
      { number: '10', name: 'Electrical & Power', href: '/learn', icon: 'Zap' },
      { number: '11', name: 'Mechanical Engineering', href: '/learn', icon: 'Cog' },
    ],
  },
  {
    id: 'business-creative',
    title: 'Business & Creative',
    description: 'Business operations, audience growth, creative practice, and professional communication.',
    domains: [
      { number: '12', name: 'Management & Business', href: '/grow', icon: 'BriefcaseBusiness' },
      { number: '13', name: 'Digital Marketing', href: '/digital-marketing', icon: 'Megaphone' },
      { number: '14', name: 'Design & Creative Technology', href: '/build', icon: 'Palette' },
      { number: '15', name: 'Finance & Accounting', href: '/learn', icon: 'Calculator' },
      { number: '16', name: 'Human Resources', href: '/learn', icon: 'UsersRound' },
      { number: '17', name: 'Communication & Professional Skills', href: '/learn', icon: 'MessagesSquare' },
    ],
  },
  {
    id: 'career-formats',
    title: 'Career & Certification Formats',
    description: 'Learning formats that help institutions and learners shape a practical path around their goals.',
    domains: [
      { number: '18', name: 'Campus-to-Career Programs', href: '/learn', icon: 'GraduationCap' },
      { number: '19', name: 'Industry-Specific Training', href: '/learn', icon: 'Factory' },
      { number: '20', name: 'Emerging Technology Programs', href: '/ai', icon: 'Sparkles' },
      { number: '21', name: 'Certification-Oriented Programs', href: '/learn', icon: 'Award' },
      { number: '22', name: 'Short-Term Skill Programs', href: '/learn', icon: 'Clock3' },
    ],
  },
];

export const allLearningDomains = learningDomainGroups.flatMap((group) => group.domains);

export const technologyExplainers = [
  {
    title: 'AI vs. machine learning vs. generative AI',
    description: 'A beginner-friendly comparison of the broader field of AI, systems that learn patterns from data, and models that generate new content.',
    href: '/ai/genai',
    label: 'Explore AI and generative AI',
  },
  {
    title: 'Five common AI myths, checked',
    description: 'Separate useful AI capabilities from common assumptions about accuracy, autonomy, data, and human review.',
    href: '/blog',
    label: 'Read practical AI guidance',
  },
];

export const technologyHistoryTopics = [
  { title: 'Python: 1989 to today', description: 'Follow a language that began as Guido van Rossum’s holiday project and grew through an open community.', source: 'https://www.python.org/doc/essays/foreword/' },
  { title: 'Network security: 1971 to today', description: 'Start with early ARPANET experiments such as Creeper and trace how network security concerns have changed.', source: 'https://invention.si.edu/invention-stories/ai-and-challenge-cybersecurity' },
  { title: 'Cloud computing: utility computing to cloud platforms', description: 'Explore the long-running idea of computing resources delivered as a shared utility and its modern cloud forms.', source: 'https://ieeexplore.ieee.org/abstract/document/9045506' },
  { title: 'The Internet: from ARPANET to a global network', description: 'See how early packet-network research developed into interconnected networks and the modern Internet.', source: 'https://www.internetsociety.org/internet/history-internet/brief-history-internet/' },
  { title: 'Artificial intelligence: from early questions to modern systems', description: 'Trace key ideas from Turing’s 1950 question about machine intelligence to the 1956 Dartmouth research project.', source: 'https://computerhistory.org/stories/chatbots-decoded/' },
  { title: 'Generative AI: from GANs to large language models', description: 'Compare influential modern approaches to generating images, text, and other content, including GANs and LLMs.', source: 'https://arxiv.org/abs/1406.2661' },
];

export const industryDomains = [
  { title: 'Startups and incubators', description: 'Business discovery, product planning, workflow improvement, and practical go-to-market support.' },
  { title: 'Higher education and technical institutions', description: 'Digital learning, workshops, project guidance, and technology planning shaped around the institution’s goals.' },
  { title: 'Healthcare and clinics', description: 'Website, workflow, digital communication, and security-readiness discussions scoped to the organization’s systems and responsibilities.' },
  { title: 'Real estate and construction', description: 'Digital presence, customer journeys, internal workflows, and practical software opportunities for the built environment.' },
  { title: 'Retail and e-commerce', description: 'Brand, search visibility, customer-facing digital products, and measurement for online and local discovery.' },
  { title: 'Professional services', description: 'Clear service positioning, useful content, lead journeys, and workflow improvements for specialist teams.' },
];

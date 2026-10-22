export const scopeStages = [
  { title: 'Early idea / MVP', detail: 'Clarify the customer problem, test the riskiest assumptions, and define a first usable product or service.', outcome: 'Consulting + product discovery + a testable MVP plan · 2–4 week initial scope' },
  { title: 'Scaling operations', detail: 'Map the friction across acquisition, delivery, and internal workflows before choosing where to invest.', outcome: 'Growth strategy + automation assessment + software roadmap · phased delivery' },
  { title: 'Security & compliance', detail: 'Set an authorized review boundary, identify material risks, and agree how fixes will be verified.', outcome: 'Security audit or VAPT + remediation support + retest plan · scoped to assets' },
  { title: 'Team upskilling', detail: 'Set learning outcomes around current skill levels, available time, and the work participants need to practice.', outcome: 'Sastrava Edutech workshops + project mentoring + role-based learning plan' },
];

export const growthSteps = [
  { title: 'Problem & market validation', detail: 'Clarify who experiences the problem, what alternatives they use, and what evidence would justify a next experiment.', outcome: 'Interview guide, assumption map, and a prioritized validation backlog.' },
  { title: 'Go-to-market & unit economics', detail: 'Connect positioning and channels to a practical offer, acquisition costs, pricing assumptions, and delivery capacity.', outcome: 'Business model canvas, channel plan, and unit-economics worksheet.' },
  { title: 'Revenue & channel scaling', detail: 'Measure which channels and offers show repeatable demand, then plan responsible experiments to expand them.', outcome: '90-day growth roadmap, KPI dashboard outline, and experiment backlog.' },
];

export const buildSteps = [
  { title: 'Frontend & UX layer', detail: 'Translate user tasks into accessible flows, responsive layouts, and clear interface states.', outcome: 'Wireframes, interaction states, and acceptance criteria.' },
  { title: 'API & business logic', detail: 'Define service boundaries, validation, authorization, and error behavior around the product rules.', outcome: 'API contracts, domain logic, and integration notes.' },
  { title: 'Database & cloud infrastructure', detail: 'Select data structures, environments, secrets handling, backups, and operational visibility for the agreed scale.', outcome: 'Data model, deployment configuration, and operations checklist.' },
  { title: 'CI/CD, testing & handover', detail: 'Automate release checks and provide maintainers with reproducible steps and useful system documentation.', outcome: 'Production codebase, test suite, runbook, and handover.' },
];

export const aiSteps = [
  { title: 'Data source & ingestion', detail: 'Identify approved sources, data quality needs, retention rules, and permissions before processing.', outcome: 'Source inventory, data-flow map, and access boundaries.' },
  { title: 'Guardrails & RAG / model layer', detail: 'Choose retrieval or model patterns that fit the task, with evaluation cases and clear limits on generated output.', outcome: 'Bounded prototype, prompt/RAG evaluations, and fallback rules.' },
  { title: 'Human-in-the-loop review', detail: 'Decide when staff review, correct, or approve a result and how disagreements are handled.', outcome: 'Review queue, escalation rules, and quality scorecard.' },
  { title: 'Automated action & audit log', detail: 'Connect only approved actions, capture what the workflow did, and make failures visible and reversible.', outcome: 'Workflow map, audit trail, and rollback plan.' },
];

export const cyberSteps = [
  { title: 'Web & mobile apps', detail: 'Review in-scope applications for common weaknesses, sensitive data exposure, and unsafe configurations.', outcome: 'Authorized test scope and evidence-linked findings.' },
  { title: 'REST / GraphQL APIs', detail: 'Assess authentication, authorization, input handling, rate controls, and object-level access boundaries.', outcome: 'API attack-surface map and prioritized issues.' },
  { title: 'Cloud IAM & configuration', detail: 'Review agreed cloud settings, identities, storage, network exposure, and secret handling.', outcome: 'Configuration gaps with practical remediation steps.' },
  { title: 'Identity & MFA', detail: 'Inspect login, recovery, session, privilege, and MFA flows within the agreed test account boundaries.', outcome: 'Identity control observations and risk-based fixes.' },
  { title: 'Remediation retesting', detail: 'Recheck approved fixes against the original evidence and document remaining risk.', outcome: 'Retest notes and closure status for each finding.' },
];

export const marketingSteps = [
  { title: 'Search & AI discovery', detail: 'Improve technical foundations and useful content for organic, local, answer-engine, and generative discovery.', outcome: 'SEO/AEO/GEO audit, keyword map, and content clusters.' },
  { title: 'Paid acquisition', detail: 'Plan audience, creative, landing-page, and measurement tests before setting campaign budgets.', outcome: 'Google/Meta campaign test matrix with spend controls.' },
  { title: 'Landing-page conversion', detail: 'Align the message, evidence, offer, and form experience to the intent of each visit.', outcome: 'Conversion-focused landing-page recommendations.' },
  { title: 'CRM & lifecycle retention', detail: 'Connect consent-aware lead routing and follow-up to clear stages and useful response timing.', outcome: 'Lifecycle map, routing rules, and attribution events.' },
];

export const genAiSteps = [
  { title: 'Use case & source boundary', detail: 'Choose the task, approved knowledge sources, user permissions, and data that must stay out of the model context.', outcome: 'Use-case brief, source allowlist, and data handling rules.' },
  { title: 'Retrieval & generation', detail: 'Design retrieval, model instructions, and output formats around the source material and expected questions.', outcome: 'RAG flow, response structure, and source citation behavior.' },
  { title: 'Evaluation & guardrails', detail: 'Test quality, unsupported answers, prompt injection, and sensitive content using repeatable cases.', outcome: 'Evaluation suite, refusal boundaries, and quality thresholds.' },
  { title: 'Human review & operations', detail: 'Define approval, monitoring, fallback, and change management before connecting the system to business actions.', outcome: 'Review queue, operational owner, audit events, and rollback plan.' },
];

export const securityAuditSteps = [
  { title: 'Scope & criteria', detail: 'Agree the systems, time period, control objectives, evidence sources, and review constraints.', outcome: 'Written scope, assessment criteria, and evidence request.' },
  { title: 'Control evidence', detail: 'Review the selected policies, cloud settings, identity controls, asset records, and operational evidence.', outcome: 'Evidence register with missing or unclear controls.' },
  { title: 'Risk prioritization', detail: 'Connect gaps to system context, likelihood, potential impact, and dependencies for remediation.', outcome: 'Prioritized gap and risk register.' },
  { title: 'Remediation review', detail: 'Plan owners and next steps, then verify agreed changes using appropriate evidence.', outcome: 'Action plan and verification notes; no certification implied.' },
];

export const penetrationSteps = [
  { title: 'Written authorization', detail: 'Confirm the owner, target assets, allowed techniques, test window, and emergency contacts before any testing.', outcome: 'Signed authorization and rules of engagement.' },
  { title: 'Asset discovery', detail: 'Map only approved endpoints and exposed application surfaces, avoiding out-of-scope systems.', outcome: 'Confirmed asset list and test boundary.' },
  { title: 'Controlled validation', detail: 'Test relevant weaknesses with safe, evidence-based methods and stop conditions agreed in advance.', outcome: 'Reproducible findings with minimized impact.' },
  { title: 'Report & retest', detail: 'Prioritize findings, explain mitigation, and retest approved fixes against the original evidence.', outcome: 'Technical report, remediation notes, and closure status.' },
];

export const seoSteps = [
  { title: 'Technical crawlability', detail: 'Review indexable pages, status codes, canonicals, robots directives, sitemaps, and internal navigation.', outcome: 'Crawl and indexation issue list.' },
  { title: 'Search intent & topics', detail: 'Map service and local queries to useful page topics, avoiding unsupported claims and keyword stuffing.', outcome: 'Keyword clusters and page intent map.' },
  { title: 'Answer-ready content', detail: 'Make service explanations direct, structured, and useful for people and answer engines.', outcome: 'Page content and structured data recommendations.' },
  { title: 'Measurement & iteration', detail: 'Connect Search Console and consent-aware analytics to leads and content improvements.', outcome: 'Measurement plan and prioritized review cycle.' },
];

export const deliverables = {
  learn: ['Workshop lab kit', 'Capstone project review', 'Skill scorecard & completion record'],
  grow: ['Validated business model canvas', '90-day go-to-market roadmap', 'Channel experiment & KPI plan'],
  build: ['Production codebase', 'API documentation', 'Automated tests & deployment runbook'],
  cyber: ['Prioritized vulnerability report', 'Evidence within authorized scope', 'Remediation & retest guidance'],
  secure: ['Environment hardening checklist', 'Secrets and access-control review', 'Release and recovery runbook'],
  cyberAudit: ['Control evidence register', 'Risk and remediation matrix', 'Verification notes against agreed criteria'],
  pentest: ['Rules of engagement and scope', 'Reproducible findings with minimized evidence', 'Retest and closure record'],
  marketing: ['Technical SEO/AEO review', 'Keyword & content cluster map', 'Campaign test and attribution plan'],
  seo: ['Crawlability and indexation issue list', 'Search intent and keyword map', 'Search Console measurement plan'],
  ai: ['Workflow bottleneck map', 'Bounded pilot prototype', 'Evaluation & fallback specification'],
};

export const learningRoles = [
  { title: 'College student', description: 'Build foundational understanding through guided labs and a practical topic sequence.' },
  { title: 'Final-year capstone team', description: 'Turn a project idea into milestones, a reviewable prototype, and a clear demonstration.' },
  { title: 'Working professional', description: 'Choose a focused upskilling sprint connected to current tools, workflows, or role goals.' },
  { title: 'College HOD / institution', description: 'Plan workshops or cohort learning around department outcomes, student baseline, and lab availability.' },
];

export const faqCategories = ['All', 'Consulting & Incubation', 'Software & AI', 'Cybersecurity & VAPT', 'SEO & Digital Marketing', 'Sastrava Edutech & Internships'];

export const categorizedFaqs = [
  ['Consulting & Incubation', 'What should I prepare for a consulting discussion?', 'A short description of the challenge, who it affects, current constraints, and the decision you need to make is enough to begin.'],
  ['Consulting & Incubation', 'Does SASTRAVA provide startup incubation?', 'SASTRAVA can scope startup orientation, validation, business planning, and founder support. The exact format and availability are agreed case by case.'],
  ['Software & AI', 'Can you work with an existing application?', 'Yes. The team can first review the current code, architecture, integrations, and priorities, then propose a scoped improvement plan.'],
  ['Software & AI', 'How do you keep AI workflows reviewable?', 'A scoped AI workflow can include evaluation cases, human approval points, fallback behavior, and action logs appropriate to the task.'],
  ['Cybersecurity & VAPT', 'Do you test systems without written permission?', 'No. Security testing requires an agreed written authorization and asset scope before testing begins.'],
  ['Cybersecurity & VAPT', 'Will an audit guarantee compliance?', 'No. A technical review can document observations against agreed criteria, but it does not grant certification or guarantee compliance.'],
  ['SEO & Digital Marketing', 'Can you improve local and AI search visibility?', 'Work can cover technical SEO, local business information, useful answer-focused content, and measurement. Search placement cannot be guaranteed.'],
  ['Sastrava Edutech & Internships', 'How are workshops planned?', 'Topics, duration, learner baseline, exercises, and expected outputs are agreed with the institution or team before scheduling.'],
  ['Sastrava Edutech & Internships', 'Are internships available year-round?', 'Cohort dates and available project scopes vary. Contact Sastrava Edutech for current opportunities and requirements.'],
];

export const projectBlueprints = [
  { category: 'Consulting & Growth', title: 'Customer discovery and service positioning', problem: 'A team has several possible offers but limited evidence about which audience and promise deserve focus.', anatomy: 'Customer interviews → competitor and intent review → offer hypothesis → 90-day experiment plan.', deliverables: 'Interview prompts, positioning options, and a prioritized channel experiment backlog.', verification: 'Review the evidence gathered and decision criteria before the next investment.' },
  { category: 'AI & Automation', title: 'Human-reviewed workflow assistant', problem: 'Staff repeat a document-heavy process and need clearer triage without losing human control.', anatomy: 'Approved source intake → retrieval and bounded model output → staff review → logged action or safe fallback.', deliverables: 'Workflow map, evaluation cases, prototype boundary, and fallback specification.', verification: 'Test output quality, access boundaries, escalation, and failure behavior against agreed cases.' },
  { category: 'Software Builds', title: 'Accessible service application', problem: 'A service team needs a responsive application with clear roles and maintainable release practices.', anatomy: 'User journeys → interface and API contracts → data and environment design → CI checks and handover.', deliverables: 'Responsive interface, documented endpoints, automated checks, and deployment runbook.', verification: 'Validate acceptance criteria, keyboard paths, security boundaries, and release rollback.' },
  { category: 'Cybersecurity & VAPT', title: 'Authorized web and API security review', problem: 'An organization needs a prioritized view of risk across specified application and API assets.', anatomy: 'Written authorization and asset scope → controlled testing → evidence review → remediation and retest.', deliverables: 'Risk-ranked findings, evidence within scope, patch guidance, and retest notes.', verification: 'Confirm scope authorization, reproducibility, and fix status with the system owner.' },
  { category: 'Sastrava Edutech', title: 'Capstone learning pathway', problem: 'A learner cohort needs structured practice and project feedback across a selected technical domain.', anatomy: 'Baseline and learning goal → concepts and guided lab → capstone checkpoints → demonstration and reflection.', deliverables: 'Learning plan, lab exercises, project review rubric, and next-step recommendations.', verification: 'Assess against the agreed learning outcomes; completion records depend on the program terms.' },
];

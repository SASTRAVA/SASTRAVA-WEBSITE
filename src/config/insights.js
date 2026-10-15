export const insights = [
  {
    slug: 'choose-a-first-ai-automation',
    title: 'How to choose a useful first AI automation',
    summary: 'Start with a recurring workflow and a measurable problem. Decide whether AI is needed only after you understand the task, data, and risk.',
    readTime: '5 minute guide',
    serviceLabel: 'Explore AI and automation consulting',
    serviceHref: '/ai',
    sections: [
      { heading: 'Start with the work, not the tool', text: 'List the steps people repeat, where delays occur, and what a mistake would cost. A suitable first project is usually a bounded task with a clear owner and a result that can be checked. Examples include classifying incoming requests, drafting a first response for human review, or consolidating information from approved sources.' },
      { heading: 'Check whether AI is the right fit', text: 'If the task follows stable rules, a form, integration, or ordinary automation may be simpler and easier to maintain. Consider AI when the work involves language, variable inputs, or patterns that are difficult to express as fixed rules. Identify what data the system may use and whether it contains personal, confidential, or regulated information.' },
      { heading: 'Run a bounded pilot', text: 'Define a small test set, expected output, human review steps, and a safe fallback before connecting a system to live work. Track completion time, correction rate, and failure types. Keep a person responsible for decisions that affect customers, money, access, or safety. Expand only when the pilot is useful, secure, and supportable.' },
    ],
  },
  {
    slug: 'small-business-website-security-review',
    title: 'What to include in a small business website security review',
    summary: 'A practical review checks the site, its hosting and integrations, how data is handled, and whether the team can respond to findings.',
    readTime: '6 minute guide',
    serviceLabel: 'Explore security audit services',
    serviceHref: '/cybersecurity/security-audits',
    sections: [
      { heading: 'Agree the scope and permission first', text: 'List the domains, applications, APIs, cloud accounts, and third-party services that are in scope. Confirm who owns each system, which tests are authorized, and when they may run. A written scope reduces disruption and prevents tests from reaching customer or supplier systems that were not approved.' },
      { heading: 'Review common control areas', text: 'Check account access and multi-factor authentication, software and dependency updates, secure configuration, backups, logging, and how secrets are stored. For forms and APIs, review validation, rate limits, access control, data retention, and exposure of personal information. The depth of testing should match the system and agreed authorization.' },
      { heading: 'Turn findings into a fix plan', text: 'For each issue, record affected assets, evidence, likely impact, and a practical remediation owner. Prioritize based on exposure and business impact rather than a score alone. Patch or change configuration within the agreed scope, then retest the specific finding. A review describes what was examined; it cannot prove that a system is completely secure.' },
    ],
  },
  {
    slug: 'local-growth-search-and-marketing',
    title: 'A practical local growth plan: search, brand and paid media',
    summary: 'Connect local search visibility and brand communication to a clear offer, useful landing page, and conversion measurement before increasing spend.',
    readTime: '5 minute guide',
    serviceLabel: 'Explore brand and performance marketing',
    serviceHref: '/digital-marketing',
    sections: [
      { heading: 'Make the offer and service area clear', text: 'Use consistent business details and explain who the service is for, what problem it addresses, and where the business serves customers. Keep the website, business profile, and social profiles aligned. Do not create location pages that repeat the same copy with only a city name changed.' },
      { heading: 'Build a useful landing page', text: 'Answer the questions a prospective customer needs before contacting you: scope, process, deliverables, relevant experience, and a direct next step. Add proof only when it is accurate and approved for publication. Use descriptive links to connect the page to related services and contact options.' },
      { heading: 'Measure before scaling', text: 'Set up call, form, and messaging conversion measurement and define what counts as a qualified inquiry. Organic search can compound over time; paid search or social can test an offer and audience more quickly but spend should follow budget approval. Review lead quality and cost alongside traffic before expanding campaigns.' },
    ],
  },
  {
    slug: 'early-stage-business-discovery',
    title: 'A first business discovery plan for early-stage founders',
    summary: 'A focused discovery plan helps founders test a customer problem, clarify the offer, and decide what evidence they need before building.',
    readTime: '5 minute guide',
    serviceLabel: 'Explore business consulting and incubation',
    serviceHref: '/grow',
    sections: [
      { heading: 'Describe the customer problem', text: 'Write down who experiences the problem, what they do today, and why the current option is inadequate. Speak with people who fit the intended customer group and ask about recent behavior rather than asking whether they like an idea. Record themes and counterexamples so early assumptions do not become facts.' },
      { heading: 'Clarify the offer and constraints', text: 'Explain the proposed outcome in plain language, who pays, and how delivery could work. List the people, skills, time, costs, permissions, and technology the idea depends on. Identify the smallest test that can reduce an important uncertainty without overbuilding.' },
      { heading: 'Choose the next decision', text: 'Set a review point and decide in advance what evidence would justify continuing, changing direction, or stopping. A business model and roadmap are working hypotheses, not guarantees of funding or growth. Use what you learn to focus the next experiment and revisit assumptions as customer evidence changes.' },
    ],
  },
];

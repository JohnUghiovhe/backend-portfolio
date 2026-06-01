import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
  FRONTEND: 'frontend',
  BACKEND: 'backend',
};

export const TABS = [
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
  {
    label: 'Frontend',
    value: PROJECT_CATEGORY.FRONTEND,
    icon: 'fluent-mdl2:color',
  },
  {
    label: 'Backend',
    value: PROJECT_CATEGORY.BACKEND,
    icon: 'fluent-mdl2:server',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1777813377/Insighta_Labs_Web_fxcglg.png',
    title: 'Insighta Labs+',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
    ],
    description: [
      'Insighta Labs+ is a TypeScript/Express backend that powers a profile intelligence platform across both web and CLI interfaces. It provides secure GitHub OAuth (PKCE) authentication, role-based API access, deterministic natural-language search, and a unified token model, ensuring consistent behavior, security, and data integrity regardless of how the system is accessed.'
    ],
    repoLink: 'https://github.com/JohnUghiovhe/insighta-backend',
    techStack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis'],
    contributions: [
      'Designed and implemented the REST API surface and authentication flow (GitHub OAuth, PKCE).',
      'Built deterministic search and ranking logic used by both web and CLI clients.',
      'Implemented role-based authorization and token model to secure multi-interface access.'
    ],
    proof: { repo: 'https://github.com/JohnUghiovhe/insighta-backend' },
    category: [PROJECT_CATEGORY.BACKEND],
  },
  {
    title: 'Retry Engine - A Node.js Library for Reliable API Request Retrying',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'SQlite'),
    ],
    description: [
      'A Node.js library for handling reliable API request retrying with configurable backoff strategies and circuit breaker patterns.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/retry-engine',
    techStack: ['TypeScript', 'Node.js', 'SQLite'],
    contributions: [
      'Authored the retry strategies and circuit-breaker logic with configurable backoff.',
      'Wrote unit tests and provided examples for integrating with Fetch and Axios clients.'
    ],
    proof: { repo: 'https://github.com/JohnUghiovhe/retry-engine', npm: '' },
    category: [PROJECT_CATEGORY.BACKEND],
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1777813377/Invoice_management_app_fn51t7.png',
    title: 'Invoice Workflow Engine',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Typescript'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'PostgreSQL'),
    ],
    description: [
      'A full-stack invoice management system built with a backend-first architecture, supporting structured invoice workflows (draft → pending → paid), server-side validation, and dual persistence (PostgreSQL with automatic schema bootstrap and JSON fallback for local/test isolation). Designed for reliability across environments, with clean API design, validation boundaries, and testable data flows.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/invoice-management-app',
    techStack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Jest'],
    contributions: [
      'Defined the API specification and request/response contracts.',
      'Implemented workflow engine transitions and server-side validation rules.',
      'Wrote integration tests and created the automatic DB bootstrap for PostgreSQL.'
    ],
    proof: { repo: 'https://github.com/JohnUghiovhe/invoice-management-app', demo: '' },
    featured: true,
    deepDive: {
      problem: 'Teams needed a reliable way to manage invoices across states with consistent validation and auditability, avoiding data drift between environments.',
      architecture: 'Backend-driven API with PostgreSQL for primary persistence, JSON fallback for local tests, and a lightweight workflow engine handling state transitions. Services expose REST endpoints; job scheduler handles background tasks (email, invoice reconciliation).',
      keyEndpoints: [
        'POST /api/invoices - create invoice with validation',
        'GET /api/invoices/:id - retrieve invoice and history',
        'POST /api/invoices/:id/transition - move invoice through workflow (draft→pending→paid)'
      ],
      challenge: 'Ensuring idempotent state transitions and reliable background reconciliation across environments. Solved by introducing transition guards, optimistic row-level locking in Postgres, and a background job queue with retry logic.'
    },
    category: [PROJECT_CATEGORY.BACKEND],
  },
];

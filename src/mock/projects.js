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
    category: [PROJECT_CATEGORY.BACKEND],
  },
];

export const PROJECTS = [
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1777813377/Insighta_Labs_Web_fxcglg.png',
    title: 'Insighta Labs+',
    techStack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    description: [
      'Insighta Labs+ is a TypeScript/Express backend that powers a profile intelligence platform across web and CLI interfaces. It provides secure GitHub OAuth (PKCE) authentication, role-based API access, deterministic natural-language search, and a unified token model.'
    ],
    repoLink: 'https://github.com/JohnUghiovhe/insighta-backend',
    contributions: [
      'Designed the API surface, authentication flow, and access control for both web and CLI clients.',
      'Built deterministic search and ranking logic for profile data.',
      'Implemented token handling, short-lived in-memory caching for hot lookups, request logging, and route-scoped rate limiting.'
    ],
    proof: { repo: 'https://github.com/JohnUghiovhe/insighta-backend' },
    featured: true,
    deepDive: {
      problem: 'The product needed one backend that could serve both web and CLI clients without duplicating authentication, search, or authorization logic.',
      architecture: 'A TypeScript/Express API backed by PostgreSQL, with middleware for authentication, authorization, logging, and rate limiting. Search and token workflows are handled in service modules so clients share the same rules. Short-lived data is cached in-process (memory cache) for performance; Redis was not used in this implementation.',
      keyEndpoints: [
        'POST /auth/github - start GitHub OAuth (PKCE)',
        'GET /profile/search - search profile data deterministically',
        'GET /me - return the current authenticated profile',
      ],
      challenge: 'Keeping web and CLI behavior consistent while protecting tokens. Solved by using one shared token model, hashed token storage, and middleware-driven request checks.'
    },
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1780355490/request-detail_xftryp.png',
    title: 'Retry Engine - A Node.js Library for Reliable API Request Retrying',
    techStack: ['TypeScript', 'Node.js', 'SQLite'],
    description: [
      'A Node.js library for handling reliable API request retrying with configurable backoff strategies and circuit breaker patterns.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/retry-engine',
    contributions: [
      'Built the retry strategies, circuit-breaker logic, and lifecycle tracking for outbound requests.',
      'Persisted request state in SQLite and exposed simple operational endpoints.',
      'Added jittered backoff, validation, timeout cancellation, and worker locking.'
    ],
    proof: { repo: 'https://github.com/JohnUghiovhe/retry-engine' },
  },
  {
    imgSrc: 'https://res.cloudinary.com/djd7bdpdm/image/upload/v1777813377/Invoice_management_app_fn51t7.png',
    title: 'Invoice Workflow Engine',
    techStack: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
    description: [
      'A system built with a backend-first architecture, supporting structured invoice workflows (draft → pending → paid), server-side validation, and dual persistence (PostgreSQL with automatic schema bootstrap and JSON fallback for local/test isolation). Designed for reliability across environments, with clean API design, validation boundaries, and testable data flows.',
    ],
    repoLink: 'https://github.com/JohnUghiovhe/invoice-management-app',
    contributions: [
      'Defined the API specification and request/response contracts.',
      'Implemented workflow engine transitions and server-side validation rules.',
      'Wrote integration tests and created the automatic DB bootstrap for PostgreSQL.'
    ],
    proof: { repo: 'https://github.com/JohnUghiovhe/invoice-management-app' },
  },
];

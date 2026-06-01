export const SKILL_GROUPS = [
  {
    id: 'core',
    label: 'Core Stack',
    accent: '#00b4ff',
    skills: [
      { label: 'TypeScript', icon: 'logos:typescript-icon' },
      { label: 'Node.js', icon: 'vscode-icons:file-type-node' },
      { label: 'Express', icon: 'simple-icons:express' },
      { label: 'PostgreSQL', icon: 'vscode-icons:file-type-pgsql' },
      { label: 'SQLite', icon: 'vscode-icons:file-type-sqlite' },
      { label: 'Redis', icon: 'logos:redis' },
    ],
  },
  {
    id: 'delivery',
    label: 'Delivery & Reliability',
    accent: '#1a5fff',
    skills: [
      { label: 'REST APIs', icon: 'dashicons:rest-api' },
      { label: 'Authentication', icon: 'logos:jwt' },
      { label: 'Rate Limiting', icon: null },
      { label: 'Background Jobs', icon: null },
      { label: 'Queues', icon: null },
      { label: 'Logging', icon: null },
      { label: 'Testing', icon: 'logos:jest' },
      { label: 'Validation', icon: null },
      { label: 'Circuit Breakers', icon: null },
    ],
  },
  {
    id: 'tools',
    label: 'Workflow',
    accent: '#00d4a6',
    skills: [
      { label: 'Git', icon: 'logos:git' },
    ],
  },
];

export const FRONTEND_DESCRIPTIONS = [
  'Built an Event ticketing and management application called Eventful using Typescript, React js and Tailwind CSS on the frontend.',
  'Built a Restaurant ChatBot application using HTML, CSS and Javascript on the frontend.',
  'Built a real-time Guessing game using HTML, CSS and Javascript on the frontend.',
  'Built a modern portfolio website using Next.js and Tailwind CSS.',
];

export const BACKEND_DESCRIPTIONS = [
  'Developed a backend for an event ticketing and management system using Node.js, Express, MongoDB, and Redis.',
  'Integrated third-party OpenAPI tool(Swagger) into an application I designed called Eventful, to help developers and users easily navigate and test the API.',
  'Built and deployed a backend-driven restaurant chatbot application with NestJS and SQLite.',
  'Designed and implemented a blogging API using Node.js and Express, providing endpoints for creating, reading, updating, and deleting blog posts.',
  'Implemented a real-time game server with Express and Socket.IO, allowing players to interact and compete in real-time.',
];

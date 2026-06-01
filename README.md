# John Ughiovhe — Backend Portfolio

This repository is a backend-focused portfolio showcasing Node.js/TypeScript projects built during HNG and related work. The site is a minimal, readable presentation of projects, tech choices, and a featured deep dive.

## What's included
- Hero/profile
- Backend Skills (mapped to projects)
- Projects (backend-first descriptions and personal contributions)
- Featured project deep dive (Insighta Labs+)
- Learning reflection
- Contact details

## Tech stack
- Node.js, TypeScript, Express
- PostgreSQL, SQLite (for local persistence)
- In-memory caching for short-lived data (process-local)
- Jest for testing
- Next.js + Tailwind CSS for the portfolio UI
- Framer Motion: Production-ready declarative animations

## Run locally
1) Install dependencies

```bash
npm install
```

2) Development server (local port 4010)

```bash
npm run dev
# open http://localhost:4010
```

3) Build for production

```bash
npm run build
npm run start
```

## Environment variables
Optional for the contact EmailJS integration. Create `.env.local` with:

```env
NEXT_PUBLIC_EMAIL_SERVICE_ID=...
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=...
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=...
```

If you skip these, the contact card will still show your email and socials but the send form will be inactive.

## Customize content
- `src/mock/profile.js` — name, hero text, email, document title
- `src/mock/tech-skills.js` — skills shown on the Skills section
- `src/mock/projects.js` — project listings, contributions, and featured deep dive

## Contact
- Email: ughiovhejohn@gmail.com
- GitHub: https://github.com/JohnUghiovhe

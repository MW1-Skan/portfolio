import { Project } from '../models/project.model';

export const PORTFOLIO_DATA: Project[] = [
    // Experience — current
    {
        id: 'padoa-spst',
        title: 'Occupational Health Platform',
        company: 'Padoa',
        period: 'May 2026 — Present',
        role: 'Software Engineer',
        shortDescription: "Engineering France's leading SaaS for occupational health services (SPST).",
        fullDescription: "Software engineer on the platform France's occupational health services (SPST) rely on to monitor and prevent workplace health risks — regulated health data covering millions of employees. Shipped the compliance flow for the French e-invoicing reform against its legal deadline: bulk imports covering hundreds of thousands of companies, shaped with the design team to keep friction minimal under a hard date. Daily work on event-driven services at scale: Redis queues, workers and post-processors, Kubernetes deployments via ArgoCD.",
        techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes', 'ArgoCD', 'Azure', 'ElasticSearch'],
        type: 'enterprise',
        metrics: ['2M+ employees tracked', '200k+ companies', 'HDS & ISO 27001'],
        featured: true,
        current: true
    },

    // Experience — consulting years (Viveris Systèmes)
    {
        id: 'agri-scale',
        title: 'Precision Agriculture Platform',
        company: 'Viveris Systèmes',
        period: '2025 — 2026',
        role: 'Lead Developer',
        shortDescription: 'Architecting a high-scale solution for the agriculture industry.',
        fullDescription: 'Lead developer for a mission-critical platform managing agricultural data. Orchestrated a 300k+ LOC monorepo for Web & Mobile (Capacitor), handled massive Oracle datasets with .NET reporting integration, implemented the automated testing strategy with Cypress, and mentored the team through code reviews and CI/CD.',
        techStack: ['Angular', 'Node.js', 'AWS', 'Oracle', 'Capacitor', 'Cypress'],
        type: 'enterprise',
        metrics: ['300k+ LOC', 'Team of 6', 'Mobile & Web'],
        featured: false
    },
    {
        id: 'pharma-mobile',
        title: 'Health Consumer Mobile App',
        company: 'Viveris Systèmes',
        period: '2023 — 2025',
        role: 'Frontend Developer',
        shortDescription: 'Cross-platform mobile app with high security standards.',
        fullDescription: 'Developed a secure consumer mobile app (iOS/Android) for a major health client using Capacitor. Managed the full build pipeline (Xcode/Android Studio), implemented anti-reverse-engineering security, and ensured perfect responsiveness across thousands of devices.',
        techStack: ['Angular', 'Capacitor', 'Ionic', 'RxJS', 'Security'],
        type: 'enterprise',
        metrics: ['iOS & Android', 'Store Deployment', 'High Security'],
        featured: false
    },

    // Personal "Lab" Projects
    {
        id: 'chess-elo-predictor',
        title: 'Chess Elo Predictor',
        shortDescription: 'Production-style ML service predicting game outcomes and player ratings.',
        fullDescription: "From a finished Lichess game, predicts the outcome and the players' average Elo. Built as a production ML service, not a notebook: reproducible pipeline with leakage guards, honest baselines, a typed FastAPI service, tests and Docker — live on Google Cloud Run, scaling to zero. Trained and evaluated on 19k games with 5-fold cross-validation.",
        techStack: ['Python', 'scikit-learn', 'FastAPI', 'Docker', 'Cloud Run'],
        type: 'lab',
        aiAgentUsed: 'Claude Code',
        links: { demo: 'https://chess-elo-1011959788820.europe-west9.run.app', repo: 'https://github.com/MW1-Skan/chess-elo-predictor' },
        featured: true
    },
    {
        id: 'gmail-labeler',
        title: 'Gmail Auto-Labeler',
        shortDescription: 'LLM-powered, safe-by-design Gmail inbox triage.',
        fullDescription: 'A personal automation tool that classifies and labels my Gmail inbox with LLMs, built on the Claude Agent SDK. Safe by design: it only ever adds labels — never archives, never marks as read — and every run is idempotent.',
        techStack: ['Python', 'Claude Agent SDK', 'Gmail API'],
        type: 'lab',
        aiAgentUsed: 'Claude Code',
        links: { repo: 'https://github.com/MW1-Skan/gmail-labeler' },
        featured: false
    },
    {
        id: 'icebreakers',
        title: 'Retro Icebreakers',
        shortDescription: 'Real-time multiplayer icebreaker games for team retrospectives.',
        fullDescription: 'Seven real-time icebreaker games (Undercover, Codenames, Wavelength…) for team retrospectives: the facilitator projects the shared screen on a TV, players join by QR code and get their secret info on their own device. The server only ever sends per-audience projections — no secret can leak to the wrong client, guaranteed by non-leak tests — on a NestJS + WebSocket backend with Playwright e2e coverage.',
        techStack: ['Angular', 'NestJS', 'WebSockets', 'Playwright', 'Docker'],
        type: 'lab',
        aiAgentUsed: 'Claude Code',
        links: { repo: 'https://github.com/MW1-Skan/icebreakers' },
        featured: true
    },
    {
        id: 'gift-timeline',
        title: 'Gift Timeline',
        shortDescription: 'Event-based memory timelines with premium features.',
        fullDescription: 'A comprehensive SaaS for creating digital gift timelines. Features Supabase auth, Stripe payments, and a privacy-first architecture with GDPR compliance. Built to be a "forever" gift.',
        techStack: ['Angular 21', 'Supabase', 'Stripe', 'Resend', 'Vercel'],
        type: 'lab',
        aiAgentUsed: 'Claude Code & Gemini',
        links: { repo: 'https://github.com/MW1-Skan/gift-timeline' },
        featured: true
    },
    {
        id: 'emogen',
        title: 'Emogen',
        shortDescription: 'AI-powered emoji generator with Chrome extension.',
        fullDescription: 'An emoji-driven mood picker with a Chrome extension for browser-based emoji generation. Features AI-powered contextual emoji sets via GPT-4o-mini, glassmorphism UI with dark theme, history tracking, favorites, and one-click copy to clipboard.',
        techStack: ['Angular 20', 'Chrome Extension', 'Genkit', 'OpenAI', 'Tailwind'],
        type: 'lab',
        aiAgentUsed: 'Codex & Claude Code',
        links: { demo: 'https://emo-gen.org', repo: 'https://github.com/MW1-Skan/emogen' },
        featured: true
    },
    {
        id: 'its-ok',
        title: "It's Ok",
        shortDescription: 'A private iOS companion app, built for my wife.',
        fullDescription: 'Built for my wife: a private, single-user iOS companion app. SwiftUI on device, a FastAPI proxy on Cloud Run calling Vertex AI (Gemini) behind IAM — no API keys ever shipped in the app.',
        techStack: ['SwiftUI', 'Vertex AI', 'FastAPI', 'Cloud Run'],
        type: 'lab',
        aiAgentUsed: 'Claude Code',
        featured: false
    },
    {
        id: 'form-builder',
        title: 'My Form Builder',
        shortDescription: 'Flexible dynamic form generation system.',
        fullDescription: 'A powerful form builder allowing users to create custom forms with complex validation rules. Built without AI agents to demonstrate raw architectural skill and mastery of Angular Forms.',
        techStack: ['Angular 20', 'PrimeNG', 'Reactive Forms'],
        type: 'lab',
        aiAgentUsed: 'None',
        links: { repo: 'https://github.com/MW1-Skan/my_form_builder' },
        featured: false
    },
    {
        id: 'pet-picker',
        title: 'Pet Picker',
        shortDescription: 'Algorithmic pet recommendation engine.',
        fullDescription: 'A smart questionnaire application that matches users with their perfect pet breed. Uses a custom weighted scoring algorithm and local storage for privacy.',
        techStack: ['Angular 20', 'Tailwind', 'Signals'],
        type: 'lab',
        aiAgentUsed: 'Codex',
        links: { repo: 'https://github.com/MW1-Skan/pet_picker' },
        featured: true
    }
];

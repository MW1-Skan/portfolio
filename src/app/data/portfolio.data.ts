import { Project } from '../models/project.model';

export const PORTFOLIO_DATA: Project[] = [
    // Enterprise Projects
    {
        id: 'agri-scale',
        title: 'Precision Agriculture Platform',
        role: 'Lead Full Stack Developer',
        shortDescription: 'Architecting a high-scale solution for the agriculture industry.',
        fullDescription: 'Lead developer for a mission-critical platform managing agricultural data. Orchestrating a 300k+ LOC monorepo for Web & Mobile (Capacitor). Handling massive Oracle datasets with .NET reporting integration. Implemented automated testing strategy with Cypress.',
        techStack: ['Angular', 'Node.js', 'AWS', 'Oracle', 'Capacitor', 'Cypress'],
        type: 'enterprise',
        metrics: ['300k+ LOC', 'Team of 6', 'Mobile & Web'],
        featured: true
    },
    {
        id: 'pharma-mobile',
        title: 'Health Consumer Mobile App',
        role: 'Senior Frontend Developer',
        shortDescription: 'Cross-platform mobile app with high security standards.',
        fullDescription: 'Developed a secure consumer mobile app (iOS/Android) for a major health client using Capacitor. Managed the full build pipeline (Xcode/Android Studio), implemented anti-reverse-engineering security, and ensured perfect responsiveness across thousands of devices.',
        techStack: ['Angular', 'Capacitor', 'Ionic', 'RxJS', 'Security'],
        type: 'enterprise',
        metrics: ['iOS & Android', 'Store Deployment', 'High Security'],
        featured: false
    },

    // Personal "Lab" Projects (Agentic)
    {
        id: 'gift-timeline',
        title: 'Gift Timeline',
        role: 'Creator & Orchestrator',
        shortDescription: 'Event-based memory timelines with premium features.',
        fullDescription: 'A comprehensive SaaS for creating digital gift timelines. Features Supabase auth, Stripe payments, and a privacy-first architecture with GDPR compliance. Built to be a "forever" gift.',
        techStack: ['Angular 21', 'Supabase', 'Stripe', 'Resend', 'Vercel'],
        type: 'lab',
        aiAgentUsed: 'Claude Code & Gemini',
        links: { demo: 'https://gift-timeline.com', repo: 'https://github.com/MW1-Skan/gift-timeline' },
        featured: true
    },
    {
        id: 'emogen',
        title: 'Emogen',
        role: 'Creator & Orchestrator',
        shortDescription: 'AI-powered mood picker using OpenAI & Genkit.',
        fullDescription: 'An emoji-driven mood picker built with Angular 20 and Tailwind. Integrates a Genkit flow calling OpenAI’s gpt-4o-mini to analyze user sentiment and return curated emoji sets.',
        techStack: ['Angular 20', 'Genkit', 'OpenAI', 'Tailwind'],
        type: 'lab',
        aiAgentUsed: 'Codex',
        links: { demo: 'https://emo-gen.org', repo: 'https://github.com/MW1-Skan/emogen' },
        featured: true
    },
    {
        id: 'form-builder',
        title: 'My Form Builder',
        role: 'Architect',
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
        role: 'Creator & Orchestrator',
        shortDescription: 'Algorithmic pet recommendation engine.',
        fullDescription: 'A smart questionnaire application that matches users with their perfect pet breed. Uses a custom weighted scoring algorithm and local storage for privacy.',
        techStack: ['Angular 20', 'Tailwind', 'Signals'],
        type: 'lab',
        aiAgentUsed: 'Codex',
        links: { repo: 'https://github.com/MW1-Skan/pet_picker' },
        featured: true
    }
];

export interface TechStack {
    name: string;
    icon?: string;
}

export type ProjectType = 'enterprise' | 'personal' | 'lab';

export interface Project {
    id: string;
    title: string;
    role: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    type: ProjectType;
    aiAgentUsed?: string;
    metrics?: string[];
    imageUrl?: string;
    links?: {
        demo?: string;
        repo?: string;
    };
    featured: boolean;
}

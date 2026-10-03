export interface Project {
    id: string;
    image: string;
    gallery: string[];
    title: string;
    type: 'Freelance' | 'Team';
    privacy: 'Public' | 'Private';
    cardDesc: string;
    desc: string;
    role: string;
    year: string;
    tags: string[];
    demo: string;
    github: string;
    websiteType: string;
    sector: string;
    problem?: string;
    solution?: string;
    outcome?: string;
}

export interface BlogArticle {
    id: string;
    title: string;
    date: string;
    category: string;
    summary: string;
    content: string;
    tags: string[];
}

export type CertificateCategory =
    | 'Professional Certificate'
    | 'Specialization'
    | 'Competency Certificate'
    | 'Competition & Award'
    | (string & {});

export interface Certificate {
    id: string;
    title: string;
    category?: CertificateCategory;
    provider: string;
    issuer: string;
    date: string;
    skills: string[];
    credentialUrl: string;
    credential: string;
    image: string;
    logo: string;
}

export type Specialization = Certificate;

export interface Course {
    id: number;
    certificateId: string;
    specializationId?: string;
    title: string;
    provider: string;
    issuer: string;
    skills: string[];
    credentialUrl: string;
    credential: string;
    image: string;
}

export interface Experience {
    date: string;
    badge: string;
    badgeType?: 'default' | 'ghost';
    title: string;
    org: string;
    orgIcon: string;
    desc: string;
    gpa?: string;
}

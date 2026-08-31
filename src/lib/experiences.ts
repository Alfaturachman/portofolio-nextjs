import type { Experience } from './types';

export const experiences: Experience[] = [
    {
        date: 'AUG 2024 — PRESENT',
        badge: 'Current',
        title: 'Full Stack & ML Developer',
        org: 'Freelance / Independent Projects',
        orgIcon: 'briefcase',
        desc: '• Developing end-to-end web and software applications.\n• Building backend services, databases, and user interfaces.\n• Exploring machine learning, deep learning, and AI integration.\n• Translating project requirements into functional software solutions.',
    },
    {
        date: 'NOV 2025',
        badge: 'National Finalist',
        badgeType: 'ghost',
        title: 'National Student Scientific Week (PIMNAS) 38',
        org: 'Ministry of Education and Culture (Kemendikbud)',
        orgIcon: 'flask',
        desc: '• Selected as a National Finalist to represent the university at the 38th PIMNAS.\n• Developed a web platform and integrated an IoT device for real-time lung sound analysis.\n• Presented the project as part of the university national-level competition entry.',
    },
    {
        date: 'JUN 2024 — JUL 2025',
        badge: 'Internship',
        badgeType: 'ghost',
        title: 'Web Developer Intern',
        org: 'UDINUS Faculty of Engineering',
        orgIcon: 'university',
        desc: '• Developed an academic information system in collaboration with university stakeholders.\n• Designed relational database schemas and integrated RESTful APIs.\n• Developed frontend interfaces to streamline operational workflows for university staff.',
    },
];

export const skillsCategories = [
    {
        title: 'Languages',
        desc: 'Core programming languages used across frontend, backend, and mobile development.',
        tools: [
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'Python', icon: 'python' },
            { name: 'PHP', icon: 'php' },
            { name: 'Kotlin', icon: 'kotlin' },
            { name: 'Java', icon: 'java' },
        ],
    },
    {
        title: 'Frontend',
        desc: 'Component-based UI frameworks for building modern web interfaces.',
        tools: [
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'React', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
        ],
    },
    {
        title: 'Backend',
        desc: 'Server-side frameworks for building RESTful APIs and web applications.',
        tools: [
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Django', icon: 'django' },
            { name: 'Laravel', icon: 'laravel' },
            { name: 'CodeIgniter', icon: 'codeigniter' },
        ],
    },
    {
        title: 'Database',
        desc: 'Relational database systems for data storage and management.',
        tools: [
            { name: 'MySQL', icon: 'mysql' },
            { name: 'PostgreSQL', icon: 'postgresql' },
        ],
    },
    {
        title: 'Infrastructure',
        desc: 'Version control, collaboration, and containerization tooling.',
        tools: [
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Docker', icon: 'docker' },
        ],
    },
    {
        title: 'Tools',
        desc: 'Design and prototyping tools for UI/UX workflows.',
        tools: [
            { name: 'Figma', icon: 'figma' },
        ],
    },
];

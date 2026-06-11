import type { Experience } from './types';

export const experiences: Experience[] = [
    {
        date: '2024 — Present',
        badge: 'Current',
        title: 'Full Stack & AI Developer',
        org: 'Freelance / Independent Projects',
        orgIcon: 'briefcase',
        desc: '• Architecting and deploying end-to-end software solutions.\n• Building robust backend systems and seamless user interfaces.\n• Integrating intelligent AI features and machine learning models.\n• Transforming complex business requirements into scalable applications.',
    },
    {
        date: '2025',
        badge: 'National Finalist',
        badgeType: 'ghost',
        title: 'National Student Scientific Week (PIMNAS) 38',
        org: 'Ministry of Education and Culture (Kemendikbud)',
        orgIcon: 'flask',
        desc: '• Selected as a National Finalist to represent the university at the prestigious 38th PIMNAS.\n• Engineered a web platform and integrated an IoT device for real-time lung sound analysis.\n• Showcased this technological innovation to compete alongside top student researchers nationwide.',
    },
    {
        date: '2024 — 2025',
        badge: 'Internship',
        badgeType: 'ghost',
        title: 'Web Developer Intern',
        org: 'UDINUS Faculty of Engineering',
        orgIcon: 'university',
        desc: '• Engineered a core academic information system in direct collaboration with stakeholders.\n• Architected scalable relational database schemas and optimized RESTful API integrations.\n• Built a resilient frontend to streamline the operational workflows of university staff.',
    },
    {
        date: '2022 — 2025',
        badge: 'Education',
        badgeType: 'ghost',
        title: 'Associate Degree in Informatics',
        org: 'Dian Nuswantoro University',
        orgIcon: 'graduation-cap',
        desc: '• Graduated with a strong specialization in Software Engineering.\n• Shipped real-world applications ranging from full-stack web platforms to native Android apps.\n• Mastered state management, scalable database design, and end-to-end deployment pipelines.',
    },
];

export const skillsCategories = [
    {
        title: 'Frontend Architecture',
        desc: 'Building resilient, component-driven user interfaces with modern web standards and responsive performance in mind.',
        tools: [
            { name: 'HTML', icon: 'html' },
            { name: 'CSS', icon: 'css' },
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
            { name: 'React', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
        ],
    },
    {
        title: 'Backend & APIs',
        desc: 'Designing scalable server-side architectures, robust RESTful APIs, and efficient database models.',
        tools: [
            { name: 'Node.js', icon: 'nodejs' },
            { name: 'Python', icon: 'python' },
            { name: 'Django', icon: 'django' },
            { name: 'PHP', icon: 'php' },
            { name: 'Laravel', icon: 'laravel' },
            { name: 'CodeIgniter', icon: 'codeigniter' },
            { name: 'MySQL', icon: 'mysql' },
            { name: 'PostgreSQL', icon: 'postgresql' },
        ],
    },
    {
        title: 'Mobile & Platform Tooling',
        desc: 'Building native applications and ensuring reliable version control, containerization, and design workflow.',
        tools: [
            { name: 'Kotlin', icon: 'kotlin' },
            { name: 'Java', icon: 'java' },
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Figma', icon: 'figma' },
        ],
    },
];

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
        title: 'Frontend Architecture',
        desc: 'Building responsive and maintainable user interfaces using modern web technologies and component-based development.',
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
        desc: 'Developing server-side applications, RESTful APIs, and relational database systems for web applications.',
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
        desc: 'Working with mobile development, version control, containerization, and design tools across different projects.',
        tools: [
            { name: 'Kotlin', icon: 'kotlin' },
            { name: 'Java', icon: 'java' },
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Docker', icon: 'docker' },
            { name: 'Figma', icon: 'figma' },
            // { name: 'Adobe Illustrator', icon: 'adobe-illustrator-cc' },
        ],
    },
];

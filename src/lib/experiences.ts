import type { Experience } from './types';

export const experiences: Experience[] = [
    {
        date: 'MAY 2025 - MARCH 2026',
        badge: 'PIMNAS Finalist & IEEE Awardee',
        title: 'STEDI: Pre-Diagnostic Screening Assistant for Elderly Health Posts',
        org: 'Ministry of Education & EPICS in IEEE',
        orgIcon: 'flask',
        desc: '• As a team member, helped advance the STEDI innovation to the National Finals of the 38th Pekan Ilmiah Mahasiswa Nasional (PIMNAS) under the Student Creativity Program for Innovative Works (PKM-KI).\n• As part of the team, helped scale the project to an international level, securing a US$3,150 humanitarian technology grant from EPICS in IEEE (Jon C. Taenzer Memorial Fund).\n• Officially registered as a co-inventor in the Industrial Design Intellectual Property Rights (HKI) for the STEDI Monitor Box physical device.',
    },
    {
        date: 'OCT 2024 - JUNE 2025',
        badge: 'EPICS in IEEE',
        title: 'E-Growth: Digital Growth Monitoring Platform',
        org: 'EPICS in IEEE',
        orgIcon: 'flask',
        desc: '• Developed the functional components of E-Growth, a web-based platform integrated with the F-Scale pediatric measurement device to centralize patient data.\n• Implemented digital monitoring and visualization of child growth parameters and foot-arch analysis for early detection of flat foot and cavus foot.\n• Supported field implementation and testing at TK Ainun Habibie and local community health posts (Posyandu), enabling digital growth and foot-structure monitoring for approximately 20 children.',
    },
    {
        date: 'JUN 2024 - JUL 2025',
        badge: 'Internship',
        badgeType: 'ghost',
        title: 'Full-Stack Web Developer Intern',
        org: 'UDINUS Faculty of Engineering',
        orgIcon: 'university',
        desc: '• Developed and maintained four web-based systems for strategic planning, academic management, community service, and faculty healthcare operations, collaborating with university stakeholders.\n• RENSTRA FT: Strategic planning and KPI monitoring system for faculty strategic plans and lecturer workload.\n• Portfolio MK FT: Centralized platform for managing and documenting faculty course materials.\n• UMKM Repro: Supply chain management system for crumb rubber production and delivery route optimization using TSP, Nearest Neighbor, and Haversine.\n• Medical Checkup FT: Health platform integrated with IoT self-service health kiosks for patient data management.',
    },
];

// ponytail: reuses the Experience shape (date/badge/title/org/desc) so its
// section and CSS are shared with Experience; no new type needed.
export const educations: Experience[] = [
    {
        date: 'SEP 2025 - JUL 2027',
        badge: 'In Progress',
        title: 'Bachelor of Computer Science, Information Technology',
        org: 'Dian Nuswantoro University',
        orgIcon: 'university',
        gpa: '3.90',
        desc: '• Published at SINTA 3 JAIC: "Methodologically Sound Class-Imbalance Handling Detection via Training-Only Oversampling"\n• Published at SINTA 2 JTI: "Automatic Detection of Foot Arch Using Clarke\'s Angle Calculation Through A Web-Integrated System for Children"',
    },
    {
        date: 'SEP 2022 - JUL 2025',
        badge: 'Graduated',
        title: 'Associate of Computer Science, Information Technology',
        org: 'Dian Nuswantoro University',
        orgIcon: 'university',
        gpa: '3.89',
        desc: '• Tugas Akhir: Developed a website and Android app for crumb rubber management at UMKM Repro Semarang using the Traveling Salesman Problem method.',
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

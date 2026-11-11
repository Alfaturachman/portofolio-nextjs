import type { Experience } from './types';

export const experiences: Experience[] = [
    {
        date: 'OCT 2026 - PRESENT',
        badge: 'Internship',
        badgeType: 'ghost',
        title: 'IT Support Intern',
        org: 'PT Kinarya Alihdaya Mandiri',
        orgIcon: 'briefcase',
        desc: '• Support candidate recruitment processes from processing and screening applicant data through recruitment platforms based on HRD criteria, compiling candidate information and documents, coordinating interview schedules and formats (online/offline), to reporting compiled results to support the selection stages.\n• Contribute to quality control, validation, and alignment of outsourcing project billing administration documents across multiple clients, including a national tier-1 telecommunications client (20 files totaling over IDR 300 million) and a multinational FMCG manufacturing company, by verifying operational attachments, standardizing legal document formats, and reconciling data to support billing accuracy.\n• Support processing, standardization, and synchronization of outsourced workforce operational data for a national tier-1 telecommunications project (over 150 personnel across dozens of POs) and a construction and infrastructure partner company through cross-system attendance validation (digital attendance app, shift schedules, and timesheets), while contributing to enhancing an interactive Excel-based counseling form using XLOOKUP and dynamic data validation.',
    },
    {
        date: 'MAY 2025 - MARCH 2026',
        badge: 'PIMNAS Finalist & IEEE Awardee',
        title: 'AI/ML & Full-Stack Developer (STEDI)',
        org: 'PKM & EPICS in IEEE',
        orgIcon: 'flask',
        desc: '• Contributed to developing STEDI: Pre-Diagnostic Screening Assistant for Elderly Health Posts, advancing the innovation to the National Finals of the 38th Pekan Ilmiah Mahasiswa Nasional (PIMNAS) under the Student Creativity Program for Innovative Works (PKM-KI).\n• As part of the team, helped scale the project to an international level, securing a US$3,150 humanitarian technology grant from EPICS in IEEE (Jon C. Taenzer Memorial Fund).\n• Officially registered as a co-inventor in the Industrial Design Intellectual Property Rights (HKI) for the STEDI Monitor Box physical device.',
    },
    {
        date: 'OCT 2024 - JUNE 2025',
        badge: 'EPICS in IEEE',
        title: 'Full-Stack Developer (E-Growth)',
        org: 'EPICS in IEEE',
        orgIcon: 'flask',
        desc: '• Developed functional components for E-Growth: Digital Growth Monitoring Platform, a web-based system integrated with the F-Scale pediatric measurement device to centralize patient data.\n• Implemented automated foot-arch detection and classification (flatfoot, normal, and cavus foot) using Clarke\'s Angle calculation and digital image processing.\n• Evaluated and validated the system on 180 children aged 2–7 years across TK & Daycare Habibie Ainun and Posyandu Kemuning in Semarang, achieving 98.89% diagnostic accuracy against conventional wet footprint tests (published at SINTA 2 JTI).',
    },
    {
        date: 'JUN 2024 - JUL 2025',
        badge: 'Internship',
        badgeType: 'ghost',
        title: 'Full-Stack Web Developer Intern',
        org: 'UDINUS Faculty of Engineering',
        orgIcon: 'briefcase',
        desc: '• Developed four web-based systems: RENSTRA FT for faculty strategic planning, Portfolio MK FT for course material management, UMKM Repro for supply chain management, and Medical Checkup FT for health data management.\n• Collaborated with lecturers and faculty stakeholders to identify system requirements, develop features, and tailor application functionality to operational and academic needs.\n• Participated in web application development and maintenance, covering database design, API implementation, and user interface development to support workflow digitalization across the faculty.',
    },
];

// ponytail: reuses the Experience shape (date/badge/title/org/desc) so its
// section and CSS are shared with Experience; no new type needed.
export const educations: Experience[] = [
    {
        date: 'SEP 2025 - JUL 2027',
        badge: 'In Progress',
        title: 'Bachelor of Computer Science, Informatics Engineering',
        org: 'Dian Nuswantoro University',
        orgIcon: 'university',
        gpa: '3.90',
        desc: '• Published at SINTA 3 JAIC: "Methodologically Sound Class-Imbalance Handling in YOLOv8 Hand Fracture Detection via Training-Only Oversampling"\n• Published at SINTA 2 JTI: "Automatic Detection of Foot Arch Using Clarke\'s Angle Calculation Through A Web-Integrated System for Children"',
    },
    {
        date: 'SEP 2022 - JUL 2025',
        badge: 'Graduated',
        title: 'Associate of Computer Science, Informatics Engineering',
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
            // { name: 'HTML', icon: 'html' },
            // { name: 'CSS', icon: 'css' },
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
            { name: 'Bootstrap', icon: 'bootstrap' },
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
        title: 'Machine Learning',
        desc: 'Model development and data science tooling: classical machine learning, deep learning, and computer vision.',
        tools: [
            { name: 'Scikit-learn', icon: 'scikit-learn' },
            { name: 'TensorFlow', icon: 'tensorflow' },
            { name: 'Keras', icon: 'keras' },
            { name: 'PyTorch', icon: 'pytorch' },
            { name: 'NumPy', icon: 'numpy' },
            { name: 'Matplotlib', icon: 'matplotlib' },
            { name: 'Jupyter', icon: 'jupyter' },
        ],
    },
    {
        title: 'Database',
        desc: 'Relational database systems for data storage and management.',
        tools: [
            { name: 'MySQL', icon: 'mysql' },
            { name: 'MariaDB', icon: 'mariadb' },
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
            { name: 'Adobe Illustrator', icon: 'adobe-illustrator-cc' },
        ],
    },
];

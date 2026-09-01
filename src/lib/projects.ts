import type { Project } from './types';

export const projects: Project[] = [
    {
        id: 'renstra-ft',
        image: '/assets/images/projects/project-rencana-strategis-login.png',
        gallery: [
            '/assets/images/projects/project-rencana-strategis-login.png',
            '/assets/images/projects/project-rencana-strategis.png',
            '/assets/images/projects/project-rencana-strategis-hasil.png',
        ],
        title: 'RENSTRA FT',
        type: 'Team',
        privacy: 'Private',
        cardDesc:
            'Web system for monitoring the faculty strategic plan KPIs and lecturer workload.',
        desc: 'Information System for Strategic Plan (RENSTRA) for monitoring and reporting Key Performance Indicators (KPI/IKU) and lecturer workload (EWMP). Facilitates the university in monitoring annual target achievements. The dashboard provides clear visualizations of progress against multi-year strategic goals, allowing faculty leadership to make data-driven decisions and adjust operational tactics when specific targets fall behind schedule.',
        problem:
            'The faculty lacked a centralized source of information for monitoring KPI and lecturer workload, making long-term strategic targets difficult to evaluate consistently.',
        solution:
            'Developed a strategic planning information system with dashboards for monitoring annual targets and supporting EWMP report preparation.',
        outcome:
            'The system provides faculty stakeholders with centralized access to strategic performance data, helping them monitor progress and identify targets that require further attention.',
        role: 'Backend Developer',
        year: '2024',
        websiteType: 'Information System',
        sector: 'Academic',
        tags: ['CodeIgniter', 'PHP', 'Bootstrap', 'MySQL'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/renstra_ftdinus',
    },
    {
        id: 'portfolio-ft',
        image: '/assets/images/projects/project-portofolio-login.png',
        gallery: [
            '/assets/images/projects/project-portofolio-login.png',
            '/assets/images/projects/project-portofolio-riwayat.png',
            '/assets/images/projects/project-portofolio-form.png',
        ],
        title: 'Portfolio MK FT',
        type: 'Team',
        privacy: 'Private',
        cardDesc:
            'Centralized system for managing and documenting course materials across the Engineering Faculty.',
        desc: 'Management and documentation system for the entire academic cycle of FT courses. Enables tracking of syllabi, course materials, and assignments in one integrated platform for lecturers and students. The platform standardizes the course documentation process across the Engineering Faculty, ensuring that all course materials are centrally stored, easily accessible, and properly versioned for accreditation purposes.',
        problem:
            'Course documentation across the Engineering Faculty was scattered, making syllabi, materials, and assignments hard to find, track, and version for accreditation.',
        solution:
            'Built a centralized academic documentation system that tracks syllabi, course materials, and assignments across every FT course.',
        outcome:
            'Lecturers and students access course materials from one integrated, versioned platform, supporting consistent documentation and accreditation preparation.',
        role: 'Backend Developer',
        year: '2025',
        websiteType: 'Information System',
        sector: 'Academic',
        tags: ['CodeIgniter', 'PHP', 'Bootstrap', 'MySQL'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/portofolio-ftdinus',
    },
    {
        id: 'medical-checkup-ft',
        image: '/assets/images/projects/project-medical-login.png',
        gallery: [
            '/assets/images/projects/project-medical-login.png',
            '/assets/images/projects/project-medical-dashboard.png',
            '/assets/images/projects/project-medical-view-pasien.png',
            '/assets/images/projects/project-medical-data-periksa.png',
        ],
        title: 'Medical Checkup FT',
        type: 'Team',
        privacy: 'Private',
        cardDesc:
            'Health platform that records patient data from IoT self-service health kiosks.',
        desc: 'A web-based healthcare management system developed to support Anjungan Kesehatan Mandiri (Independent Health Kiosks) using IoT technology. Health data collected through the kiosks is transmitted via API and stored within the platform for monitoring, analysis, and reporting. This project was a collaborative initiative between FT Universitas Dian Nuswantoro and the Semarang Health Department to enhance digital healthcare services and improve public access to health monitoring.',
        problem:
            'Health data captured by IoT self-service health kiosks had no centralized system for storage, monitoring, or reporting.',
        solution:
            'Built a web-based healthcare management system that receives kiosk health data via API and stores it centrally for monitoring, analysis, and reporting.',
        outcome:
            'Health authorities get structured access to kiosk health data, supporting digital healthcare services and public health monitoring.',
        role: 'Backend & API Developer',
        year: '2024',
        websiteType: 'Information System',
        sector: 'Healthcare',
        tags: ['CodeIgniter', 'PHP', 'IoT', 'MySQL'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/ftdinus_medical',
    },
    {
        id: 'atr-bpn-jateng',
        image: '/assets/images/projects/project-atr-bpn-jateng-home.png',
        gallery: [
            '/assets/images/projects/project-atr-bpn-jateng-home.png',
            '/assets/images/projects/project-atr-bpn-jateng-login.png',
            '/assets/images/projects/project-atr-bpn-jateng-surat.png',
        ],
        title: 'ATR/BPN Jateng',
        type: 'Freelance',
        privacy: 'Private',
        cardDesc:
            'Web portal for managing official letters, dispositions, and agendas at ATR/BPN Central Java.',
        desc: 'A web portal for the Regional Office of ATR/BPN Central Java. It features a comprehensive administrative system for managing incoming and outgoing letters, tracking disposition workflows, scheduling agendas, and distributing public information. This system significantly improves the efficiency of internal administrative processes and provides better public access to land-related information in Central Java.',
        problem:
            'Official letter, disposition, and agenda workflows were handled manually, slowing internal administrative processes and public information distribution.',
        solution:
            'Developed a web portal managing incoming and outgoing letters, disposition workflows, agendas, and public information distribution for the regional office.',
        outcome:
            'Administrative processes run digitally with tracked workflows, and the public gains easier access to land information in Central Java.',
        role: 'Full-Stack Developer',
        year: '2024',
        websiteType: 'Web Portal',
        sector: 'Government',
        tags: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/atrbpn-jateng',
    },
    {
        id: 'crumb-rubber',
        image: '/assets/images/projects/project-rubber-home.png',
        gallery: [
            '/assets/images/projects/project-rubber-home.png',
            '/assets/images/projects/project-rubber-login.png',
            '/assets/images/projects/project-rubber-dashboard.png',
            '/assets/images/projects/project-rubber-mitra.png',
            '/assets/images/projects/project-rubber-stok.png',
        ],
        title: 'Crumb Rubber',
        type: 'Freelance',
        privacy: 'Private',
        cardDesc:
            'Inventory system for tracking raw materials, production, and stock in a crumb rubber factory.',
        desc: 'Inventory management system for the crumb rubber industry, including raw material recording, processed products, and real-time stock reports to improve factory operational efficiency. The system tracks the entire production lifecycle from the intake of raw rubber materials, through processing stages, to the final crumb rubber products ready for shipping.',
        problem:
            'Raw material intake, production, and stock were tracked manually, leaving the factory without accurate real-time inventory visibility.',
        solution:
            'Built an inventory system covering raw materials, processed products, and real-time stock reports across the production lifecycle.',
        outcome:
            'The system provides accurate stock visibility from raw rubber intake to finished products, supporting more efficient factory operations.',
        role: 'Full-Stack Developer',
        year: '2023',
        websiteType: 'Information System',
        sector: 'Manufacturing',
        tags: ['CodeIgniter', 'PHP', 'REST API', 'MySQL'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/crumb-rubber',
    },
    {
        id: 'iconnet-monitoring',
        image: '/assets/images/projects/project-iconnet-home.png',
        gallery: [
            '/assets/images/projects/project-iconnet-home.png',
            '/assets/images/projects/project-iconnet-login.png',
            '/assets/images/projects/project-iconnet-beranda.png',
            '/assets/images/projects/project-iconnet-pelanggan.png',
        ],
        title: 'Iconnet Monitoring',
        type: 'Freelance',
        privacy: 'Private',
        cardDesc:
            'Web app for reporting and tracking Iconnet internet service outages.',
        desc: 'A web-based monitoring system for Iconnet services that enables users to report service disruptions and allows technicians to track, manage, and resolve those reports efficiently. The system features a user-friendly dashboard for monitoring the status of outage reports in real-time, complete with notification workflows and historical reporting for service performance analysis.',
        problem:
            'Service outage reports relied on informal channels, making it hard for technicians to track, prioritize, and resolve disruptions.',
        solution:
            'Built a monitoring system where users report disruptions and technicians manage resolution with dashboards, notification workflows, and historical records.',
        outcome:
            'Outage reports are tracked in real time with clear status history, giving the team a structured view of service performance.',
        role: 'Full-Stack Developer',
        year: '2024',
        websiteType: 'Monitoring System',
        sector: 'Corporate',
        tags: ['CodeIgniter', 'PHP', 'Bootstrap', 'REST API', 'MySQL'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/iconnet-monitoring',
    },
    {
        id: 'pusdataru-jateng',
        image: '/assets/images/projects/project-pusdataru-home.png',
        gallery: [
            '/assets/images/projects/project-pusdataru-login.png',
            '/assets/images/projects/project-pusdataru-home.png',
            '/assets/images/projects/project-pusdataru-pengaduan.png',
        ],
        title: 'Pusdataru Jateng',
        type: 'Freelance',
        privacy: 'Private',
        cardDesc:
            'Platform for citizens to submit and track public complaints in Central Java.',
        desc: 'A web-based complaint management information system for the province of Central Java (Pusdataru Jateng) that allows citizens to submit, track, and manage public complaints digitally. Built with Laravel and MySQL, the system streamlines the workflow from complaint submission through verification, assignment to relevant departments, and resolution tracking.',
        problem:
            'Public complaints arrived through fragmented channels with no central workflow to verify, assign, and track their resolution.',
        solution:
            'Developed a Laravel-based complaint management system handling submission, verification, assignment to relevant offices, and resolution tracking.',
        outcome:
            'Citizens can submit and track complaints digitally, and authorities follow a structured workflow from verification to resolution.',
        role: 'Full-Stack Developer',
        year: '2025',
        websiteType: 'Information System',
        sector: 'Government',
        tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
        demo: '#',
        github: '#',
    },
    {
        id: 'disnaker-agenda',
        image: '/assets/images/projects/project-disnaker-mediasi-login.png',
        gallery: [
            '/assets/images/projects/project-disnaker-mediasi-login.png',
            '/assets/images/projects/project-disnaker-mediasi-home.png',
            '/assets/images/projects/project-disnaker-mediasi-riwayat.png',
        ],
        title: 'Disnaker Agenda Mediasi',
        type: 'Freelance',
        privacy: 'Private',
        cardDesc:
            'App for scheduling and recording labor mediation sessions at the Manpower Office.',
        desc: 'A web-based agenda mediation system for the Manpower Office (Disnaker) to manage the scheduling, recording, and tracking of mediation sessions between workers and employers. Streamlines the mediation process with digital records, status tracking, and report generation.',
        problem:
            'Mediation session scheduling and records between workers and employers were managed manually, making tracking and reporting tedious.',
        solution:
            'Created a digital agenda system for scheduling, recording, and tracking labor mediation sessions with status tracking and report generation.',
        outcome:
            'Mediation staff manage schedules and session records digitally and can generate reports from a complete session history.',
        role: 'Full-Stack Developer',
        year: '2025',
        websiteType: 'Information System',
        sector: 'Government',
        tags: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/disnaker_agenda',
    },
    {
        id: 'posyandu',
        image: '/assets/images/projects/project-egrowth-home.png',
        gallery: [
            '/assets/images/projects/project-egrowth-home.png',
            '/assets/images/projects/project-egrowth-login.png',
            '/assets/images/projects/project-egrowth-detail.png',
        ],
        title: 'Posyandu Information System',
        type: 'Freelance',
        privacy: 'Private',
        cardDesc:
            'Digital replacement of the manual pink book for toddler growth records and immunization schedules.',
        desc: "A web-based Posyandu information system built with Laravel PHP to digitize toddler growth and immunization records. Every week, children's immunizations and developmental progress are recorded — replacing the traditional pink book (Buku Pink) system with a fully digital, searchable, and reportable database.",
        problem:
            'Toddler growth and immunization records were kept in the manual pink book (Buku Pink), making data hard to search, track, and report.',
        solution:
            'Digitized growth and immunization records with a Laravel web system, recording weekly child development and immunization data.',
        outcome:
            'Posyandu cadres and health workers access searchable digital records with structured reporting in place of the paper book.',
        role: 'Full-Stack Developer',
        year: '2025',
        websiteType: 'Information System',
        sector: 'Healthcare',
        tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/sistem-posyandu',
    },
    {
        id: 'stedi',
        image: '/assets/images/projects/project-stedi-login.png',
        gallery: [
            '/assets/images/projects/project-stedi-login.png',
            '/assets/images/projects/project-stedi-diagnosa.png',
            '/assets/images/projects/project-stedi-pasien.png',
        ],
        title: 'STEDI Digital Stethoscope',
        type: 'Team',
        privacy: 'Private',
        cardDesc:
            'Digital stethoscope device that analyzes recorded lung sounds using AI to support diagnosis.',
        desc: 'STEDI is a medical device that can record lung sounds and analyze them using artificial intelligence. This system is expected to help doctors diagnose lung diseases more quickly and accurately using deep learning models.',
        problem:
            'Lung disease assessment depends heavily on specialist interpretation of recorded sounds, which can be time-consuming and subjective.',
        solution:
            'Developed a digital stethoscope that records lung sounds and analyzes them with a deep learning model to support diagnosis.',
        outcome:
            'The device provides AI-assisted analysis of recorded lung sounds, offering an additional signal to support doctors during diagnosis.',
        role: 'AI & Backend Developer',
        year: '2025',
        websiteType: 'AI Web App',
        sector: 'Healthcare',
        tags: ['Python', 'Django', 'Keras', 'Firebase', 'IoT'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/stediwave',
    },
    {
        id: 'nomadenstuff',
        image: '/assets/images/projects/project-nomadenstuff-home.png',
        gallery: [
            '/assets/images/projects/project-nomadenstuff-home.png',
            '/assets/images/projects/project-nomadenstuff-shop.png',
            '/assets/images/projects/project-nomadenstuff-cart.png',
            '/assets/images/projects/project-nomadenstuff-history.png',
        ],
        title: 'NomadenStuff Ecommerce',
        type: 'Freelance',
        privacy: 'Public',
        cardDesc:
            'E-commerce web app for a thrift shop with product reservations and shipping calculation.',
        desc: 'NomadenStuff Ecommerce is a specialized e-commerce application built for a thrift shop business. The platform manages unique, single-item inventory typical in thrifting, offering features like product reservations, detailed sizing guides, and automated shipping calculations.',
        problem:
            'A thrift shop selling unique single-item stock struggled to manage reservations, sizing details, and shipping without a dedicated platform.',
        solution:
            'Built an e-commerce app with product reservations, detailed sizing guides, and automated shipping calculations for single-item inventory.',
        outcome:
            'Customers reserve items and get accurate shipping estimates, while the owner manages the one-of-a-kind catalog in one place.',
        role: 'Full-Stack Developer',
        year: '2023',
        websiteType: 'E-Commerce',
        sector: 'Retail',
        tags: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/nomadenstuff_ecommerce',
    },
    {
        id: 'sertifikasi',
        image: '/assets/images/projects/project-sertfikasi-data-scientist-cover.jpg',
        gallery: [
            '/assets/images/projects/project-sertfikasi-data-scientist-cover.jpg',
            '/assets/images/projects/project-sertfikasi-data-scientist-info.jpg',
        ],
        title: 'BNSP Data Scientist',
        type: 'Freelance',
        privacy: 'Public',
        cardDesc:
            'Machine learning system for stroke risk screening, built for the BNSP data scientist certification.',
        desc: 'An end-to-end Machine Learning stroke risk screening system and executive visual portfolio developed for the Certified Data Scientist (BNSP) assessment. Built using a clinical stroke dataset from Kaggle contextualized for the Posbindu PTM program in Semarang City under strict CRISP-DM methodology and 11 SKKNI competency units, the project engineers a leak-free preprocessing pipeline. It benchmarks 5 ML algorithms—achieving a champion Logistic Regression F1-score of 0.6538 (+11.55% over baseline literature)—and integrates SHAP (SHapley Additive exPlanations) for transparent clinical feature interpretability.',
        problem:
            'Stroke risk screening in the Posbindu PTM program lacked an evidence-based, interpretable decision-support tool for health officers.',
        solution:
            'Built an end-to-end machine learning system under CRISP-DM, benchmarking five algorithms with a leak-free preprocessing pipeline and SHAP for transparent feature interpretation.',
        outcome:
            'The champion Logistic Regression model achieved an F1-score of 0.6538 — an 11.55% improvement over baseline literature — with SHAP explaining the clinical features behind each prediction.',
        role: 'Data Scientist',
        year: '2026',
        websiteType: 'Infographic',
        sector: 'Education',
        tags: ['Data Science', 'Infographic', 'CRISP-DM', 'Machine Learning', 'SHAP', 'Python'],
        demo: '#',
        github: 'https://github.com/Alfaturachman/data-scientist-bnsp',
    },
    {
        id: 'kireikies',
        image: '/assets/images/projects/project-kireikies-menu.png',
        gallery: ['/assets/images/projects/project-kireikies-menu.png'],
        title: 'Kireikies Cookies Website',
        type: 'Freelance',
        privacy: 'Public',
        cardDesc:
            'Product catalog website for the Kireikies Cookies store.',
        desc: 'Website for Kireikies Cookies store, showcasing product catalog and store information. This project was built with a focus on clean UI and smooth user experience to enhance artisan product branding.',
        problem:
            'The Kireikies Cookies store had no online presence to showcase its product catalog and store information.',
        solution:
            'Built a Next.js product catalog website with clean UI and smooth interactions for the store brand.',
        outcome:
            'Customers can browse the product catalog and store details online, strengthening the artisan product brand.',
        role: 'Frontend Developer',
        year: '2026',
        websiteType: 'Landing Page',
        sector: 'Retail',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        demo: 'https://kireikies-cookies.vercel.app/',
        github: 'https://github.com/Alfaturachman/kireikies-cookies',
    },
];

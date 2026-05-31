import type { BlogArticle } from './types';

export const articles: BlogArticle[] = [
    {
        id: 'membangun-arsitektur-partials',
        title: 'Membangun Arsitektur Partials Tanpa Framework',
        date: '2026-05-25',
        category: 'Architecture',
        summary:
            "Teknik menjaga kode tetap DRY (Don't Repeat Yourself) menggunakan ES Modules untuk komponen Navbar dan Footer.",
        content: `
      <p>Siapa bilang partials hanya bisa dibuat dengan PHP atau React? Kita bisa menggunakan ES Modules murni.</p>
    `,
        tags: ['Clean Code', 'Web Architecture', 'Vanilla JS'],
    },
    {
        id: 'integrasi-rest-api-codeigniter',
        title: 'Pola Terbaik Integrasi REST API di CodeIgniter 3',
        date: '2026-05-20',
        category: 'Tutorial',
        summary:
            'Studi kasus integrasi REST API pada proyek Medical Checkup FT — dari struktur controller hingga error handling yang konsisten.',
        content: `
      <p>CodeIgniter 3 mungkin lawas, tetapi tetap menjadi pilihan solid untuk proyek pemerintahan dan institusi pendidikan di Indonesia.</p>
    `,
        tags: ['CodeIgniter', 'REST API', 'PHP'],
    },
    {
        id: 'machine-learning-klasifikasi-sinyal',
        title: 'Klasifikasi Sinyal Suara Paru dengan Deep Learning',
        date: '2026-05-10',
        category: 'AI/ML',
        summary:
            'Pengalaman mengembangkan model Keras untuk mendeteksi crackle dan wheeze pada data auskultasi paru untuk proyek STEDI.',
        content: `
      <p>STEDI menggunakan convolutional neural network untuk mengklasifikasikan suara paru menjadi beberapa kategori.</p>
    `,
        tags: ['Python', 'Keras', 'Deep Learning', 'IoT'],
    },
    {
        id: 'css-grid-vs-flexbox',
        title: 'CSS Grid vs Flexbox: Kapan Memilih yang Mana?',
        date: '2026-05-05',
        category: 'Technical',
        summary:
            'Perbandingan praktis antara CSS Grid dan Flexbox beserta studi kasus layout yang umum ditemui dalam pengembangan web.',
        content: `
      <p>Dua layout CSS terkuat ini sering membingungkan. Grid untuk 2 dimensi, Flexbox untuk 1 dimensi.</p>
    `,
        tags: ['CSS', 'Frontend', 'Layout'],
    },
    {
        id: 'iot-integrasi-web',
        title: 'Integrasi IoT dengan Web Application via REST API',
        date: '2026-04-28',
        category: 'IoT',
        summary:
            'Bagaimana data dari timbangan dan stetoskop IoT dikirim ke server web menggunakan protokol HTTP/REST.',
        content: `
      <p>Proyek Medical Checkup FT menghubungkan alat kesehatan IoT dengan web application melalui REST API.</p>
    `,
        tags: ['IoT', 'REST API', 'Embedded Systems'],
    },
    {
        id: 'laravel-eloquent-tips',
        title: '5 Tips Eloquent ORM untuk Aplikasi Posyandu',
        date: '2026-04-20',
        category: 'Tutorial',
        summary:
            'Optimasi query Eloquent pada sistem informasi Posyandu dengan ribuan data tumbuh kembang balita.',
        content: `
      <p>Eloquent ORM sangat powerful, tetapi tanpa perhatian bisa menjadi lambat pada skala tertentu.</p>
    `,
        tags: ['Laravel', 'Eloquent', 'Database'],
    },
];

export function getArticle(id: string): BlogArticle | undefined {
    return articles.find((a) => a.id === id);
}

import type { BlogArticle } from './types';

export const articles: BlogArticle[] = [
    {
        id: 'optimasi-canvas-vanilla-js',
        title: 'Optimasi Performa Canvas Mesh di Vanilla JavaScript',
        date: '2026-05-28',
        category: 'Technical',
        summary:
            'Bagaimana cara menggunakan Intersection Observer untuk menghemat penggunaan CPU hingga 80% pada animasi background interaktif.',
        content: `
      <p>Animasi mesh interaktif seringkali memakan resource CPU yang besar. Dalam artikel ini, kita akan membahas teknik optimasi menggunakan <strong>Intersection Observer API</strong>.</p>
      <h3>1. Masalah: Loop Tanpa Akhir</h3>
      <p>Banyak pengembang membiarkan <code>requestAnimationFrame</code> berjalan terus menerus meskipun user sudah melakukan scroll menjauh dari section tersebut.</p>
      <h3>2. Solusi: Pause Saat Tidak Terlihat</h3>
      <p>Dengan mendeteksi visibilitas elemen, kita bisa mematikan loop animasi saat elemen tidak berada di viewport.</p>
    `,
        tags: ['JavaScript', 'Performance', 'Canvas'],
    },
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
        id: 'deploy-nextjs-vercel',
        title: 'Deploy Next.js ke Vercel dengan Custom Domain',
        date: '2026-05-15',
        category: 'DevOps',
        summary:
            'Langkah-langkah deployment aplikasi Next.js ke Vercel lengkap dengan konfigurasi custom domain dan optimasi performa.',
        content: `
      <p>Vercel adalah platform deployment terbaik untuk aplikasi Next.js. Artikel ini membahas proses dari push ke production.</p>
    `,
        tags: ['Next.js', 'Vercel', 'Deployment'],
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

import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Chatbot from '@/components/Chatbot';
import { ThemeProvider } from '@/lib/theme-context';
import { ChatbotProvider } from '@/lib/chatbot-context';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-jakarta',
    display: 'swap',
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-dm-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Alfaturachman Maulana Pahlevi | Software Engineer Portfolio',
    description:
        'Portfolio of Alfaturachman Maulana Pahlevi - Software Engineer focused on DevOps and AI solutions. Discover my projects in Full-Stack development and Machine Learning.',
    keywords:
        'Alfaturachman Maulana Pahlevi, Alfaturachman, Software Engineer, DevOps, AI, Machine Learning, Portfolio, Web Developer',
    authors: [{ name: 'Alfaturachman Maulana Pahlevi' }],
    openGraph: {
        title: 'Alfaturachman Maulana Pahlevi | Software Engineer Portfolio',
        description:
            'Software Engineer focused on DevOps and AI solutions. Explore my latest works and technical expertise.',
        url: 'https://almavi.vercel.app/',
        siteName: 'almavi',
        images: [
            {
                url: 'https://almavi.vercel.app/assets/images/logo/logo-seo.png',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Alfaturachman Maulana Pahlevi | Software Engineer Portfolio',
        description:
            'Software Engineer focused on DevOps and AI solutions. Explore my latest works and technical expertise.',
        images: ['https://almavi.vercel.app/assets/images/logo/logo-seo.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.variable} ${plusJakarta.variable} ${dmSans.variable}`}
            suppressHydrationWarning
            data-scroll-behavior="smooth"
        >
            <head>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/assets/images/logo/logo.svg"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#3b5bdb" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                var t = localStorage.getItem('theme');
                                if (t === 'dark' || t === 'light') {
                                    document.documentElement.setAttribute('data-theme', t);
                                }
                            })();
                        `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: 'Alfaturachman Maulana Pahlevi',
                            url: 'https://almavi.vercel.app/',
                            image: 'https://almavi.vercel.app/assets/images/profile/pp-curug.jpg',
                            sameAs: [
                                'https://github.com/Alfaturachman',
                                'https://www.linkedin.com/in/alfaturachman-maulana-pahlevi-4981302b6/',
                                'https://www.instagram.com/al.mavi/',
                                'https://twitter.com/alfaturachman',
                            ],
                            jobTitle: 'Software Engineer',
                            knowsAbout: [
                                'DevOps',
                                'Artificial Intelligence',
                                'Full-Stack Development',
                                'Machine Learning',
                            ],
                        }),
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col">
                <ThemeProvider>
                    <Cursor />
                    <a href="#main-content" className="skip-link">
                        Skip to content
                    </a>
                    <ChatbotProvider>
                        <Navbar />
                        <main id="main-content" className="flex-1">
                            {children}
                        </main>
                        <Footer />
                        <Chatbot />
                    </ChatbotProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}

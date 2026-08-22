import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    turbopack: {
        root: process.cwd(),
    },
    headers: async () => [
        {
            source: '/(.*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store, must-revalidate',
                },
                {
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff',
                },
                {
                    key: 'Referrer-Policy',
                    value: 'strict-origin-when-cross-origin',
                },
                {
                    key: 'Permissions-Policy',
                    value:
                        'camera=(), microphone=(), geolocation=(), interest-cohort=()',
                },
                {
                    key: 'Content-Security-Policy',
                    value: [
                        "default-src 'self'",
                        // ponytail: 'unsafe-inline' stays until Next.js nonce-based CSP; inline theme-init script and font styles require it.
                        "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
                        "style-src 'self' 'unsafe-inline'",
                        "img-src 'self' data: blob:",
                        "font-src 'self' data:",
                        "connect-src 'self' https://va.vercel-scripts.com",
                        "frame-ancestors 'none'",
                        "base-uri 'self'",
                        "form-action 'self'",
                        'upgrade-insecure-requests',
                    ].join('; '),
                },
            ],
        },
        {
            source: '/assets/(.*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        },
    ],
};

export default nextConfig;

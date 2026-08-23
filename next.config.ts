import type { NextConfig } from 'next';

// ponytail: dev-only 'unsafe-eval' exists because React's dev tooling requires it;
// production builds keep the strict policy.
const isDev = process.env.NODE_ENV === 'development';

const csp = [
    "default-src 'self'",
    // ponytail: 'unsafe-inline' stays until Next.js nonce-based CSP; inline theme-init script and font styles require it.
    `script-src 'self' 'unsafe-inline'${
        isDev ? " 'unsafe-eval'" : ''
    } https://va.vercel-scripts.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self' https://va.vercel-scripts.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    'upgrade-insecure-requests',
].join('; ');

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
                    value: csp,
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

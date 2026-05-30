import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    headers: async () => [
        {
            source: '/(.*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'no-store, must-revalidate',
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
